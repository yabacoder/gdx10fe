import React from 'react';
// import Nav from "./nav";

function Assess() {
  let question =
    '\n(function() {\n' +
    'var a = b = 5;\n' +
    '})();\n' +
    '\n' +
    'console.log(b);\n';
  return (
    <div>
      {/* //Show only on mobile */}
      <div className="visible p-5 py-8 md:hidden lg:hidden xl:hidden">
        <div className="h-full p-16 px-8 py-8 mb-5 bg-white rounded-lg md:bg-gray-300">
          <p>What will be the output of this function?</p>

          <pre>{question}</pre>
        </div>

        <div className="mt-5">
          <div className="p-2 px-2 py-2 mt-3 mb-2 bg-white rounded-lg hover:bg-red-600">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="radio"
                value="1"
              />
              <span className="ml-2 text-gdblue">Option 1</span>
            </label>
          </div>
          <div className="p-2 px-2 py-2 mb-2 bg-gray-300 rounded-lg hover:bg-red-600">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="radio"
                value="1"
              />
              <span className="ml-2 text-gdblue">Option 2</span>
            </label>
          </div>
          <div className="p-2 px-2 py-2 mb-2 bg-white rounded-lg hover:bg-red-600">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="radio"
                value="1"
              />
              <span className="ml-2 text-gdblue">Option 3</span>
            </label>
          </div>
          <div className="p-2 px-2 py-2 mb-2 bg-white rounded-lg hover:bg-red-600">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="radio"
                value="1"
              />
              <span className="ml-2 text-gdblue">Option 4</span>
            </label>
          </div>
          <div className="flex justify-center pt-5">
            <input
              type="submit"
              value="Submit"
              className="inline-block w-full p-3 text-center btn"
            />
          </div>
        </div>
      </div>

      {/* <div className="invisible px-0 py-0 lg:px-40 md:py-16 md:visible lg:visible xl:visible">  */}
      <div className="hidden px-0 py-0 lg:px-40 md:py-16 md:block lg:block xl:block">
        <div className="flex items-center justify-between md:bg-white ">
          <div
            className="p-32 -ml-1 bg-white md:w-1/2"
            style={{ backgroundImage: 'url("img/signup-bg-image.svg")' }}
          >
            <h1 className="text-gdblue">
              {' '}
              Let's Get your <span className="text-blue-500">Started</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum est ultricies integer quis. Iaculis urna id volutpat
              lacus laoreet. Mauris vitae ultricies leo integer malesuada.
            </p>
          </div>
          <div className="flex flex-col px-8 py-8 md:bg-white md:p-4 md:w-1/2">
            <div className="invisible md:visible lg:visible xl:visible">
              <div className="p-16 px-8 py-8 mb-5 bg-white rounded-lg md:bg-gray-300">
                <p>What will be the output of this function?</p>

                <pre>{question}</pre>
              </div>

              <div className="mt-5">
                <div className="p-2 px-2 py-2 mt-3 mb-2 bg-white rounded-lg hover:bg-red-600">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="radio"
                      value="1"
                    />
                    <span className="ml-2 text-gdblue">Option 1</span>
                  </label>
                </div>
                <div className="p-2 px-2 py-2 mb-2 bg-white rounded-lg hover:bg-red-600">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="radio"
                      value="1"
                    />
                    <span className="ml-2 text-gdblue">Option 2</span>
                  </label>
                </div>
                <div className="p-2 px-2 py-2 mb-2 bg-white rounded-lg hover:bg-red-600">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="radio"
                      value="1"
                    />
                    <span className="ml-2 text-gdblue">Option 3</span>
                  </label>
                </div>
                <div className="p-2 px-2 py-2 mb-2 bg-white rounded-lg hover:bg-red-600">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="radio"
                      value="1"
                    />
                    <span className="ml-2 text-gdblue">Option 4</span>
                  </label>
                </div>
                <div className="flex justify-center ">
                  <input
                    type="submit"
                    value="Submit"
                    className="inline-block w-full p-3 text-center btn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assess;

// import React from 'react';
// import {Button} from "../statics/form";
// import {PostData} from "../../services/AuthPost";
// import {Link, Redirect} from "react-router-dom";

// class Assess extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             question:"<p>\n" + "What will be the output of this function?\n" + "</p>\n" + " <div className=\"code\">\n" + "\n" + "<pre cite=\"http://\">\n" + "(function() {\n" + "var a = b = 5;\n" + "})();\n" + "\n" + "console.log(b);\n" + "</pre>",
//             loading:false,
//             redirect:false,
//             optA:"5",
//             optB:"0",
//             optC:"Null",
//             optD:"I don't know",
//             answer:"",
//         }
//     }
//     onChange =(e) =>{
//         this.setState({[e.target.name]:e.target.value});
//     };
//     submitHandler=(e)=>{
//         e.preventDefault();
//         if (this.state.answer){
//             this.setState({redirect:true})
//         } else (
//             alert("Choose an answer!")
//         )
//     };
//     render() {
//         const state= this.state;
//         if (state.redirect) {
//             return <Redirect to="/register"/>;
//         }
//         return (
//             <div>
//                 <div className="block gray">
//                     <div className="container border w3-white" style={{maxWidth:700}}>
//                         <Link to="/"><span className="w3-button w3-red w3-xlarge w3-display-topright">&times;</span></Link>
//                         <div className="row no-gape">
//                             <div className="col-lg-12 column">
//                                 <div className="page-inner resumeadd-form">
//                                     <form onSubmit={this.submitHandler}>
//                                         <div className="question w3-margin-bottom w3-border">
//                                             <div dangerouslySetInnerHTML={{__html: state.question}} />
//                                         </div>

//                                         <div className="form-group">
//                                             <h5>Options</h5>
//                                             <p onClick={()=>{document.getElementById("optA").click()}} className={"remember-label w3-border option"+" "+(state.answer==="optA"?"option_active":"")}>
//                                                 <input type="radio" onChange={this.onChange} checked={state.answer==="optA"} name="answer" id="optA" value="optA"/><label
//                                                 htmlFor="optA"> {state.optA}</label>
//                                             </p>
//                                             <p onClick={()=>{document.getElementById("optB").click()}} className={"remember-label w3-border option"+" "+(state.answer==="optB"?"option_active":"")}>
//                                                 <input type="radio" onChange={this.onChange} checked={state.answer==="optB"} name="answer" id="optB" value="optB"/><label
//                                                 htmlFor="optB"> {state.optB}</label>
//                                             </p>
//                                             <p onClick={()=>{document.getElementById("optC").click()}} className={"remember-label w3-border option"+" "+(state.answer==="optC"?"option_active":"")}>
//                                                 <input type="radio" onChange={this.onChange} checked={state.answer==="optC"} name="answer" id="optC" value="optC"/><label
//                                                 htmlFor="optC"> {state.optB}</label>
//                                             </p>
//                                             <p onClick={()=>{document.getElementById("optD").click()}} className={"remember-label w3-border option"+" "+(state.answer==="optD"?"option_active":"")}>
//                                                 <input type="radio" onChange={this.onChange} checked={state.answer==="optD"} name="answer" id="optD" value="optD"/><label
//                                                 htmlFor="optD"> {state.optB}</label>
//                                             </p>
//                                         </div>
//                                         <div className="justify-content-end">
//                                             <div>
//                                                 <Button title="Submit" loading={state.loading}/>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
