import React, { useRef } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { useState } from 'react/cjs/react.development';
import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';


const UpdateProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const picRef = useRef();
  const birthRef = useRef();
  const professionRef = useRef();
  const genderRef = useRef();
  const footRef = useRef();
  const inchRef = useRef();
  const religionRef = useRef();
  const workplaceRef = useRef();
  const maritalRef = useRef();

  function handleUpdateProfile(e) {
    e.preventDefault(); // preventing reload on htmlForm submit

    const picture = picRef.current.files[0];
    const birth = birthRef.current.value;
    const profession = professionRef.current.value;
    const gender = genderRef.current.value;
    const height = footRef.current.value * 12 + parseInt(inchRef.current.value);
    const religion = religionRef.current.value;
    const workplace = workplaceRef.current.value;
    const marital = maritalRef.current.value;
    const id = user.id;

    const form = new FormData();
    form.append("image", picture);
    form.append("dateOfBirth", birth);
    form.append("sex", gender);
    form.append("height", height);
    form.append("religion", religion);
    form.append("proffession", profession);
    form.append("workplace", "শিক্ষক");
    form.append("marital_status", marital);
    form.append("present_address_district", "ঢাকা");
    form.append("present_address_division", "ঢাকা");
    form.append("permanent_address_district", "ঢাকা");
    form.append("skin_tone", "ফর্সা");
    form.append("blood_group", "AB+");
    form.append("yearly_income", "12000");
    form.append("educational_qualification", "Bachelor");
    form.append("bio:", "আমি ভালো আছি");
    form.append("user", id);

    console.log(id);

    // "id": 5,
    // "image": "http://eyafi.pythonanywhere.com/media/uploads/eyafineo%40gmail.com/avatar1033632307-0.jpg",
    // "dateOfBirth": "2021-12-11",
    // "sex": "Male",
    // "height": 70,
    // "religion": "Islam",
    // "proffession": "Software Engineer",
    // "workplace": "SWE",
    // "marital_status": "Single",
    // "present_address_district": "Noakhali",
    // "present_address_division": "CTg",
    // "permanent_address_district": "Noakhali",
    // "permanent_address_division": "Ctg",
    // "skin_tone": "Brown",
    // "blood_group": "B+",
    // "yearly_income": "Null",
    // "educational_qualification": "BSC",
    // "bio": "",
    // "user": 33


    fetch('http://eyafi.pythonanywhere.com/account/profile/', {
      method: 'POST',
      body: form
    })
      .then(response => response.json())
      .then(data => data.id ? navigate("/update-profile") : setError("ভুল হয়েছে"));
  }

  return (
    <div>
      <Header></Header>
      <div className="container mt-12  mx-auto">
        <div className=" m-3 p-1 mx-auto w-1/2">

          <div>
            <h5 className="text-red-600 text-center text-3xl py-1 tarunya">তথ্য সম্পাদন</h5>
          </div>

          <div className="text-center bg-red-900 my-3 rounded-md text-white p-1">
            {error}
          </div>

          <form autoComplete="off" onSubmit={handleUpdateProfile}>
            <div className="">

              <div className="p-1 my-1  ">
                <label htmlFor="displayPicture" className="text-center font-semibold">ছবি</label>
                <input accept='image/*' type="file" ref={picRef} className="w-full p-1 my-1 border-b-2" />
              </div>

              <div className="grid grid-cols-2 p-1 my-1  ">
                <div className='p-1'>
                  <label htmlFor="birth" className='font-semibold'>জন্ম</label>
                  <input type="date" ref={birthRef} className="w-full p-1 my-1 border-b-2" />
                </div>

                <div className="p-1 border-l">
                  <label htmlFor="birth" className='mx-1 font-semibold'>লিঙ্গ</label>
                  <br />
                  <div className='p-1'>
                    <input className='mx-1' type="radio" name="age" value="Male" ref={genderRef} />
                    <label className='mx-1' htmlFor="gender">পুরুষ</label>
                    <br />
                    <input className='mx-1' type="radio" name="age" value="Female" ref={genderRef} />
                    <label className='mx-1' htmlFor="gender">মহিলা</label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 p-1 my-1  ">
                <div className='p-1'>
                  <label htmlFor="profession" className='font-semibold'>পেশা</label>
                  <input type="text" placeholder="পদবী" ref={professionRef} className="w-full p-1 my-1 border-b-2" />
                </div>
                <div className='border-l p-1'>
                  <label htmlFor="company" className='font-semibold'>কর্মস্থল</label>
                  <input type="text" placeholder="প্রতিষ্ঠান" ref={workplaceRef} className="w-full p-1 my-1 border-b-2" />
                </div>
              </div>

              <div className="grid grid-cols-2 p-1 my-1  ">
                <label htmlFor="height">উচ্চতা</label>
                <br />
                <div className="grid grid-cols-2 p-1">

                  <div className="grid grid-cols-2 border-b-2 ">
                    <select name="height" id="cars" ref={footRef} className="w-full">
                      <option value="1">১</option>
                      <option value="2">২</option>
                      <option value="3">৩</option>
                      <option value="4">৪</option>
                      <option value="5">৫</option>
                      <option value="6">৬</option>
                      <option value="7">৭</option>
                      <option value="8">৮</option>
                    </select>
                    <div className="p-1">ফুট</div>
                  </div>
                  <div className="grid grid-cols-2 border-b-2">
                    <select name="height" id="cars" ref={inchRef} className="w-full">
                      <option value="0">0</option>
                      <option value="1">১</option>
                      <option value="2">২</option>
                      <option value="3">৩</option>
                      <option value="4">৪</option>
                      <option value="5">৫</option>
                      <option value="6">৬</option>
                      <option value="7">৭</option>
                      <option value="8">৮</option>
                      <option value="9">৯</option>
                      <option value="10">১০</option>
                      <option value="11">১১</option>
                    </select>
                    <div className="p-1">ইঞ্চি</div>
                  </div>
                </div>

                <div className='border-l p-1 '>
                  <label htmlFor="profession">ওজন</label><br />
                  <input type="number" className='border-b-2 w-full p-1 my-1' />

                </div>
              </div>

              <div className='grid grid-cols-2 p-1 '>
                <div className='p-1'>
                  <label htmlFor="religion">ধর্ম</label><br />
                  <select ref={religionRef} className="w-full">
                    <option value="ইসলাম">ইসলাম</option>
                    <option value="সনাতন">সনাতন</option>
                    <option value="খ্রিষ্টান">খ্রিষ্টান</option>
                    <option value="বৌদ্ধ">বৌদ্ধ</option>
                    <option value="অনান্য">অনান্য</option>
                  </select>
                </div>
                <div className='border-l p-1'>
                  <label htmlFor="marital_status">বৈবাহিক অবস্থা</label><br />
                  <select ref={maritalRef} className="w-full">
                    <option value="অবিবাহিত">অবিবাহিত</option>
                    <option value="বিবাহিত">বিবাহিত</option>
                    <option value="খ্রিষ্টান">তালাকপ্রাপ্ত</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 p-1 my-1  ">
                <div className='p-1'>
                  <label htmlFor="profession" className='font-semibold'>অস্থায়ী ঠিকানা</label>
                  <input type="text" placeholder="জেলা" ref={professionRef} className="w-full p-1 my-1 border-b-2" />
                </div>
                <div className='border-l p-1'>
                  <label htmlFor="company" className='font-semibold'>বিভাগ</label>
                  <input type="text" placeholder="বিভাগ" ref={workplaceRef} className="w-full p-1 my-1 border-b-2" />
                </div>
              </div>

              <div className="grid grid-cols-2 p-1 my-1  ">
                <div className='p-1'>
                  <label htmlFor="profession" className='font-semibold'>স্থায়ী ঠিকানা</label>
                  <input type="text" placeholder="জেলা" ref={professionRef} className="w-full p-1 my-1 border-b-2" />
                </div>
                <div className='border-l p-1'>
                  <label htmlFor="company" className='font-semibold'>বিভাগ</label>
                  <input type="text" placeholder="বিভাগ" ref={workplaceRef} className="w-full p-1 my-1 border-b-2" />
                </div>
              </div>
            </div>

            <div className="text-center p-1 m-3">
              <button type="submit" className="bg-red-600 text-white shadow p-3 rounded-md">সম্পন্ন করুন</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;