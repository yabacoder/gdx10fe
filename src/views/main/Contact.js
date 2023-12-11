import React from 'react';

const Contact = () => {
  return (
    <section className="px-6 py-32 mx-auto bg-white rounded-md shadow-lg md:p-16 md:mt-16 md:py-10 md:px-16 md:w-1/2">
      <div className="flex flex-col mb-4 text-center md:px-5 md:py-3 section-header">
        <h3>Keep in Touch</h3>
        <div>
          <label class="block">
            <input class="form-input mt-1 block w-full" placeholder="Name" />
          </label>
          <label class="block">
            <input class="form-input mt-1 block w-full" placeholder="Email" />
          </label>
          <label class="block">
            <input class="form-input mt-1 block w-full" placeholder="Subject" />
          </label>
          <label class="block">
            <textarea
              class="form-textarea mt-1 block w-full"
              rows="3"
              placeholder="Enter some long form content."
            ></textarea>
          </label>
          <div>
            <button className="w-full px-4 py-3 mt-5 text-center btn">
              {' '}
              Send
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="inline-flex w-6"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-around my-5 md:justify-between md:mt-10">
          <div className="flex items-center justify-between md:p-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <g
                  id="Group_1529"
                  data-name="Group 1529"
                  transform="translate(-36 -587)"
                >
                  <circle
                    id="Ellipse_936"
                    data-name="Ellipse 936"
                    cx="16"
                    cy="16"
                    r="16"
                    transform="translate(36 587)"
                    fill="rgba(72,86,133,0.15)"
                  />
                  <path
                    id="Icon_zocial-call"
                    data-name="Icon zocial-call"
                    d="M3.29,5.081a.8.8,0,0,1,.2-.435l1.63-1.63q.19-.163.285.054L6.726,5.543a.356.356,0,0,1-.068.421l-.6.6a.676.676,0,0,0-.19.421,2.073,2.073,0,0,0,.421,1.046A8.929,8.929,0,0,0,7.12,9.114l.421.434c.127.127.289.283.489.468a8.2,8.2,0,0,0,.984.733,2.2,2.2,0,0,0,1.08.455.591.591,0,0,0,.435-.177l.707-.706a.3.3,0,0,1,.407-.054l2.377,1.4a.2.2,0,0,1,.109.143.173.173,0,0,1-.054.156l-1.63,1.63a.8.8,0,0,1-.434.2,3.285,3.285,0,0,1-1.5-.183,6.791,6.791,0,0,1-1.548-.74q-.713-.461-1.324-.937t-.978-.815l-.353-.34q-.136-.136-.36-.373t-.782-.937A13.638,13.638,0,0,1,4.2,8.109a7.961,7.961,0,0,1-.706-1.514A3.221,3.221,0,0,1,3.29,5.081Z"
                    transform="translate(42.47 595.131)"
                    fill="#485685"
                  />
                </g>
              </svg>
            </div>

            <div className="md:pl-5">+234 706 073 0240 </div>
          </div>
          <div className="flex items-center justify-between md:p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <g
                id="Group_1530"
                data-name="Group 1530"
                transform="translate(-204 -587)"
              >
                <circle
                  id="Ellipse_937"
                  data-name="Ellipse 937"
                  cx="16"
                  cy="16"
                  r="16"
                  transform="translate(204 587)"
                  fill="rgba(72,86,133,0.15)"
                />
                <path
                  id="Icon_material-email"
                  data-name="Icon material-email"
                  d="M13.256,6H4.14A1.138,1.138,0,0,0,3.006,7.139L3,13.976a1.143,1.143,0,0,0,1.14,1.139h9.116a1.143,1.143,0,0,0,1.14-1.139V7.139A1.143,1.143,0,0,0,13.256,6Zm0,2.279L8.7,11.128,4.14,8.279V7.139L8.7,9.988l4.558-2.849Z"
                  transform="translate(211.906 592.672)"
                  fill="#485685"
                />
              </g>
            </svg>

            <span className="md:pl-5">hire@getdev.co</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 