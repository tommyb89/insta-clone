import React from "react";
import "./Login.scss";
import insta from "../../assets/images/instagram.svg";
import { FaFacebookSquare } from "react-icons/fa";

const Login = () => {
  return (
    <article className="login">
      {/* logo */}
      <img src={insta} alt="logo" className="login__logo" />

      <form className="login__form">
        {/* facebook btn */}
        <div className="login__fb">
          <button className="login__fbbtn">
            <span>
              <FaFacebookSquare className="login__fbicon" />
            </span>
            Continue Using Facebook
          </button>
        </div>

        {/* divider -- OR -- */}
        <div className="login__divider">
          <div className="login__line"></div>
          <div className="login__or">or</div>
          <div className="login__line"></div>
        </div>

        {/* login form */}
        <div className="login__fields">
          <div className="login__email">
            <label htmlFor="" className="login__label">
              <span className="login__span">Email address</span>
              <input type="text" className="login__input" />
            </label>
          </div>
          <div className="login__password">
            <label htmlFor="" className="login__label">
              <span className="login__span">Password</span>
              <input type="text" className="login__input" />
            </label>
          </div>
        </div>

        <div className="login__loginBtn">
          <button className="login__btn">Log In</button>
        </div>

        <p className="login__signup">
          Don't have account?
          <a className="login__link" href="">
            <span className="login__signupText">Sign up</span>
          </a>
        </p>
      </form>
    </article>
  );
};

export default Login;
