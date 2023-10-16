"use client";
import React, { useState } from "react";
import Ltstyle from "@/app/login.module.css";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addUser = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
    let data = await response.json();
    if (data.success) {
      alert("New user added");
    } else {
      alert("something went wrong");
    }
  };

  return (
    <div className={Ltstyle.loginpage}>
      <h1 className={Ltstyle.loginheader}>Welcome to our Hosting service</h1>

      <form className={Ltstyle.container}>
        <div className={Ltstyle.container2}>
          <input
            type="text"
            className={Ltstyle.formcontrol}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
          />
        </div>
        <div className={Ltstyle.container2}>
          <input
            type="text"
            className={Ltstyle.formcontrol}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className={Ltstyle.container2}>
          <input
            type="text"
            className={Ltstyle.formcontrol}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="button" onClick={addUser} className={Ltstyle.loginbtn}>
          Login
        </button>
      </form>
    </div>
  );
}
