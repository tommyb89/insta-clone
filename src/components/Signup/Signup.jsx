import React, { useState, useEffect, useRef } from "react";
import "./Signup.scss";
import insta from "../../assets/images/instagram.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [password, setPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [user, setUser] = useState(null);

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const signUp = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ).then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in...
        console.log(authUser);
        setUser(authUser);
      } else {
        // user has logged out...
        setUser(null);
      }
    });

    return () => {
      // perform clean up actions
      unsubscribe();
    };
  }, [user, username]);

  const login = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ).then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const logOut = async (e) => {
    e.preventDefault();
  };

  return (
    <article className="login">
      {/* logo */}
      <img src={insta} alt="logo" className="login__logo" />

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
      <form className="login__form">
        <div className="login__fields">
          <div className="login__username">
            <label htmlFor="" className="login__label">
              <input
                type="text"
                onChange={(e) => setUser(e.target.value)}
                className="login__input"
                placeholder="Username"
                ref={usernameRef}
              />
            </label>
          </div>
          <div className="login__email">
            <label htmlFor="" className="login__label">
              <input
                type="text"
                onChange={(e) => setRegisterEmail(e.target.value)}
                className="login__input"
                placeholder="Email"
                ref={emailRef}
              />
            </label>
          </div>
          <div className="login__password">
            <label htmlFor="" className="login__label">
              <input
                type="password"
                onChange={(e) => setRegisterPassword(e.target.value)}
                className="login__input"
                placeholder="Password"
                ref={passwordRef}
              />
            </label>
          </div>
          <div className="login__password">
            <label htmlFor="" className="login__label">
              <input
                type="password"
                onChange={(e) => setRegisterPassword(e.target.value)}
                className="login__input"
                placeholder="Password"
                ref={passwordConfirmRef}
              />
            </label>
          </div>
        </div>

        <div className="login__loginBtn">
          <button type="submit" className="login__btn" onClick={signUp}>
            Sign Up
          </button>
        </div>
      </form>
      <p className="login__signup">
        Don't have account?
        <a className="login__link" href="">
          <span className="login__signupText">Log in</span>
        </a>
      </p>
    </article>
  );
};

export default Login;
