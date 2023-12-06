import React, { useState } from 'react';
import { useChangePasswordMutation } from '../../../features/auth/authApiSlice';

const ChangePassword = () => {
    const [old_password, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [message, setMessage] = useState('');
    const [hasError, setHasError] = useState(false);
    const [changePassword, {
        // isError,
        // isSuccess,
        // isLoading,
        // error
    }] = useChangePasswordMutation();

    const processSubmit = async () => {
        try {
            const data = await changePassword({
                oldPassword: old_password,
                password,
                cPassword: password_confirmation
            });
            setMessage(data?.data?.message);
            // console.log(data?.error.data.message);

            setOldPassword('');
            setPassword('');
            setPasswordConfirmation('');
            const error = data.error.data.message;
            if (error) {
                setHasError(true);
                setMessage(error);
                // console.log();
            }
        } catch (err) {
            console.log(err.message);
            // setMessage(error);
        }
    };

    return (
        <div>
            <h6>Change password</h6>
            <div>
                {
                    message && <p className={`p-2 text-white bg-${hasError ? 'red' : 'green'}-600`}>{message}</p>
                }
            </div>
            <div className="flex">
                <div className="w-4/6">
                    <div className="mt-5">
                        <div className="flex items-center justify-between my-3">

                            <div className="w-full ">
                                <p>Current password</p>
                                <label htmlFor="">
                                    <input
                                        value={old_password}
                                        onChange={e => setOldPassword(e.target.value)}
                                        className="w-full form-input" type="password" id="currentPassword" />
                                </label>

                            </div>

                        </div>

                    </div>
                    <div className="flex items-center justify-between my-3">
                        <div className="w-1/2 ">
                            <p>New password</p>
                            <label htmlFor="">
                                <input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className="w-full form-input" type="password" id="newPassword" />
                            </label>

                        </div>
                        <div className="w-1/2 ml-5">
                            <p>Re-Enter New password</p>
                            <label htmlFor="">
                                <input
                                    value={password_confirmation}
                                    onChange={e => setPasswordConfirmation(e.target.value)}
                                    className="w-full form-input" type="password" id="reNewPassword" />
                            </label>

                        </div>
                    </div>


                </div>

            </div>
            <div className="flex justify-start mt-5">
                <button
                    onClick={processSubmit}
                    type="submit" className="flex items-center justify-center w-40 py-2 text-sm bg-red-600 btn hover:bg-red-500">Save

                </button>
            </div>
        </div >
    );
};

export default ChangePassword;
