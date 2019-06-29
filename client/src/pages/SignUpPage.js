import React from "react";
import SignUpNav from "../Components/Nav/SignUpNav";
import Signup from "../Components/Signup/userReg";



function SignUpPage(props) {
  return (
      <div>
        <SignUpNav />
        <Signup />
    </div>

  );
}

export default SignUpPage;