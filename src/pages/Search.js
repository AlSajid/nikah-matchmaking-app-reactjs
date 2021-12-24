import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import MiniProfile from './MiniProfile';

const Search = () => {

    const [result, setResult] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        fetch(`https://eyafi.pythonanywhere.com/account/user/?search=${search}`)
            .then(response => response.json())
            .then(data => setResult(data));
    }, [search]);


    return (
        <div className='bg-slate-300'>
            <Header></Header>
            <div className="container bg-red-900 my-3 mx-auto">
                <input className='bg-re w-full border shadow p-3' placeholder='খুঁজুন...' onChange={e => setSearch(e.target.value)} />
            </div>

            <div className='container mx-auto my-3 bg-white'>
                <div className='py-3 my-3 '>
                    <h1 className='text-red-600  text-3xl  tarunya'>অনুসন্ধান ফলাফল</h1>

                </div>
                <hr />
                <div className='flex flex-row flex-wrap'>
                    {
                        (result.length === 0) ?
                            <h1 className='text-xl text-gray-500 text-center'>কাউকে পাওয়া যাচ্ছে না!</h1>
                            :
                            result.map(user => <MiniProfile key={user.id} user={user}></MiniProfile>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Search;