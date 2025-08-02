import Icon from "../Icons/Icon";
import "../Styles/Profile.css";

const Profileitems = [
  {
    icone: "true",
    p: "Email me when someone follows me",
  },

  {
    icone: "false",
    p: "Email me when someone answers on my post",
  },
  {
    icone: "true",
    p: "Email me when someone mentions me",
  },
  {
    icone: "false",
    p: "New launches and projects",
  },
  {
    icone: "false",
    p: "Monthly product updates",
  },
  {
    icone: "true",
    p: "Subscribe to newsletter",
  },
];

const ProfileitemsS1 = Profileitems.slice(0, 3);
const ProfileitemsS2 = Profileitems.slice(3, 6);

const converitems = [
  {
    img: "../../../public/image/Image11.png",
    titleL: "Esthera Jackson",
    p: "Hi! I need more informations...",
  },
  {
    img: "../../../public/image/Image (12).png",
    titleL: "Esthera Jackson",
    p: "Awesome work, can you change...",
  },
  {
    img: "../../../public/image/Image (13).png",
    titleL: "Esthera Jackson",
    p: "Have a great afternoon...",
  },
  {
    img: "../../../public/image/Image (14).png",
    titleL: "Esthera Jackson",
    p: "About files I can...",
  },
];

const ArrPojects = [
  {
    img: "../../../public/image/Image111.png",
    Pr: "#1",
    title: "Modern",
    p: "As Uber works through a huge amount of internalmanagement turmoil.",
  },
  {
    img: "../../../public/image/Image 112.png",
    Pr: "#2",
    title: "Scandinavian",
    p: "Music is something that every person has his or her own specific opinion about.",
  },
  {
    img: "../../../public/image/Image 113.png",
    Pr: "#3",
    title: "Minimalist",
    p: "Different people have different taste, and various types of music.",
  },
];
function Profile() {
  return (
    <>
      <div className="profile">
        <div className="header">
          <div className="header-L">
            <img src="../../../public/image/Image (7).png" alt="" />
            <div className="header-L-matn">
              <strong className="header-L-matn-str">Esthera Jackson</strong>
              <p className="header-L-matn-p">esthera@simmmple.com</p>
            </div>{" "}
            <div className="iconposi">
              <Icon name="editProfile" />
            </div>
          </div>
          <div className="header-R">
            <button className="header-R-btns btns-color1">
              <Icon name="overview" /> <span className="btn-p">OVERVIEW</span>
            </button>
            <button className="header-R-btns  btns-color">
              <Icon name="teams" /> <span className="btn-p">TEAMS</span>
            </button>
            <button className="header-R-btns btns-color">
              <Icon name="projects" /> <span className="btn-p">PROJECTS</span>
            </button>
          </div>
        </div>

        <div className="profile-Taslk1">
          <div className="profile-Taslk1-divs">
            <div className="profile-Task1-divs-center">
              <strong>Platform Settings</strong>

              <p className="profile-Taslk1-divs-titlep">ACCOUNT</p>

              <div className="profile-Task-divs-items">
                {ProfileitemsS1.map((item) => (
                  <>
                    <div className="profile-Task-divs-items-dvs">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                      <p className="profile-Task-divs-items-dvs-p">{item.p}</p>
                    </div>
                  </>
                ))}

                <p className="profile-Taslk1-divs-titlep">APPLICATION</p>
                {ProfileitemsS2.map((item) => (
                  <>
                    <div className="profile-Task-divs-items-dvs">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                      <p className="profile-Task-divs-items-dvs-p">{item.p}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="profile-Taslk1-divs">
            <div className="profile-Task1-divs-center">
              <strong>Profile Information</strong>

              <p className="profile-Task1-divs-center-p">
                Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                answer is no. If two equally difficult paths, choose the one
                more painful in the short term (pain avoidance is creating an
                illusion of equality).
              </p>
              <div className="profile-Task1-divs-center-i">
                <div className="profile-Task1-divs-center-items">
                  <strong className="profile-Task1-divs-center-items-str">
                    Full Name:{" "}
                  </strong>{" "}
                  <p className="profile-Task1-divs-center-items-p">
                    Alec M. Thompson
                  </p>
                </div>
                <div className="profile-Task1-divs-center-items">
                  <strong className="profile-Task1-divs-center-items-str">
                    Mobile:
                  </strong>{" "}
                  <p className="profile-Task1-divs-center-items-p">
                    {" "}
                    (44) 123 1234 123
                  </p>
                </div>
                <div className="profile-Task1-divs-center-items">
                  <strong className="profile-Task1-divs-center-items-str">
                    Email:{" "}
                  </strong>{" "}
                  <p className="profile-Task1-divs-center-items-p">
                    alecthompson@mail.com
                  </p>
                </div>
                <div className="profile-Task1-divs-center-items">
                  <strong className="profile-Task1-divs-center-items-str">
                    Location:
                  </strong>{" "}
                  <p className="profile-Task1-divs-center-items-p">
                    {" "}
                    United States
                  </p>
                </div>
                <div className="profile-Task1-divs-center-items">
                  <strong className="profile-Task1-divs-center-items-str">
                    Social Media:
                  </strong>

                  <span className="iconee">
                    <Icon name="face1" />
                  </span>
                  <span className="iconee">
                    <Icon name="X" />
                  </span>
                  <span className="iconee">
                    <Icon name="ins" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-Taslk1-divs">
            <div className="profile-Task1-divs-center">
              <strong>Conversations</strong>
              <div className="profile-Task1-divs-center-itemss">
                {converitems.map((item) => (
                  <>
                    <div className="profile-Task1-divs-center-itemss-dvs">
                      <div className="images">
                        <img src={item.img} alt="" className="images" />
                      </div>
                      <div>
                        <strong className="conver-str">{item.titleL}</strong>
                        <p className="conver-p">{item.p}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="profile-Task2">
          <div className="profile-Task2-center">
            <strong>Projects</strong>
            <p className="profile-Task2-p">Architects design houses</p>
            <div className="flex">
            <div className="profile-Task2-items">
              {ArrPojects.map((item) => (
                <>
                  <div className="profile-Task2-items-dvs">
                    <div className="profile-Task2-items-dvs-dimg">
                      <img src={item.img} alt=""  className="profile-Task2-items-dvs-dimg-img"/>
                    </div>
                    <div>
                      <p className="profile-Task2-items-dvs-Pr">Project {item.Pr}</p>
                      <strong className="profile-Task2-items-dvs-str">{item.title}</strong>
                      <p className="profile-Task2-items-dvs-p">{item.p}</p>
                    </div>
                    <div className="profile-Task2-items-dvs-F">
                      <button className="profile-Task2-items-dvs-F-btn">VIEW ALL</button>
                      xd2
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="add">
              <div className="add-center">
                <Icon name="plus"/>
                <p className="add-center-p">Create a New Project</p>
              </div>
            </div>
          </div>
        </div></div>
      </div>
    </>
  );
}
export default Profile;
