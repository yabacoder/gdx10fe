import React from 'react'

const password = () => {
    return (
        <div>
        <h6>Change password</h6>
             <div className="flex">
                 <div className="w-4/6">
                 <div className="mt-5">
                 <div className="flex items-center justify-between my-3">
                    
                       <div className="w-full ">
                           <p>Current password</p>
                           <label htmlFor="">
                           <input className="w-full form-input" type="password" id="currentPassword" />
                       </label>
                     
                       </div>
                    
                   </div>
                       
                   </div>
     
                  
              

                   <div className="flex items-center justify-between my-3">
                   <div className="w-1/2 ">
                   <p>New password</p>
                           <label htmlFor="">
                           <input className="w-full form-input" type="password" id="newPassword" />
                       </label>
                     
                       </div>
                       <div className="w-1/2 ml-5">
                       <p>Re-Enter New password</p>
                           <label htmlFor="">
                           <input className="w-full form-input" type="password" id="reNewPassword" />
                       </label>
                     
                       </div>
                   </div>
               
                  
                 </div>
                
             </div>
             <div className="flex justify-start mt-5">
                   <button type="submit" className="flex items-center text-sm justify-center w-40 py-2 bg-red-600 btn hover:bg-red-500">Save
                  
                   </button>
               </div>
   </div>
    )
}

export default password
