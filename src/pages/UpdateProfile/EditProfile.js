import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router';

import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';

const EditProfile = () => {
  const { user, setProfile } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const picRef = useRef();
  const birthRef = useRef();
  const professionRef = useRef();
  const genderRef = useRef();
  const footRef = useRef();
  const inchRef = useRef();
  const weightRef = useRef();
  const religionRef = useRef();
  const workplaceRef = useRef();
  const maritalRef = useRef();
  const present_address_districtRef = useRef();
  const present_address_divisionRef = useRef();
  const permanent_address_districtRef = useRef();
  const permanent_address_divisionRef = useRef();
  const skin_toneRef = useRef();
  const blood_groupRef = useRef();
  const yearly_incomeRef = useRef();
  const educational_qualificationRef = useRef();
  const bioRef = useRef();

  function handleUpdateProfile(e) {
    e.preventDefault(); // preventing reload on htmlForm submit

    const picture = picRef.current.files[0];
    const birth = birthRef.current.value;
    const profession = professionRef.current.value;
    const gender = genderRef.current.value;
    const height = footRef.current.value * 12 + parseInt(inchRef.current.value);
    const weight = weightRef.current.value;
    const religion = religionRef.current.value;
    const workplace = workplaceRef.current.value;
    const marital = maritalRef.current.value;
    const present_address_district = present_address_districtRef.current.value;
    const present_address_division = present_address_divisionRef.current.value;
    const permanent_address_district = permanent_address_districtRef.current.value;
    const permanent_address_division = permanent_address_divisionRef.current.value;
    const skin_tone = skin_toneRef.current.value;
    const blood_group = blood_groupRef.current.value;
    const yearly_income = yearly_incomeRef.current.value;
    const educational_qualification = educational_qualificationRef.current.value;
    const bio = bioRef.current.value;
    const id = user.id;

    const form = new FormData();
    form.append("image", picture);
    form.append("dateOfBirth", birth);
    form.append("sex", gender);
    form.append("height", height);
    form.append("weight", weight);
    form.append("religion", religion);
    form.append("profession", profession);
    form.append("workplace", workplace);
    form.append("marital_status", marital);
    form.append("present_address_district", present_address_district);
    form.append("present_address_division", present_address_division);
    form.append("permanent_address_district", permanent_address_district);
    form.append("permanent_address_division", permanent_address_division);
    form.append("skin_tone", skin_tone);
    form.append("blood_group", blood_group);
    form.append("yearly_income", yearly_income);
    form.append("educational_qualification", educational_qualification);
    form.append("bio", bio);
    form.append("user", id);


    fetch('https://eyafi.pythonanywhere.com/account/profile/', {
      method: 'POST',
      body: form,
    })
      .then(response => response.json())
      .then(data => {
        if (data.user) {
          console.log(data);
          setProfile(data);
          navigate("/profile");
        } else {
          setError("ভুল হয়েছে");
        }
      });
  }

  return (
    <div>
      <Header></Header>
      <div className="container mt-12 mx-auto">
        <div className=" m-3 p-3 mx-auto">

          <div>
            <h5 className="text-red-600 text-center text-5xl py-3 tarunya">তথ্য সম্পাদন</h5>
          </div>

          <form autoComplete="off" onSubmit={handleUpdateProfile}>
            <div className="lg:w-4/5 mx-auto ">

              <div className="text-center bg-red-900 my-3 rounded-md text-white p-3">
                {error}
              </div>

              {/* image */}
              <div className="p-3 border-l ">
                <label htmlFor="displayPicture" className="text-center font-semibold">ছবি</label>
                <input accept='image/*' type="file" ref={picRef} className="w-full p-3 my-3 border-b-2" />
              </div>

              {/* bio */}
              <div className='p-3 border-l'>
                <label htmlFor="bio" className='font-semibold'>আপনার কথা</label>
                <input type="text" placeholder="আপনার সম্পর্কে কিছু লিখুন..." ref={bioRef} className="w-full p-3 my-3 border-b-2" />
              </div>

              {/* dob */}
              <div className=" p-3 border-l">
                <label htmlFor="birth" className='font-semibold'>জন্ম</label>
                <input type="date" ref={birthRef} className="w-full p-3 my-3 border-b-2" max="2000-01-01" min="1900-01-01" />
              </div>

              <div className='border my-3 flex flex-col lg:flex-row w-full'>
                {/* gender */}
                <div className="p-3 w-60">
                  <label htmlFor="birth" className='mx-1 font-semibold'>লিঙ্গ</label>
                  <br />
                  <select ref={genderRef} className="w-full  p-3 my-3 border-b-2">
                    <option value="Male">পুরুষ</option>
                    <option value="Female">মহিলা</option>
                  </select>
                </div>

                <div className='p-3 w-60'>
                  <label htmlFor="religion" className='font-semibold'>ধর্ম</label><br />
                  <select ref={religionRef} className="w-full  p-3 my-3 border-b-2">
                    <option value="ইসলাম">ইসলাম</option>
                    <option value="সনাতন">সনাতন</option>
                    <option value="খ্রিষ্টান">খ্রিষ্টান</option>
                    <option value="বৌদ্ধ">বৌদ্ধ</option>
                    <option value="অনান্য">অনান্য</option>
                  </select>
                </div>

                <div className='p-3 w-60'>
                  <label htmlFor="marital_status" className='font-semibold'>বৈবাহিক অবস্থা</label><br />
                  <select ref={maritalRef} className="w-full  p-3 my-3 border-b-2">
                    <option value="অবিবাহিত">অবিবাহিত</option>
                    <option value="বিবাহিত">বিবাহিত</option>
                    <option value="তালাকপ্রাপ্ত">তালাকপ্রাপ্ত</option>
                  </select>
                </div>

                <div className='p-3 w-60'>
                  <label htmlFor="marital_status" className='font-semibold'>রক্তের গ্রুপ</label><br />
                  <select ref={blood_groupRef} className="w-full  p-3 my-3 border-b-2">
                    <option value="এ+">এ+</option>
                    <option value="এ-">এ-</option>
                    <option value="বি+">বি+</option>
                    <option value="বি-">বি-</option>
                    <option value="এবি+">এবি+</option>
                    <option value="এবি-">এবি-</option>
                    <option value="ও+">ও+</option>
                    <option value="ও-">ও-</option>
                  </select>
                </div>
              </div>

              {/* profession */}
              <div className="my-3 border flex flex-col lg:flex-row ">
                <div className='p-3 w-30'>
                  <label htmlFor="education" className='font-semibold'>শিক্ষাগত যোগ্যতা</label>
                  <select ref={educational_qualificationRef} className="w-full  p-3 my-3 border-b-2">
                    <option value="প্রাথমিক">প্রাথমিক</option>
                    <option value="নিম্ন-মাধ্যমিক">নিম্ন-মাধ্যমিক</option>
                    <option value="মাধ্যমিক">মাধ্যমিক</option>
                    <option value="উচ্চ-মাধ্যমিক">উচ্চ-মাধ্যমিক</option>
                    <option value="স্নাতক">স্নাতক</option>
                    <option value="স্নাতকোত্তর">স্নাতকোত্তর</option>
                  </select>
                </div>

                <div className='p-3 w-30'>
                  <label htmlFor="profession" className='font-semibold'>পেশা</label>
                  <input type="text" placeholder="পদবী" ref={professionRef} className="w-full p-3 my-3 border-b-2" />
                </div>

                <div className='p-3 w-30'>
                  <label htmlFor="company" className='font-semibold'>কর্মস্থল</label>
                  <input type="text" placeholder="প্রতিষ্ঠান" ref={workplaceRef} className="w-full p-3 my-3 border-b-2" />
                </div>

                <div className='p-3 w-30'>
                  <label htmlFor="income" className='font-semibold'>বার্ষিক আয়</label>
                  <input type="text" placeholder="(টাকা)" ref={yearly_incomeRef} className="w-full p-3 my-3 border-b-2" />
                </div>
              </div>

              <div className='border my-3 flex flex-col lg:flex-row w-full'>
                {/* weight */}
                <div className='p-3 my-3 '>
                  <label htmlFor="profession" className='font-semibold'>ওজন</label><br />
                  <input type="number" placeholder="(কেজি)" className='number border-b-2 w-full p-3 my-3' ref={weightRef} />
                </div>

                {/* height */}
                <div className="p-3 my-3  ">
                  <label htmlFor="height" className='w-30 font-semibold'>উচ্চতা</label>
                  <br />
                  <div className="grid grid-cols-2 p-3">
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
                      <div className="p-3">ফুট</div>
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
                      <div className="p-3">ইঞ্চি</div>
                    </div>
                  </div>
                </div>
                <div className='my-3 p-3'>
                  <label htmlFor="skin color" className='font-semibold'>গায়ের রঙ</label>
                  <select ref={skin_toneRef} className="border-b-2 w-full p-3 my-3">
                    <option value="ফর্সা">ফর্সা</option>
                    <option value="শ্যামলা">শ্যামলা</option>
                    <option value="বাদামী">বাদামী</option>
                  </select>
                </div>
              </div>

              {/* present address */}
              <div className='border my-3 flex flex-col lg:flex-row'>
                <div className='p-3 '>
                  <label htmlFor="address" className='font-semibold'>স্থায়ী ঠিকানা</label>
                  <input type="text" placeholder="জেলা" ref={permanent_address_districtRef} className="w-full p-3 my-3 border-b-2" />
                </div>
                <div className=' p-3 '>
                  <label htmlFor="address" className='font-semibold'>বিভাগ</label>
                  <input type="text" placeholder="বিভাগ" ref={permanent_address_divisionRef} className="w-full p-3 my-3 border-b-2" />
                </div>
              </div>

              {/* parmanent address */}
              <div className='border my-3 flex flex-col lg:flex-row'>
                <div className='p-3 w-30'>
                  <label htmlFor="address" className='font-semibold'>অস্থায়ী ঠিকানা</label>
                  <input type="text" placeholder="জেলা" ref={present_address_districtRef} className="w-full p-3 my-3 border-b-2" />
                </div>

                <div className='p-3 w-30'>
                  <label htmlFor="address" className='font-semibold'>বিভাগ</label>
                  <input type="text" placeholder="বিভাগ" ref={present_address_divisionRef} className="w-full p-3 my-3 border-b-2 w-30" />
                </div>
              </div>
            </div>

            <div className="text-center p-3 m-3">
              <button type="submit" className="bg-red-600 text-white shadow p-3 rounded-md">সম্পন্ন করুন</button>
            </div>
          </form>
        </div>
      </div >
    </div >
  );
};

export default EditProfile;