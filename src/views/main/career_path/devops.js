// import React, {Component} from "react";
// import {Link} from "react-router-dom";
// import Layout from "../statics/layout";

// class DevOps extends Component {

//     componentDidMount() {
//         window.scroll(0,0)
//     }
//     render() {
//         return (
//             <Layout>
//                 <section>
//                     <div className="block mission">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-lg-12 column">
//                                     <div className="bloglist-sec">
//                                         <div className="blogpost">
//                                             <div className="blog-posthumb"><a href="#" title=""><img src="/images/cp/devops.jpg" alt=""/></a></div>
//                                             <div className="">
//                                                 <h3><a href="#" title="">Career Path: Roadmap to become a DevOps Engineer</a></h3>
//                                                 <p>
//                                                     DevOps engineering involves integrating software development with information technology to enhance companies’ productivity and profitability. For companies to efficiently manage the development and announcement of new software, they need the likes of DevOps Engineer to facilitate the process. DevOps engineering is an emerging field that promises to create many opportunities.

//                                                     <br/><br/>

//                                                     <strong>Taking the First Step</strong><br/>
//                                                     A DevOps engineer oversees the lifecycle of a software development and has an understanding of the various automation tools used in deployment. You have to be well established in combining software development skills with information technology operations and also work closely with developers and system administrators to operate in this field. An individual occupying this position has a background in Information Technology. Venturing into this field means you will be bridging the gap between important two departments, IT and software engineering. You should also be able to prove a solid understanding of cloud computing as well as its deployment tools which will help gain entry as a Junior-level Developer. There are other skills that are expected of a young DevOps in the tech world to possess, which include:
//                                                     <ul>
//                                                         <li>Ability to envisage technological trends</li>
//                                                         <li>Writing readable code</li>
//                                                         <li>Being capable of working effectively as well as with others</li>
//                                                         <li>Adept knowledge of the technologies used in DevOps Engineering, entailing cloud computing technology, automation, container and orchestration tools, continuous integration and continuous delivery, configuration management and deployment.</li>
//                                                     </ul>
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className="blogpost">
//                                             <div className="w3-row w3-brown">
//                                                 <div className="w3-half">
//                                                     <div className="w3-margin"></div>
//                                                 </div>
//                                                 <div className="w3-rest">
//                                                     <div className="blog-posthumb2">
//                                                         <img src="/images/cp/devops2.jpg" style={{maxWidth:500}} alt=""/>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="">
//                                                 <p>
//                                                     <strong>Degrees, Certification and Experience</strong><br/>
//                                                     DevOps Engineers are expected to have a minimum of bachelor’s degree in computer science or related field. There are certifications in DevOps Engineering you can enroll for to further hone your skills; one of them is Amazon Web Services. A degree or/and professional certification(s) will definitely give you a competitive advantage in the job market. Gaining valuable experience can speedily increase your chances of securing a DevOps Engineering position. You will have to showcase your previous works to prove eligibility for the role.
//                                                     <br/>
//                                                     <strong>Starting as a Junior-Level DevOps Engineer</strong><br/>
//                                                     The knowledge of software development and information integration acquired over the years can launch you into an entry position where you will be responsible for the automation of enterprise processes and probably mentoring newer hires. DevOps engineer most times work alone, however you will be required to work closely with other developer teams for reliable and secured automation.
//                                                     <br/><br/>
//                                                     <strong>Finding Your Next Level</strong><br/>
//                                                     DevOps Engineering has immeasurable opportunity as it is still emerging. Taking every opportunity to sharpen your skills will advance your career in few years, from a junior- level to senior-level. If you are determined and persevere long enough, you can move up the ranks even faster. Being technologically fluent will prepare you for your long-term career goals in this field and will equally make you distinct amongst your colleagues.
//                                                     <br/><br/>
//                                                     <strong>Advance Your Career: How to Become a Senior DevOps Engineer</strong><br/>
//                                                     A Senior DevOps Engineer position comes with its perks – big fat salary- as well as higher responsibilities. To attain this role, you must have been exemplary in your previous duties showing inventive ways of automating software deployment, thereafter you will be tasked with managing a company’s entire DevOps Engineer teams, leading entry-level/junior-level engineers and IT colleagues to successfully develop and release product in a timely manner.
//                                                     <br/><br/>
//                                                     <strong>Know Your Onions</strong><br/>
//                                                     To stay on the right track in your career with continuous advancement, you need to be well-rounded in the practices and technologies being used in DevOps. You also have to keep up with latest trends on development tools. DevOps Engineers often collaborate with a diverse set of people in and out of the company’s walls. From quality control personnel, network engineers, software and application developers to project managers. Below are development tools a DevOps Engineer should be vast in:
//                                                     <ul>
//                                                         <li>Ansible – configuration management and deployment</li>
//                                                         <li>Selenium – used for automation testing</li>
//                                                         <li>Jenkins – used to automate servers, includes a plugins built for developing continuous integration and continuous delivery.</li>
//                                                         <li>Git and GitHub – to host and manage source code</li>
//                                                         <li>Docker – Software containerization tool</li>
//                                                     </ul>
//                                                     <br/><br/>
//                                                     <strong>DevOps Engineer Job Roles/Responsibilities</strong><br/>
//                                                     DevOps Engineers work with cross-function teams to enhance client/companies’ product performance. They bridge the gap between developers and IT/Network Engineers. A DevOps engineer also double as a product manager and backend developer. Some other roles a DevOps Engineer play includes:
//                                                     <ul>
//                                                         <li>Quality Assurance – This involves ensuring the quality of the eventual product meets its intended design.</li>
//                                                         <li>Security Engineer – Monitors the health of the product by providing a defensive measures against hackers.</li>
//                                                         <li>Release Manager – In charge of announcing new features and ensuring post-release product stability</li>
//                                                         <li>DevOps Evangelist – The principal officer responsible for implementing development operations.</li>
//                                                         <li>Automation Expert – Responsible for creating consonance and automation of tools.</li>
//                                                         <li>Software Developer/ Tester – Responsible for developing and testing series of algorithms.</li>
//                                                     </ul>
//                                                     <strong>Required Skills:</strong><br/>
//                                                     <ul>
//                                                         <li>Proficient in any of these programming languages – Perl, C++, PHP, Ruby, Java, Python, etc</li>
//                                                         <li>Ability to practically configure management tools like Puppet, Chef, Ansible etc.</li>
//                                                         <li>Adequate knowledge of one cloud platform – AWS, IBM, Azure.</li>
//                                                         <li>Strong leadership skills</li>
//                                                         <li>Problem-solver</li>
//                                                         <li>Excellent communication skills</li>
//                                                     </ul>
//                                                     <br/><br/>
//                                                     <strong></strong><br/>
//                                                     Where To Go From Here
//                                                     A DevOps Engineer who has accomplished the goal of becoming a senior level personnel in the field can carry on this role for years, providing technical expertise to clients/companies as well as mentoring junior colleagues. This senior-level position can transition an individual into more streamlined fields like project/product management or network security depending on their interest and capabilities.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="block no-padding">
//                                     <div className="container fluid">
//                                         <div className="row">
//                                             <div className="col-lg-12">
//                                                 <div className="simple-text">
//                                                     <h3>Get Your Career Started. Work with top Tech companies in Nigeria.</h3>

//                                                     <Link to="/register" className="btn btn-green">Get Started</Link>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </Layout>
//         )
//     }
// }

// export default DevOps;