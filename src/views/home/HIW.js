import React from 'react';
import add from "../../assets/img/add.svg";
import assess from "../../assets/img/assess.svg";
import application from "../../assets/img/application.svg";
import interviews from "../../assets/img/interviews.svg";


export const HIW = () => {
  return (
    <div className="container px-8 py-6 mx-auto bg-white shadow-xl lg:px-32 lg:py-8">
      <div className="flex items-center justify-center lg:px-16 lg:py-16">
        <div>
          <h3 className="text-3xl text-center text-gdblue ">How it works</h3>
          <p className="text-base text-center ">
            GetDev simplify hiring process for developers, from setting up your profile and getting a job.{' '}
          </p>
        </div>
      </div>
      <div className="sm:justify-center sm:items-center sm:flex lg:flex lg:items-center lg:justify-around">
        <div className="flex flex-col items-center justify-between">
          <img
            className="h-32 p-5 md:h-full"
            src={add}
            alt="Create an Account"
          />
          <p className="font-bold text-center thick-color">Create Profile</p>
          <p className="text-sm">
            Setup profile with your expertise and frameworks.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <img
            className="h-32 p-5 md:h-full"
            src={assess}
            alt="Create an Account"
          />
          <p className="font-bold thick-color">Take Test</p>
          <p className="text-sm">
            Take our automated tests matching your skill-sets.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <img
            className="h-32 p-5 md:h-full"
            src={application} 
            alt="Create an Account"
          />
          <p className="font-bold text-center thick-color">Interview</p>
          <p className="text-sm">
            Get Shortlisted for an interview.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <img
            className="h-32 p-5 md:h-full"
            src={interviews}
            alt="Create an Account"
          />
          <p className="font-bold thick-color">Get Job</p>
          <p className="text-sm">
            Recieve contract your email!
          </p>
        </div>
      </div>
    </div>
  );
};

// import React from 'react';

// class HIW extends React.Component {
//     render() {
//         return (
//             <div>
//                 <section className="container-fluid">
//                     <div className="row how-it-works-container">
//                         <div className="col-lg-8 offset-lg-2 col-sm-8 col-md-10 offset-md-1 offset-sm-2">
//                             <div className="row">
//                                 <div className="text-center col-12">
//                                     <h4 className="process-title">How it works</h4>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="px-5 col-md-12">
//                                     <div className="main-timeline2" data-aos="zoom-in" data-aos-duration="900">
//                                         <div className="timeline">
//                                             <span className="icon">1</span>
//                                             <div className="timeline-content">
//                                                 <p className="description">
//                                                     Setup profile with expertise and frameworks.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className="timeline">
//                                             <span className="icon">2</span>
//                                             <div className="timeline-content">
//                                                 <p className="description">
//                                                     Take coding test and projects.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className="timeline">
//                                             <span className="icon">3</span>
//                                             <div className="timeline-content">
//                                                 <p className="description">
//                                                     Apply and get matched to jobs.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className="timeline">
//                                             <span className="icon ">4</span>
//                                             <div className="timeline-content">
//                                                 <p className="description">
//                                                     Interview on-site with hiring company.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//             </div>
//         );
//     }
// }
export default HIW;
