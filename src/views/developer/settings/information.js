import React, { useState, useEffect } from 'react';
import Profile from '../../../assets/img/profile.png';
import Camera from '../../../assets/img/camera.png';
// import http from '../../../utils/service';
import states from '../../../statics/states'
const countries = require('../../../statics/countries.json');

const Information = () => {
  const [profile, setProfile] = useState([]);
  const [email, setEmail] = useState([]);
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [bio, setBio] = useState('');
  const [dob, setDob] = useState('');
  const [image, setImage] = useState('');
  const [country_id, setCountry_id] = useState('');
  const [state_id, setState_id] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
      //let profile = await http('/developer/profile/edit', 'get');

      //profile = profile.data;
      //localStorage.setItem('profile', JSON.stringify(profile));

      if (localStorage.getItem('profile')) {
        let profile = JSON.parse(localStorage.getItem('profile'));

        setEmail(profile.email);
        setUsername(profile.username);
        setPhone(profile.phone);
        setName(profile.name);
        setSex(profile.sex);
        setBio(profile.bio);
        setImage(profile.image);
        setDob(profile.dob);
        setCountry_id(profile.country_id);
        setState_id(profile.state_id);
      }
      // setProfile(profile.data);
      console.log(profile);
    };

    getProfile();
  }, []);
  // setFiltered(states.filter(t => t.country_id === 160));
  // console.log(filtered);
  states.map(country => {
    // if (country.country_id === 160) {
    //   console.log(country.country_id);
    // } else {
    //   console.log('nothing found');
    // }
  });

  return (
    <div>
      <h6> Basic Information</h6>
      <div className="flex">
        <div className="w-4/6">
          <div className="mt-5">
            <div className="flex items-center justify-between my-3">
              <div className="w-full ">
                <p>Fullname Name</p>

                <label htmlFor="">
                  <input
                    className="w-full form-input"
                    type="text"
                    value={name}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="my-3">
            <p> Username</p>
            {/* <label htmlFor="price" class="block text-sm leading-5 font-medium text-gray-700">Price</label> */}
            <label htmlFor="" class="mt-1 relative rounded-md shadow-sm">
              <div class="border rounded-md focus  left-0 flex items-center ">
                <span class="border text-gray-500 bg-gray-300 p-2 sm:text-sm sm:leading-5 h-full">
                  www.getdev.co/
                </span>

                <input
                  id="username"
                  type="text"
                  value={username}
                  class="form-input text-blue-800 appearance-none block w-full pl-7 pr-12 sm:text-sm sm:leading-5 rounded-l-none "
                />
              </div>
            </label>
          </div>

          <div className="flex items-center justify-between my-3">
            <div className="w-1/2 ">
              <p>Email</p>
              <label htmlFor="">
                <input
                  className="w-full form-input"
                  type="email"
                  value={email}
                  disabled
                />
              </label>
            </div>
            <div className="w-1/2 ml-5">
              <p>Phone</p>
              <label htmlFor="">
                <input className="w-full form-input" type="tel" value={phone} />
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between my-3">
            <div className="w-1/2 ">
              <p>Sex</p>
              <select className="w-full form-select">
                <option {...(sex === 'Male' ? 'selected=selected' : '')}>
                  Male
                </option>
                <option {...(sex === 'Female' ? 'selected=selected' : '')}>
                  Female
                </option>
              </select>
            </div>
            <div className="w-1/2 ml-5">
              <p>Date of Birth</p>
              <label htmlFor="">
                <input className="w-full form-input" type="date" value={dob} />
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between my-3">
            <div className="w-1/2 ">
              <p>Country</p>

              <select
                className="w-full form-select"
                required
                name="country_id"
                // onChange={this.onChange}
                // className={
                //   'w3-select w3-border w3-white w3-round-large' +
                //   ' ' +
                //   (this.state.errors.country_id ? 'w3-border-red' : '')
                // }
              >
                <option>Select Country</option>
                {countries.map(country => (
                  <option
                    selected={
                      country_id === country.id - 0 || country_id === country.id
                    }
                    value={country.id}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2 ml-5">
              <p>State</p>

              <select
                name="state_id"
                required
                className="w-full form-select"
                // onChange={this.onChange}
                // className={
                //   'w3-select w3-white w3-border w3-round-large' +
                //   ' ' +
                //   (this.state.errors.state_id ? 'w3-border-red' : '')
                // }
              >
                <option>Select State</option>
                {filtered.map(state => (
                  <option
                    selected={
                      state_id === state.id - 0 || state_id === state.id
                    }
                    value={state.id}
                  >
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="my-3">
            <p>About you </p>
            <label class="block">
              <textarea class="form-textarea mt-1 block w-full" rows="3">
                {bio}
              </textarea>
            </label>
          </div>
        </div>
        <div className="w-2/6 py-8 mx-10 h-1/2 ">
          <div className="p-10 leading-none text-center border-2 border-dashed ">
            <div className="border-b">
              <div className="w-24 h-24 mx-auto mb-3 bg-gray-400 border-gray-100 rounded-full">
                <img
                  alt=""
                  src={`${image}`}
                  className="object-cover w-full h-24 border-2 border-gray-100 rounded-full "
                />
              </div>
            </div>
            <div className="py-3">
              <img src={Camera} alt="" className="mx-auto " />
            </div>
            <p>click or drag photo to upload</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-5">
        <button
          type="submit"
          className="flex items-center justify-center w-40 py-2 text-sm bg-red-600 btn hover:bg-red-500"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Information;
