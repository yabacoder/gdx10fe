
import React, { useState, useEffect } from 'react';
import {
  useUploadCVMutation,
  useUploadDPMutation,
  useGetProfileDpQuery
} from '../features/developer/profileSlice';
import Profile from '../assets/img/profile.png';
import Camera from '../assets/img/camera.png';



const DPCard = ({ id }) => {
  const [message, setMessage] = useState('');
  const [previewImage, setPreviewImage] = useState(undefined);
  const [imgSelected, setImgSelected] = useState(false);
  const [success, setSuccess] = useState(false);
  const [img, setImg] = useState(Profile);

  const {
    data: dpData,
    isSuccess
  } = useGetProfileDpQuery(id);

  // console.log(data, "Api call");



  const [uploadDP, {
    data: uploadDpData,
    isError: dpError,
    isLoading: dpIsLoading,
    isSuccess: dpIsSuccess
  }] = useUploadDPMutation();

  useEffect(() => {
    setImg(process.env.REACT_APP_UPLOADS_URL + dpData?.data);
  }, [isSuccess]);

  const handleDpUpload = async () => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = () => {
        const result = uploadDP({ image: reader.result });
        console.log(result);
        if (isSuccess) {
          setSuccess(true);
          setMessage(result.message);
          // setImgSelected(false);
        } else {
          setMessage(result.error);
        }
      };
      reader.onerror = error => reject(error);
      // };
    });
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
    </div>
  );
};

export default DPCard;