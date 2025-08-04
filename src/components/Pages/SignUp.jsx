import Icon from "../Icons/Icon";
import "../Styles/SignUp.css";
import "../Styles/SignIn.css";
import Footer from "../UI/components/Footer";
function SignUp() {
  return (
    <>
      <div className="sinupbody">

        <div className="Signup">
        <div className="HeaderSignup">
          <div className="HeaderSignup-kol">
            <div className="Left-Header">
              <span>
                <Icon name="sidbarw" />
              </span>
              <p className="Left-Header-strU">PURITY UI DASHBOARD</p>
            </div>
            <div className="header-center">
              <ul className="header-center-ul">
                <li>
                  <span>
                    <Icon name="dashbordHw" />
                  </span>{" "}
                  <a href="/" className="decU">
                    DASHBOARD
                  </a>
                </li>
                <li>
                  <span>
                    <Icon name="profHw" />
                  </span>{" "}
                  <a href="/Profile" className="decU">
                    PROFILE
                  </a>
                </li>
                <li>
                  <span>
                    <Icon name="sinuHw" />
                  </span>{" "}
                  <a href="" className="decU">
                    SIGN UP
                  </a>
                </li>
                <li>
                  <span>
                    <Icon name="siniHw" />
                  </span>{" "}
                  <a href="/SignIn" className="decU">
                    SIGN IN
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-end">
              <button className="header-siup-end-btn">Free Download</button>
            </div>
          </div>
        </div>
          <div className="wel-center">
            <h1 >Welcome!</h1>
            <p className="wel-center-p">Use these awesome forms to login or create new <br/> account in your project for free.</p>
          </div>
          <div className="Signup-part1">
            <strong className="part1-str">Register with</strong>
            <div className="part1-logos">
              <div className="part1-logos-dicons">
                <Icon name="facebookk" />
              </div>
              <div className="part1-logos-dicons">
                <Icon name="apple" />
              </div>
              <div className="part1-logos-dicons">
                <Icon name="google" />
              </div>
            </div>
            <p className="part1-p-or">or</p>
          </div>
        </div>
        <div className="Signup-center-part2">
          <div className="Signup-part2">
            <form action="" className="Signup-part2-form">
              <div className="Signup-part2-form-dive">
                <p className="Signup-part2-form-dive-p">Name</p>
                <div className="Signup-part2-form-dive-dinp">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="Signup-part2-form-dive-dinp-inp"
                    placeholder="Your full name"
                  />
                </div>
              </div>
              <div className="Signup-part2-form-dive">
                <p className="Signup-part2-form-dive-p">Email</p>
                <div className="Signup-part2-form-dive-dinp">
                  <input
                    type="password"
                    name=""
                    id=""
                    className="Signup-part2-form-dive-dinp-inp"
                    placeholder="Your email address"
                  />
                </div>
              </div>

              <div className="Signup-part2-form-dive">
                <p className="Signup-part2-form-dive-p">Password</p>
                <div className="Signup-part2-form-dive-dinp">
                  <input
                    type="password"
                    name=""
                    id=""
                    className="Signup-part2-form-dive-dinp-inp"
                    placeholder="Your password"
                  />
                </div>
              </div>

              <button className="signupbtn">SIGN UP</button>

              <p className="dis dis-margin ">
                Don't have an account?
                <a href="/SignIn" className="titleInp-a">
                  Sign up
                </a>
              </p>
            </form>
          </div>
          
        </div>
        <div className="signup-Footer">
        <Footer/>
        </div>

      </div>
    </>
  );
}
export default SignUp;
