import React, { useState, useEffect } from 'react';
import Profile from '../../../assets/img/profile.png';
import Camera from '../../../assets/img/camera.png';
// import http from '../../../utils/service';
import useAuth from '../../../hooks/useAuth';
import states from '../../../statics/states';
import {
  useGetProfileEditQuery,
  useAddProfileMutation,
  useUpdateProfileMutation
} from '../../../features/developer/profileSlice';


const countries = require('../../../statics/countries.json');
const Information = () => {
  const { user: {email, username} } = useAuth();
  const [profile, setProfile] = useState([]);
  const [github, setGithub] = useState([]);
  const [uname, setUsername] = useState(username);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [bio, setBio] = useState('');
  const [dob, setDob] = useState('');
  const [image, setImage] = useState('');
  const [country_id, setCountry_id] = useState('');
  const [state_id, setState_id] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [msg, setMsg] = useState('')

  const {
    data,
    isSuccess
  } = useGetProfileEditQuery();
  // console.log(data)

  const [addProfile, {
    isSuccess: addProfileIsSuccess
  }] = useAddProfileMutation();

  const [updateProfile, {
    isSuccess: updateProfileIsSuccess
  }] = useUpdateProfileMutation();

  useEffect(() => {
    (async () => {
      setProfile(data?.data);
      setBio(data?.data.bio);
      setGithub(data?.data.github);
      setName(data?.data.name);
      setUsername(data?.data.username);
      setPhone(data?.data.phone);
      setName(data?.data.name);
      setSex(data?.data.sex);
      setBio(data?.data.bio);
      setImage(data?.data.image);
      setDob(data?.data.dob);
      setCountry_id(data?.data.country_id);
      setState_id(data?.data.state_id);
    })();
  }, [isSuccess]);
  // setFiltered(states.filter(t => t.country_id === 160));
  // console.log(filtered);
  states.map(country => {
    // if (country.country_id === 160) {
    //   console.log(country.country_id);
    // } else {
    //   console.log('nothing found');
    // }
  });

  const processSubmit = async (e) => {
    e.preventDefault();
    try {

      if(profile) {
        const data = await updateProfile({
          phone,
          name,
          sex,
          bio,
          github,
          dob,
          image,
          country_id,
          state_id
        }).unwrap();
      } else {
        const data = await addProfile({
          phone,
          name,
          sex,
          bio,
          github,
          dob,
          image,
          country_id,
          state_id
        }).unwrap();
      }
      console.log(data, "Posting thru RTK");
      setMsg(data.message);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(name)

  return (
    <div>
      <h6> Basic Information</h6>
      {
        msg && 
        <div className='p-2 bg-green-600'>
            <p className='text-white'>{msg}</p>
        </div>
      }
      <form onSubmit={processSubmit}>
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
                      onChange={e => setName(e.target.value)}
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
                    onChange={e => setUsername(e.target.value)}
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
                  <input className="w-full form-input" type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between my-3">
              <div className="w-1/2 ">
                <p>Sex</p>
                <select className="w-full form-select" onChange={e => setSex(e.target.value)}>
                  <option value={1} {...(sex === 1 ? 'selected=selected' : '')}>
                    Male
                  </option>
                  <option value={2} {...(sex === 2 ? 'selected=selected' : '')}>
                    Female
                  </option>
                </select>
              </div>
              <div className="w-1/2 ml-5">
                <p>Date of Birth</p>
                <label htmlFor="">
                  <input name="dob" className="w-full form-input" type="date" value={dob} onChange={e => setDob(e.target.value)} />
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
                  onChange={e => setCountry_id(e.target.value)}
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
                  onChange={e => setState_id(e.target.value)}
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
            <div className="mt-5">
              <div className="flex items-center justify-between my-3">
                <div className="w-full ">
                  <p>Github</p>
                  <label htmlFor="" class="mt-1 relative rounded-md shadow-sm">
                    <div class="border rounded-md focus  left-0 flex items-center ">
                      <span class="border text-gray-500 bg-gray-300 p-2 sm:text-sm sm:leading-5 h-full">
                        www.github.com/
                      </span>
                      <input
                        className="w-full form-input"
                        type="text"
                        value={github}
                        onChange={e => setGithub(e.target.value)}
                      />
                    </div>
                  </label>
                 
                </div>
              </div>
            </div>
            <div className="my-3">
              <p>About you </p>
              <label class="block">
                <textarea value={bio} class="form-textarea mt-1 block w-full" rows="3" onChange={e => setBio(e.target.value)}>

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
            // onClick={processSubmit}
            type="submit"
            className="flex items-center justify-center w-40 py-2 text-sm bg-red-600 btn hover:bg-red-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Information;
