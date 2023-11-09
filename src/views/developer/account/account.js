import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Camera from '../../../assets/img/camera.png';
import Portfolio from './portfolio';
import About from './about';
import Education from './education';
import WorkExperience from './experience';
import Skills from './skills';
import Profile from '../../../assets/img/profile.png';
import BgImg from '../../../assets/img/dev-bg-img.png';
// import http from '../../../utils/service';
import { useGetProfileQuery } from '../../../features/developer/profileSlice';
import {
    useUploadCVMutation,
    useUploadDPMutation,
    useGetProfileDpQuery
} from '../../../features/developer/profileSlice';
import useAuth from '../../../hooks/useAuth';

const Account = () => {
    const { profile: {
        id,
        name,
        level,
        location,
        cv: asCV
    } } = useAuth();
    const [openTab, setOpenTab] = useState('about');
    const [projects, setProjects] = useState('');
    const [applications, setApplications] = useState('');
    const [articles, setArticles] = useState(0);
    const [questions, setQuestions] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [cv, setCv] = useState([1, 2, 3]);
    const [fileName, setFileName] = useState('Select Your CV');
    const [file, setFile] = useState('');
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [previewImage, setPreviewImage] = useState(undefined);
    const [imgSelected, setImgSelected] = useState(false);
    // const [path, setPath] = useState('');
    const [img, setImg] = useState(Profile);


    const {
        data
    } = useGetProfileQuery();
    const {
        data: dpData,
        isSuccess: dpFetchIsSuccess
    } = useGetProfileDpQuery(id);
    
    // console.log(data, "Api call");

    useEffect(() => {
        setImg(process.env.REACT_APP_UPLOADS_URL+dpData?.data);
    }, [dpFetchIsSuccess]);
    // console.log(img);



    const [uploadCV, {
        data: uploadData,
        isError,
        isLoading,
        isSuccess
    }] = useUploadCVMutation();

    const [uploadDP, {
        data: uploadDpData,
        isError: dpError,
        isLoading: dpIsLoading,
        isSuccess: dpIsSuccess
    }] = useUploadDPMutation();



    useEffect(() => {
        const getProfile = async () => {
            let profile;
            // if (!localStorage.getItem('profile')) {
            //   profile = await http('/developer/profile/edit', 'get');
            //   profile = profile.data;
            //   localStorage.setItem('profile', JSON.stringify(profile));
            // }
            // //profile = profile.data;
            // profile = JSON.parse(localStorage.getItem('profile'));
            // setProjects(profile.projects);
            // setApplications(profile.applications);
            // setArticles(profile.articles);
            // setQuestions(profile.questions);
        };

        const getProjects = async () => {
            // const pro = await http('/developer/project/total', 'GET');
            // const projects = pro.data;

            return setProjects(projects);
        };
        const getApplicaitons = async () => {
            // const total = await http('/developer/applications/total', 'GET');
            // const total_application = total.data;
            // //   console.log('Total', total_application);
            // return setApplications(total_application);
        };

        const getArticles = async () => {
            // const total = await http('/developer/articles/dev_total', 'GET');
            // const total_articles = total.data;
            // //   console.log('Total', total_application);
            // return setArticles(total_articles);
        };

        const getTotalQuestions = async () => {
            // const total = await http('/developer/assessment/total_taken', 'GET');
            // const total_questions = total.data;
            // //   console.log('Total', total_application);
            // return setQuestions(total_questions);
        };

        getProfile();

        // getArticles();
        getTotalQuestions();
        // getApplicaitons();
        // getProjects();
    }, []);

    const handleUpload = e => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                // this.setState({ cv: !this.state.cv });
                // console.log(reader.result);

                const result = uploadCV({ cv: reader.result });
                // console.log(result);
                if (isSuccess) {
                    setSuccess(true);
                    setMessage(uploadData.message);
                } else {
                    setMessage(result.error);
                }
            };
            reader.onerror = error => reject(error);
            // };
        });
    };
    const handleDpUpload = e => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onload = () => {
                // this.setState({ cv: !this.state.cv });
                // console.log(reader.result);

                const result = uploadDP({ image: reader.result });
                // console.log(result);
                if (isSuccess) {
                    setSuccess(true);
                    setMessage(uploadDpData.message);
                    setImgSelected(false);
                } else {
                    setMessage(result.error);
                }
            };
            reader.onerror = error => reject(error);
            // };
        });
    };

    const onChange = e => {
        if (e.target.files.length > 0) {
            setFile(e.target.files[0]);
            setFileName(e.target.files[0].name);
        }
    };



    const browseImg = async (e) => {
        try {
            const formData = new FormData();
            const img = e.target.files[0];
            const logo = formData.append("dp", img);
            const localPath = URL.createObjectURL(img);
            setPreviewImage(localPath);
            setImgSelected(true);
            setImg(img);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <div className="inset-0 -m-20 -p-12">
                <img alt="profile-img" src={BgImg} />
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col w-2/5 h-screen p-5 -mt-32 text-gray-500 bg-white rounded-md shadow-md ">
                    <div className="text-center ">
                        {/* <img alt="profile" /> */}
                        {
                            message &&
                            <p className="p-2 mb-4 text-white bg-green-600">{message}</p>
                        }
                        <div className="relative w-24 h-24 mx-auto mb-3 bg-gray-400 border-gray-100 rounded-full ">
                            <img
                                alt=""
                                src={imgSelected ? previewImage : img}
                                className="object-cover w-full h-24 border-2 border-gray-100 rounded-full "
                            />
                            <img src={Camera} alt="" className="-mt-10 -mr-28 hover:cursor-pointer" />
                            <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0" onChange={browseImg} />
                            {imgSelected &&
                                <span onClick={handleDpUpload} className='absolute px-2 -mt-2 text-sm text-white bg-red-500 rounded-full -right-3 hover:cursor-pointer'>Save</span>
                            }
                        </div>

                        <h5 className='mt-4'>{name}</h5>
                        <p>{level}</p>
                        <hr className="my-3" />
                        <p>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="inline-flex w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                            {location}
                        </p>
                    </div>
                    <div className="flex items-center justify-center my-6 text-sm">
                        <span className="mx-1">
                            <Link
                                to="/developer/profile/edit"
                                className="px-5 py-2 my-2 text-xs text-blue-700 transition duration-150 ease-in-out bg-transparent border rounded-md hover:bg-blue-700 hover:text-white"
                            >
                                Edit Profile
                            </Link>
                        </span>
                        <span className="mx-1">
                            {
                                asCV === true ? (
                                    <Link
                                        // onClick={() => setOpenModal(true)}
                                        to={`${process.env.REACT_API_URL}/cv/download/${id}`}
                                        className="p-2 px-5 my-2 text-xs text-white transition duration-150 ease-in-out bg-blue-700 border rounded-md hover:border hover:bg-transparent hover:text-blue-700">
                                        Download Resume
                                    </Link>
                                ) : (
                                    <Link
                                        onClick={() => setOpenModal(true)}
                                        // to="/developer/profile/edit/?cv=true"
                                        className="p-2 px-5 my-2 text-xs text-white transition duration-150 ease-in-out bg-blue-700 border rounded-md hover:border hover:bg-transparent hover:text-blue-700">
                                        Add Resume
                                    </Link>

                                )
                            }
                        </span>
                    </div>
                    <div className="mt-6">
                        <div className="flex justify-between p-3 text-sm border-b">
                            <span>Projects</span>
                            <span className="text-blue-700">{projects}</span>
                        </div>
                        <div className="flex justify-between p-3 text-sm border-b">
                            <span>Questions Taken</span>
                            <span className="text-blue-700">{questions}</span>
                        </div>
                        <div className="flex justify-between p-3 text-sm border-b">
                            <span>Articles</span>
                            <span className="text-blue-700">{articles}</span>
                        </div>
                        <div className="flex justify-between p-3 text-sm border-b">
                            <span>Applied Jobs</span>
                            <span className="text-blue-700">{applications}</span>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        openModal
                            ? 'absolute flex justify-end transform scale-y-110 transition duration-500 ease-in-out bg-gray-800 bg-opacity-50 inset-0 h-screen'
                            : 'hidden'
                    }
                >
                    <div className="flex w-1/2 h-screen transition duration-500 ease-in-out bg-white main-container">
                        <div className="w-full p-10 project-submission">
                            <div className="flex justify-between py-5 border-b">
                                <h6>Upload Cv</h6>
                                <div className="">
                                    <div onClick={() => setOpenModal(false)}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="py-4 ">
                                {
                                    message &&
                                    <p className="p-2 mb-4 text-white bg-green-600">{message}</p>
                                }
                                <p>Upload</p>
                                <div class="flex flex-col py-2 w-full items-center justify-center bg-grey-lighter">
                                    <label class="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg  tracking-wide  border border-dashed cursor-pointer  ">
                                        <span class="mt-2 text-sm leading-normal">{fileName}</span>
                                        <input type="file" class="hidden" onChange={onChange} />
                                    </label>
                                </div>
                            </div>

                            <div className="flex w-full mt-5">
                                <button
                                    type="submit"
                                    className="w-full py-2 text-sm text-center bg-red-600 btn hover:bg-red-500"
                                    onClick={handleUpload}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-screen">
                    <div className="mt-20 ml-5">
                        <ul className="flex tabs">
                            <button
                                className="mr-1"
                                data-target="about"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab('about');
                                }}
                            >
                                <Link
                                    to="#"
                                    className={
                                        openTab === 'about'
                                            ? ' inline-block px-4 py-2 font-getdevB  -mb-px border-b-2 border-blue-600 text-sm  text-blue-700'
                                            : 'inline-block text-sm px-4 py-2 font-getdevB '
                                    }
                                >
                                    About
                                </Link>
                            </button>
                            <button
                                className="mr-1"
                                data-target="portfolio"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab('portfolio');
                                }}
                            >
                                <Link
                                    to="#"
                                    className={
                                        openTab === 'portfolio'
                                            ? ' inline-block px-4 py-2 font-getdevB  text-sm -mb-px border-b-2 border-blue-600  text-blue-700'
                                            : 'inline-block px-4 text-sm py-2 font-getdevB '
                                    }
                                >
                                    Porfolio
                                </Link>
                            </button>

                            <button
                                className="mr-1"
                                data-target="education"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab('education');
                                }}
                            >
                                <Link
                                    to="#"
                                    className={
                                        openTab === 'education'
                                            ? ' inline-block px-4 py-2 font-getdevB text-sm  -mb-px border-b-2 border-blue-600  text-blue-700'
                                            : 'text-sm inline-block px-4 py-2 font-getdevB '
                                    }
                                >
                                    Education
                                </Link>
                            </button>
                            <button
                                className="mr-1"
                                data-target="work"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab('work');
                                }}
                            >
                                <Link
                                    to="#"
                                    className={
                                        openTab === 'work'
                                            ? 'text-sm inline-block px-4 py-2 font-getdevB  -mb-px border-b-2 border-blue-600  text-blue-700'
                                            : 'text-sm inline-block px-4 py-2 font-getdevB '
                                    }
                                >
                                    Work Experience
                                </Link>
                            </button>
                            <button
                                className="mr-1"
                                data-target="skill"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab('skill');
                                }}
                            >
                                <Link
                                    to="#"
                                    className={
                                        openTab === 'skill'
                                            ? 'text-sm inline-block px-4 py-2 font-getdevB -mb-px border-b-2 border-blue-600  text-blue-700'
                                            : 'text-sm inline-block px-4 py-2 font-getdevB'
                                    }
                                >
                                    Skill Rating
                                </Link>
                            </button>
                        </ul>
                    </div>

                    <div className="px-3 py-5 mt-0 ml-5 rounded-md ">
                        <div id="panels">
                            <div
                                className={
                                    openTab === 'portfolio'
                                        ? ' portfolio tab-content active py-5 block'
                                        : 'hidden'
                                }
                            >
                                <Portfolio />
                            </div>
                            <div
                                className={
                                    openTab === 'about'
                                        ? ' about tab-content active py-5 block'
                                        : 'hidden'
                                }
                            >
                                <About />
                            </div>
                            <div
                                className={
                                    openTab === 'education'
                                        ? ' education tab-content active py-5 block'
                                        : 'hidden'
                                }
                            >
                                <Education />
                            </div>
                            <div
                                className={
                                    openTab === 'work'
                                        ? ' work tab-content active py-5 block'
                                        : 'hidden'
                                }
                            >
                                <WorkExperience />
                            </div>
                            <div
                                className={
                                    openTab === 'skill'
                                        ? ' skill tab-content active py-5 block'
                                        : 'hidden'
                                }
                            >
                                <Skills />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
