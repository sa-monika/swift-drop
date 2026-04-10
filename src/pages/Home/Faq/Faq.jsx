import React from "react";

const Faq = () => {
  return (
    <div className="mx-auto max-w-11/12 text-center space-y-4 mb-20 mt-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-secondary my-5">
          Frequently Asked Question (FAQ)
        </h1>
        <p className="text-[18px] text-gray-500 my-5 max-w-200">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* q and a  */}
      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 ">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
      {/* button  */}
      <div>
        <button className="btn bg-primary hover:bg-secondary hover:text-white border-none">
          See More FAQ's
        </button>
      </div>
    </div>
  );
};

export default Faq;
