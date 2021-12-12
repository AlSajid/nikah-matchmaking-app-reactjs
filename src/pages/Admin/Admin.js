import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch(`http://eyafi.pythonanywhere.com/account/user/`)
      .then(response => response.json())
      .then(data => setAllUsers(data));
  }, [allUsers]);



  const handleDeleteButton = (id) => {

    const url = `http://eyafi.pythonanywhere.com/account/user/${id}`;
    console.log(url);

    fetch(url, {method: 'DELETE'})
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <div className="container mt-12 mx-auto ">
      <div className="m-3 p-3 rounded-xl mx-auto ">
        <h1 className="py-3 font-bold text-3xl text-center">প্রশাসক সূচি</h1>
        <hr />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-lg">

          {
            allUsers.map(user =>
              <div className=" bg-white m-3 p-3 border rounded-md " >
                <table className="w-full">
                  <tr className="border-b">
                    <td>নং</td>
                    <td>{user.id}</td>
                  </tr>
                  <tr className="border-b">
                    <td>নাম</td>
                    <td>{user.name}</td>
                  </tr>
                  <tr className="border-b">
                    <td>ইউজারনেম</td>
                    <td>{user.username}</td>
                  </tr>
                  <tr className="text-center" >
                    <td colSpan="2">
                      <button
                        className="bg-red-600 text-white font-semibold p-3 m-3 text-sm shadow rounded-md"
                        onClick={() => handleDeleteButton(user.id)}>
                        মুছে ফেলুন
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            )
          }



        </div>


      </div>
    </div >
  );
};

export default Admin;