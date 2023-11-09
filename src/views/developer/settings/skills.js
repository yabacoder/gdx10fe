import React, { useState, useEffect } from 'react';
import http from '../../../utils/service';
import states from '../../../statics/states';
import Select from 'react-select';
import { Categories } from '../../../statics/categories';
import { TECHNOLOGIES } from '../../../statics/technologies';
// const countries = require('../../../statics/countries.json');
import {
  useGetDevSkillQuery,
  useUpdateSkillMutation,
  useGetProfileEditQuery,
  useGetDevAvailabilityQuery,
  useUpdateDevAvailabilityMutation,
  useAddProfileMutation
} from '../../../features/developer/profileSlice';

const Skills = () => {
  const [fulltime, setFulltime] = useState(false);
  const [parttime, setParttime] = useState(false);
  const [remote, setRemote] = useState(false);
  const [category_id, setCategory_id] = useState('');
  const [level_id, setLevel_id] = useState();
  const [technologies, setTechnologies] = useState(TECHNOLOGIES);
  const [stayOpen, setStayOpen] = useState(false);
  const [removeSelected, setRemoveSelected] = useState(true);
  const [tech, setTech] = useState({});
  const [msg, setMsg] = useState('');
  const [profile, setProfile] = useState([]);


  const {
    data: defaultData,
    isSuccess
  } = useGetProfileEditQuery();
  const {
    data: defaultTech,
    isSuccess: techIsSuccess
  } = useGetDevSkillQuery();
  const {
    data: devAvailability,
    isSuccess: devIsSuccess
  } = useGetDevAvailabilityQuery();

  const [updateSkill, {
    isError
  }] = useUpdateSkillMutation();

  const [updateDevAvailability, {
    isError: devIsError
  }] = useUpdateDevAvailabilityMutation();

  // console.log(defaultTech?.data, "Techs");

  const filterArray = (array1, array2) => {
    const filtered = array1.filter(el => {
      return array2.value === el;
    });
    return filtered;
  };

  const tt = defaultTech;
  // const filtered = filterArray(tt, TECHNOLOGIES);
  // console.log(filtered, "Preprocessed");
  const newTech = defaultTech;
  // const newTech = filtered.forEach(TECHNOLOGIES.filter(v => v.value === filtered ))

  // let obj = {};

  let i, fil, obj, j;
  for (i = 0; i <= tt?.length; i++) {
    j = tt[i];
    fil = TECHNOLOGIES.filter(v => v.value == j);
    console.log(j, "filled");
  }
  // obj = fil;
  // console.log(obj, "OBJ");

  useEffect(() => {
    setCategory_id(defaultData?.data.category_id);
    setLevel_id(defaultData?.data.level_id);
    setFulltime(devAvailability?.data.fulltime);
    setParttime(devAvailability?.data.parttime);
    setRemote(devAvailability?.data.remote);
    setTech(defaultTech?.data);
  }, [isSuccess,
    techIsSuccess,
    devIsSuccess]);


  const [addProfile, {
    isSuccess: addProfileIsSuccess
  }] = useAddProfileMutation();

  const processSubmit = async (e) => {
    // console.log(tech, "Technologies submitted");
    //Update profile
    // Update tech stack
    // Update availability
    e.preventDefault();
    // try {
    //   const data = await updateDevAvailability({
    //     category_id,
    //     level_id,
    //     fulltime,
    //     parttime,
    //     remote,
    //   }).unwrap();
    //   console.log(data, "Update skill and tech categories");
    // } catch (error) {
    //   console.log(error);
    // }
    // try {
    //   console.log(tech, "Tech for edit");
    //   const data = await updateSkill({
    //     value: technologies
    //   }).unwrap();
    //   console.log(data, "Update skill and tech categories");
    // } catch (error) {
    //   console.log(error);
    // }
    // console.log(
    //   category_id,
    //   level_id,
    //   fulltime,
    //   parttime,
    //   remote,
    //   "Update going backend"
    // );
    console.log(technologies, "Incoming technologies");
    try {
      const data = await updateDevAvailability({
        category_id,
        level_id,
        fulltime,
        parttime,
        remote,
        value: technologies
      }).unwrap();
      console.log(data, "Update skill and  availability categories");
      setMsg(data);
    } catch (error) {
      console.log(error);
    }
  };

  const options = TECHNOLOGIES;
  return (
    <div>
      <h6> Skills and Availability</h6>
      {
        msg &&
        <div className='p-2 bg-green-600'>
          <p className='text-white'>{msg}</p>
        </div>
      }
      <div className="flex">
        <div className="w-5/6">
          <div className="mt-5">
            <div className="flex items-center justify-between my-3">
              <div className="w-1/2 ">
                <p>Skills Category</p>

                <select
                  // onChange={this.onChange}
                  name="category_id"
                  className="w-full form-select"
                // className={state.errors.category_id ? 'w3-border-red' : ''}
                >
                  <option value="">Select</option>
                  {Categories.map(data => (
                    <option value={data.id} selected={category_id == data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-1/2 ml-5">
                <p>Skills Level</p>

                <select
                  // onChange={this.onChange}
                  name="level_id"
                  // className={ 
                  //   'w3-select w3-border w3-white w3-round-large' +
                  //   ' ' +
                  //   (this.state.errors.level_id ? 'w3-border-red' : '')
                  // }
                  className="w-full form-select"
                >
                  <option value="">Select</option>
                  <option
                    selected={level_id === '1' || level_id === 1}
                    value="1"
                  >
                    Intern
                  </option>
                  <option
                    selected={level_id === '2' || level_id === 2}
                    value="2"
                  >
                    Junior
                  </option>
                  <option
                    selected={level_id === '3' || level_id === 3}
                    value="3"
                  >
                    Intermediate
                  </option>
                  <option
                    selected={level_id === '4' || level_id === 4}
                    value="4"
                  >
                    Advance
                  </option>
                  <option
                    selected={level_id === '5' || level_id === 5}
                    value="5"
                  >
                    Senior
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="my-3">
            <p>Professional Skills</p>

            <label className="block w-full p-2 md:p-1">
              {/* {console.log(newTech)} */}
              <Select
                className="block w-full mt-1 "
                closeOnSelect={!stayOpen}
                // defaultValue={newTech}
                required
                isMulti
                onChange={e => setTechnologies(e.target)}
                options={options}
                placeholder="Select"
                removeSelected={removeSelected}
                value={newTech}
                classNamePrefix="select"
              />
            </label>
          </div>

          <div className="my-3">
            <p>Availability</p>
            <div className="flex items-center justify-evenly ">
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="form-checkbox"
                    checked={fulltime}
                    onChange={() => setFulltime(!fulltime)}
                  />
                  <span class="ml-2">Full time</span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="form-checkbox"
                    checked={parttime}
                    onChange={() => setParttime(!parttime)}
                  />
                  <span class="ml-2">Part time</span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="form-checkbox"
                    checked={remote}
                    // value={}
                    onChange={() => setRemote(!remote)}
                  />
                  <span class="ml-2">Contract</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-5">
        <button
          onClick={processSubmit}
          type="submit"
          className="flex items-center justify-center w-40 py-2 text-sm bg-red-600 btn hover:bg-red-500"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Skills;
