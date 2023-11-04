import React, { useState } from "react";
import AppButton from "../Elements/App-Button";
import useFirebaseAuthentication from "../../Hooks/FirebaseAuthentication";

function ButtonContainer(props: any) {
  if (props.loggedIn) {
    return (
      <div className="button-container">
        <AppButton link="logout" title="Logout" />
      </div>
    );
  } else {
    return (
      <div className="button-container">
        <AppButton link="login" title="Login" />
        <AppButton link="register" title="Register" />
      </div>
    );
  }
}

export default ButtonContainer;
