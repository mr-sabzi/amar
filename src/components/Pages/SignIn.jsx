import { useState } from "react";
import "../Styles/SignIn.css";

import Icon from "./../Icons/Icon";
import Footer from "../UI/components/Footer";

function SignIn() {

  return (
    <>
    <div className="Signin">
      <div className="HeaderSignin">
        <div className="HeaderSignin-kol">
          <div className="Left-Header">
            <span>
              <Icon name="sidbar" />
            </span>
            <p className="Left-Header-str">PURITY UI DASHBOARD</p>
          </div>
          <div className="header-center">
            <ul className="header-center-ul">
              <li>
                <span>
                  <Icon name="dashbordH" />
                </span>{" "} <a href="/" className="dec" >DASHBOARD</a>
                
              </li>
              <li>
                <span>
                  <Icon name="profH" />
                </span>{" "} <a href="/Profile" className="dec" >PROFILE</a>
                
              </li>
              <li>
                <span>
                  <Icon name="sinuH" />
                </span>{" "} <a href="/SignUp" className="dec" >SIGN UP</a>
                
              </li>
              <li>
                <span>
                  <Icon name="siniH" />
                </span>{" "} <a href="" className="dec" >SIGN IN</a>
                
              </li>
            </ul>
          </div>
          <div className="header-end">
            <button className="header-end-btn">Free Download</button>
          </div>
        </div>
      </div>

      <div className="sinbody">
        <div className="sinbody-L">
          <div className="sinbody-L-signin">
            <div className="sinbody-L-signin-matn">
              <h1 className="signin-h1color">Welcome Back</h1>
              <p className="signin-p">
                Enter your email and password to sign in
              </p>
            </div>
            <form action="" className="sinbody-L-signin-Form">
              <div className="signin-dInp">
                <p className="titleInp">Email</p>

                <div className="signin-dInps">
                  <input
                    className="signin-dInps-inp"
                    type="text"
                    placeholder="Your email address"
                  />
                </div>
                <p className="titleInp ">Password</p>

                <div className="signin-dInps">
                  <input
                    className="signin-dInps-inp"
                    type="password"
                    name=""
                    id=""
                    placeholder="Your password"
                  />
                </div>
              </div>
                   <div className="toggle-sign">
                    <input type="checkbox"   className="toggle-swich"/><span className="toggle-span">Remember me</span>
                        </div>
              <button className="form-submit">SIGN IN</button>
              <div className="form-footer">
                <p className="dis">
                  Don't have an account?
                  <a href="/SignUp" className="titleInp-a">
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="sinbody-R">
          <img className="sinbody-R-img" src="/image/Image1111111.png" alt="" />
        </div>
      </div>
      <Footer/>
      </div>
    </>
  );
}
export default SignIn;
