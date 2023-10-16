"use client";
import React from "react";
import Ltstyle from "@/app/loginform.module.css";

const page = () => {
  return (
    <div>
      <div className={Ltstyle.loginpage}>
        <h1 className={Ltstyle.loginheader}>Wellcome to our Hosting servise</h1>
        <form action="/" className={Ltstyle.container} method="post">
          <div className={Ltstyle.container2}>
            <input
              className={Ltstyle.formcontrol}
              name="Name"
              placeholder="Full Name"
              required
            />
          </div>

          <div className={Ltstyle.container2}>
            <input
              className={Ltstyle.formcontrol}
              name="Email"
              placeholder="Email"
              required
            />
          </div>

          <div className={Ltstyle.container2}>
            <input
              className={Ltstyle.formcontrol}
              name="Password"
              placeholder="Password"
              required
            />
          </div>

          <button className={Ltstyle.loginbtn}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default page;
