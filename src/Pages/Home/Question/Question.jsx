import React from "react";



const Question = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl text-secondary font-bold my-5">
        Frequently Asked Question (FAQ)
      </h1>
      <p className="my-10">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce <br /> pain, and strengthen your body
        with ease!
      </p>
      <div className="collapse collapse-arrow bg-gray-200 border border-base-300 ">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-secondary font-semibold">
          How does this posture corrector work?
        </div>
        <div className="collapse-content text-sm">
          A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-gray-200 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-secondary font-semibold">
          Is it suitable for all ages and body types?
        </div>
        <div className="collapse-content text-sm">
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-gray-200 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-secondary font-semibold">
         Does it really help with back pain and posture improvement?
        </div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
       <div className="collapse collapse-arrow bg-gray-200 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-secondary font-semibold">
          Does it have smart features like vibration alerts?
        </div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
       <div className="collapse collapse-arrow bg-gray-200 border border-base-300 mb-10  ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-secondary font-semibold">
          How will I be notified when the product is back in stock?
        </div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>

       
      </div>
       <button className="btn btn-primary mt-5 text-black rounded-lg font-bold mb-10">See More FAQs   </button>  
    </div>
  );
};

export default Question;
