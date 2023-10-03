import React from 'react';
import {Button} from "../statics/form";

const JobHeader=(props)=>{
    return(
        <section>
            <div className="block no-padding">
                <div className="container fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-featured-sec style2">
                                <ul className="main-slider-sec style2 text-arrows">
                                    <li className="slideHome"><img src="images/slider1.png" alt=""/></li>
                                </ul>
                                <div className="job-search-sec">
                                    <div className="job-search">
                                        <h4>Explore Thousand Of Jobs With Just Simple Search...</h4>
                                        <form onSubmit={props.onSubmit}>
                                            <div className="row">
                                                <div className="col-lg-5">
                                                    <select onChange={props.onChange} name="category_id" className="w3-select w3-margin-bottom w3-white w3-round-medium job-select">
                                                        <option value="0">Category</option>
                                                        <option value="1">UX/UI</option>
                                                        <option value="2">Frontend Developer</option>skill
                                                        <option value="3">Backend Developer</option>
                                                        <option value="4">Fullstack </option>
                                                        <option value="5">DevOps </option>
                                                        <option value="6">Quality Assurance </option>
                                                        <option value="7">Software Developer </option>
                                                        <option value="8">Mobile App (iOS) </option>
                                                        <option value="9">Mobile App (Android) </option>
                                                        <option value="10">Business Analyst </option>
                                                        <option value="11">Product Manager </option>
                                                        <option value="12">Project Manager </option>
                                                        <option value="13">Hybrid Mobile Dev </option>
                                                        <option value="14">Database Admin </option>
                                                        <option value="15">Information Security </option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pf-field">
                                                        <select onChange={props.onChange} name="level_id" className="w3-select w3-margin-bottom w3-white w3-round-medium job-select">
                                                            <option value="0">Level</option>
                                                            <option value="1">Intern</option>
                                                            <option value="2">Junior</option>
                                                            <option value="3">Intermediate </option>
                                                            <option value="4">Advance</option>
                                                            <option value="5">Senior </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="pf-field">
                                                        <select onChange={props.onChange} name="type" className="w3-select w3-white w3-margin-bottom  w3-round-medium job-select">
                                                            <option value="0">Type</option>
                                                            <option value="1">Full-time</option>
                                                            <option value="2">Part-Time</option>
                                                            <option value="3">Remote</option>
                                                            <option value="5">Contract</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-1">
                                                    <Button icon="la la-filter" loading={props.loading}/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
};
export default JobHeader;