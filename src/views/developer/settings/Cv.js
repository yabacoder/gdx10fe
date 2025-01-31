import React, { useState, useEffect } from 'react';
// import http from '../../../utils/service';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from "../../../features/auth/authSlice";
import { uploadImg } from '../../../utils/general';
import {
  useUploadCVMutation,
  useUploadDPMutation
} from '../../../features/developer/profileSlice';
import useAuth from '../../../hooks/useAuth';
import { http2 } from '../../../utils/service';


function UploadCv() {
 
  const { userId, token, developerId } = useAuth();

  const [openModal, setOpenModal] = useState(false);
  const [cv, setCv] = useState([]);
  const [fileName, setFileName] = useState('Select Your CV');
  const [file, setFile] = useState('');
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getCv();
  }, []);
  const [uploadCV, {
    data,
    isError,
    isLoading,
    isSuccess
  }] = useUploadCVMutation();

  const getCv = async () => {
    if (developerId) {
      try {
        const cv = await http2("/developer/profile/cv", "GET", token);
        // console.log(cv.data.cv, "This is a CV");
        setCv(cv.data.cv);
      } catch (error) {
        console.log(error);
      }
    }
  };
  // console.log(cv)


  // const processImgUpload = async (e, gymId) => {
  //   const formData = new FormData();
  //   // const img = e.target.files[0];
  //   formData.append("cv", file);
  //   // console.log(formData, "Our Form Data");

  //   await uploadImg(`/developer/profile/upload/cv`, formData, accessToken);
  // };

  //   const handleUpload = e => {
  //     return new Promise((resolve, reject) => {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file);
  //       reader.onload = () => {
  //         // this.setState({ cv: !this.state.cv });
  //         // console.log(reader.result);

  //        const result =  uploadCV({ cv: reader.result });
  //        console.log(result)
  //         if (isSuccess) {      
  //               setSuccess(true);
  //               setMessage(data.message);
  //             } else {
  //               setMessage(result.error);
  //             }
  //       };
  //       reader.onerror = error => reject(error);
  //     // };
  //   });
  // };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("cv", file);
    // console.log(userId);
    try {
      const resp = await uploadImg(`/developer/profile/uploadCv/${userId}`, formData, token.accessToken);
      console.log(resp, "Response");
      setMessage("CV Uploaded Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = e => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div>
      <h6>Upload Cv</h6>
      <div className="flex">
        <div className="w-8/12">
          <div className="">
            <div className="flex flex-col jobs">
              {cv &&
                // cv.map(vc => (
                //   <div className="flex items-center justify-between my-3 bg-transparent border border-gray-400 rounded-md ">
                //     <div className="flex items-center px-3 ">
                //       <span className="">
                //         <svg
                //           xmlns="http://www.w3.org/2000/svg"
                //           className="w-6"
                //           viewBox="0 0 20 20"
                //           fill="currentColor"
                //         >
                //           <path
                //             fill-rule="evenodd"
                //             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                //             clip-rule="evenodd"
                //           />
                //         </svg>
                //       </span>
                //     </div>
                //     <div className="items-center flex-1 px-3 py-4 text-left ">
                //       <h5 className="text-xs font-getdev">
                //         {' '}
                //         <a href="#">{vc.url}</a>{' '}
                //       </h5>
                //     </div>
                //     {!vc.isDefault ? (
                //       <div className="py-4">
                //         <ul className="inline-flex">
                //           <li className="flex items-center text-xs border-r-2 border-gray-500 cursor-pointer">
                //             <span className="px-3 py-1 mx-3 text-white bg-blue-500 rounded-sm">
                //               Make default
                //             </span>
                //           </li>
                //           <li className="px-3 ">
                //             <svg
                //               xmlns="http://www.w3.org/2000/svg"
                //               fill="none"
                //               className="w-5"
                //               viewBox="0 0 24 24"
                //               stroke="currentColor"
                //             >
                //               <path
                //                 stroke-linecap="round"
                //                 stroke-linejoin="round"
                //                 stroke-width="2"
                //                 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                //               />
                //             </svg>
                //           </li>
                //         </ul>
                //       </div>
                //     ) : (
                //       <div className="py-4">
                //         <ul className="inline-flex">
                //           <li className="flex items-center px-4 text-xs text-blue-500 border-r-2 border-gray-500">
                //             Default
                //           </li>
                //           <li className="px-3">
                //             <svg
                //               xmlns="http://www.w3.org/2000/svg"
                //               fill="none"
                //               className="w-5"
                //               viewBox="0 0 24 24"
                //               stroke="currentColor"
                //             >
                //               <path
                //                 stroke-linecap="round"
                //                 stroke-linejoin="round"
                //                 stroke-width="2"
                //                 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                //               />
                //             </svg>
                //           </li>
                //         </ul>
                //       </div>
                //     )}
                //   </div>
                // ))
                <div className="flex items-center justify-between my-3 bg-transparent border border-gray-400 rounded-md ">
                  <div className="flex items-center px-3 ">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="items-center flex-1 px-3 py-4 text-left ">
                    <h5 className="text-xs font-getdev">
                      {' '}
                      <a href={`${process.env.REACT_APP_UPLOADS_URL}/${cv}`}>View your CV</a>{' '}
                    </h5>
                  </div>
                  {!cv.isDefault ? (
                    <div className="py-4">
                      <ul className="inline-flex">
                        <li className="flex items-center text-xs border-r-2 border-gray-500 cursor-pointer">
                          <span className="px-3 py-1 mx-3 text-white bg-blue-500 rounded-sm">
                            Make default
                          </span>
                        </li>
                        <li className="px-3 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="w-5"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className="py-4">
                      <ul className="inline-flex">
                        <li className="flex items-center px-4 text-xs text-blue-500 border-r-2 border-gray-500">
                          Default
                        </li>
                        <li className="px-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="w-5"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              }

              <div className="my-3">
                <div
                  className="w-full py-3 text-sm text-center transition duration-150 ease-in-out bg-transparent border border-red-600 rounded-md cursor-pointer hover:bg-red-600 hover:text-white"
                  onClick={() => setOpenModal(true)}
                >
                  Upload Cv +
                </div>
              </div>
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
              <form action="">
                <div className="py-4 ">
                  <p className="p-2 mb-4 text-white bg-green-600">{message}</p>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadCv;
