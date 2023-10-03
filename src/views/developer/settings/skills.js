import React, { useState, useEffect } from 'react';
import http from '../../../utils/service';
import states from '../../../statics/states';
import Select from 'react-select';
import { Categories } from '../../../statics/categories';
import { TECHNOLOGIES } from '../../../statics/technologies';
const countries = require('../../../statics/countries.json');

const Skills = () => {
  const [fulltime, setFulltime] = useState(0);
  const [parttime, setParttime] = useState(0);
  const [remote, setRemote] = useState(0);
  const [category_id, setCategory_id] = useState('');
  const [level_id, setLevel_id] = useState('');
  const [technologies, setTechnologies] = useState(TECHNOLOGIES);
  const [stayOpen, setStayOpen] = useState(false);
  const [removeSelected, setRemoveSelected] = useState(true);
  const [tech, setTech] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      if (localStorage.getItem('profile')) {
        const profile = JSON.parse(localStorage.getItem('profile'));
        // console.log(profile.category_id);
        setCategory_id(profile.category_id);
        setLevel_id(profile.level);
        setTech(profile.technologies);
        setFulltime(profile.availability.fulltime);
        setParttime(profile.availability.parttime);
        setRemote(profile.availability.remote);
      }
    };

    getProfile();
  }, []);
  const options = TECHNOLOGIES;
  return (
    <div>
      <h6> Skills and Availability</h6>
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
              {console.log(tech)}
              <Select
                className="block w-full mt-1 "
                closeOnSelect={!stayOpen}
                defaultValue={tech}
                required
                isMulti
                onChange={e => setTechnologies(e.target)}
                options={options}
                placeholder="Select"
                removeSelected={removeSelected}
                // value={tech}
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
