import React from 'react';
import Riby from "../../assets/img/Riby.png";
import Paystack from "../../assets/img/Paystack.png";
import Parkway from "../../assets/img/Parkway.png";
import ParallelScores from "../../assets/img/ParallelScores.png";
import SureGifts from "../../assets/img/SureGifts.png";
import MAX from "../../assets/img/MAX.png";
import Kobo360 from "../../assets/img/Kobo360.png";
import Cars45 from "../../assets/img/Cars45.png";

export const Partners = () => {
    return (
        <div className="container px-8 py-6 mx-auto mb-8 bg-white shadow-xl lg:px-32 lg:py-8">
            <h3 className="text-3xl text-center text-gdblue ">Our Partners</h3>
            <p className="text-base text-center ">
                Best of technologies companies relies on us for the best talents in the country.
            </p>
            <div className="flex items-center justify-center w-full px-4 my-4 mt-4 overflow-y-scroll partner md:space-x-4">
                <img src={Riby} alt="" className="px-3" />
                <img src={Paystack} alt="" className="px-3" />
                <img src={Parkway} alt="" className="px-3" />
                <img src={ParallelScores} alt="" className="px-3" />
                <img src={SureGifts} alt="" className="px-3" />
                <img src={MAX} alt="" className="px-3" />
                <img src={Kobo360} alt="" className="px-3" />
                {/* <img src="../../assets/img/farmcrowdy.png" alt="" className="px-3"/> */}
                <img src={Cars45} alt="" />
                {/* <img src="../../assets/img/Afritickets.png" alt="" className="px-3"/> */}
                {/* <img src="../../assets/img/2ilabs.png" alt="" className="px-3"/> */}
                {/* <img src="../../assets/img/gokada.png" alt="" className="px-3" /> */}
            </div>
        </div>
    );
};

export default Partners;