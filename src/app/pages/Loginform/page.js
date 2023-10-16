"use client";
import React from "react";
import Ltstyle from "@/app/loginform.module.css";

const page = () => {
  return (
    <div>
      <div className={Ltstyle.loginpage}>
        <h1 className={Ltstyle.loginheader}>Create New Landing page</h1>
        <form action="/" className={Ltstyle.container} method="post">
          <div className={Ltstyle.container2}>
            <input
              className={Ltstyle.formcontrol}
              name="Title"
              placeholder="Title"
              required
            />
          </div>

          <div className={Ltstyle.container2}>
            <input
              className={Ltstyle.formcontrol}
              name="Description"
              placeholder="Description"
              required
            />
          </div>

          <div className={Ltstyle.container2}>
            <input
              className={Ltstyle.formcontrol}
              name="Header"
              placeholder="Header"
              required
            />
          </div>

          <div className={Ltstyle.container2}>
            <input
              className={Ltstyle.formcontrol}
              name="Footer"
              placeholder="Footer"
              required
            />
          </div>

          <div className={Ltstyle.container2}>
            <input
              className={Ltstyle.formcontrol}
              name="Text-Block"
              placeholder="Text-Block"
              required
            />
          </div>
          <div className={Ltstyle.container2}>
            <input
              className={Ltstyle.formcontrol}
              name="Image"
              placeholder="Image-Link"
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
