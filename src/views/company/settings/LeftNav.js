import React from 'react';
import {
    Link
} from 'react-router-dom';

function LeftNav(props) {
    let currentLocation = window.location.pathname;
    return (  
        <div>
            <div >
                <Link to="../settings">
                    <p className={(currentLocation === 'settings') ? 'p-5 font-getdevB  bg-red-100 border-r-4 border-red-600 rounded-r-md' : 'p-5 '}>
                        Profile
                    </p>
                </Link>
            </div>
            <div >
                <Link to="../settings/page">
                    <p className={(currentLocation === 'settings/page') ? 'p-5 font-getdevB  bg-red-100 border-r-4 border-red-600 rounded-r-md' : 'p-5 '}>
                        Page Settings
                    </p>
                </Link>
            </div>
            <div >
                <Link to="../settings/password">
                    <p className={(currentLocation === 'settings/password') ? 'p-5 font-getdevB  bg-red-100 border-r-4 border-red-600 rounded-r-md' : 'p-5 '}>
                        Change Password
                    </p>

                </Link>
            </div>

        </div>
    );
}

export default LeftNav;
