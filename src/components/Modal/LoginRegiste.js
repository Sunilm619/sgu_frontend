import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Store from "../../UseUserStore";
import "./loginregister.css";
import { base } from "../../constants/contants";

function LoginRegiste({ closed }) {
  const { setId } = Store();
  const [res, setRes] = useState("");
  const [loginstate, setLoginstate] = useState(true);
  const [registerstate, setRegisterstate] = useState(false);
  const [errors, setErrors] = useState({});
  const emailvalue = useRef("");
  const [errmsg, setErrmsg] = useState("");
  const passwordvalue = useRef("");
  const firstnamevalue = useRef("");
  const lastnamevalue = useRef("");

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateName = (name) => {
    return name.trim() !== "";
  };

  const handleValidation = () => {
    const validationErrors = {};
    if (!validateEmail(emailvalue.current.value)) {
      validationErrors.email = "Invalid email address";
    }
    if (!validatePassword(passwordvalue.current.value)) {
      validationErrors.password = "Password must be at least 6 characters long";
    }
    if (registerstate && !validateName(firstnamevalue.current.value)) {
      validationErrors.firstname = "First name is required";
    }
    if (registerstate && !validateName(lastnamevalue.current.value)) {
      validationErrors.lastname = "Last name is required";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const login = async () => {
    if (!handleValidation()) return;

    const url = base + "/auth/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailvalue.current.value,
        password: passwordvalue.current.value,
      }),
    });
    const data = await response.json();
    console.log(data);
    setErrmsg(data.msg);
    Cookies.set("generatedtoken", data.token, { expires: 7 });
    if (data.token) {
      const url = base + "/auth/cart";
      const fet = await fetch(url, {
        headers: {
          Authorization: `Bearer ${Cookies.get("generatedtoken")}`,
        },
      });
      const data = await fet.json();
      console.log(data);
      setId(data.user);
      closed();
    }
  };

  const register = async () => {
    if (!handleValidation()) return;

    const url = base + "/auth/signup";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailvalue.current.value,
        password: passwordvalue.current.value,
        firstname: firstnamevalue.current.value,
        lastname: lastnamevalue.current.value,
      }),
    });
    const data = await response.json();
    console.log(data);

    if (data.msg) {
      setRes(data.msg);
    }
  };

  return (
    <div className="fixed inset-1 bg-opacity-10 z-30 backdrop-blur-sm ">
      <div className="flex justify-center items-center">
        <div className="bg-white md:w-[50vw] ">
          <button onClick={closed} className="place-self-end">
            <X />
          </button>
          <div className="flex justify-around">
            <button
              onClick={() => {
                setRegisterstate(false);
                setLoginstate(true);
                setErrors({});
              }}
              className={loginstate ? "headingelelmnt" : ""}
            >
              Login
            </button>
            <button
              onClick={() => {
                setRegisterstate(true);
                setLoginstate(false);
                setErrors({});
              }}
              className={registerstate ? "headingelelmnt" : ""}
            >
              Register
            </button>
          </div>
          {loginstate && (
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col max-sm:w-[320px] p-5 md:p-10 gap-3">
                <label>Email Address:</label>
                <input
                  ref={emailvalue}
                  placeholder="Email"
                  className="form-control"
                  type="email"
                  name="email"
                  required
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
                <label>Password:</label>
                <input
                  ref={passwordvalue}
                  placeholder="Password"
                  className="form-control"
                  type="password"
                  name="password"
                  required
                />
                {errors.password && (
                  <span className="text-red-500">{errors.password}</span>
                )}
                <button
                  onClick={login}
                  className="bg-black p-2 text-zinc-100"
                  type="submit"
                >
                  Login
                </button>
                <p className="text-red">{errmsg}</p>
              </div>
            </form>
          )}
          {registerstate && (
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col md:p-10 gap-3 max-sm:w-[320px] p-5">
                <label>First Name:</label>
                <input
                  ref={firstnamevalue}
                  placeholder="First Name"
                  className="form-control"
                  type="text"
                  name="firstname"
                  required
                />
                {errors.firstname && (
                  <span className="text-red-500">{errors.firstname}</span>
                )}
                <label>Last Name:</label>
                <input
                  ref={lastnamevalue}
                  placeholder="Last Name"
                  className="form-control"
                  type="text"
                  name="lastname"
                  required
                />
                {errors.lastname && (
                  <span className="text-red-500">{errors.lastname}</span>
                )}
                <label>Email Address:</label>
                <input
                  ref={emailvalue}
                  placeholder="Email"
                  className="form-control"
                  type="email"
                  name="email"
                  required
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
                <label>Password:</label>
                <input
                  ref={passwordvalue}
                  placeholder="Password"
                  className="form-control"
                  type="password"
                  name="password"
                  required
                />
                {errors.password && (
                  <span className="text-red-500">{errors.password}</span>
                )}
                <button
                  onClick={register}
                  className="bg-black p-2"
                  type="submit"
                >
                  Register
                </button>
                <p>{res}</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginRegiste;
