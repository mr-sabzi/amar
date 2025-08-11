import Icon from "../../Icons/Icon";
import "../../Styles/Overview.css";
const ArrOver = [
  {
    icon: "xd",
    name: "Chakra Soft UI Version",
    icon2: "xd2",

    Bud: "$14,000",
    Comp: "60%",
  },
  {
    icon: "Prog",
    name: "Add Progress Track",
    icon2: "Prog2",

    Bud: "$3,000",
    Comp: "10%",
  },
  {
    icon: "Plat",
    name: "Fix Platform Errors",
    icon2: "Plat2",

    Bud: "No set",
    Comp: "100%",
  },
  {
    icon: "spotify",
    name: "Launch our Mobile App",
    icon2: "spotify2",

    Bud: "$32,000",
    Comp: "100%",
  },
  {
    icon: "Pri",
    name: "Add the New Pricing Page",
    icon2: "Pri2",

    Bud: "$400",
    Comp: "25%",
  },
  {
    icon: "in",
    name: "Redesign New Online Shop",
    icon2: "in2",

    Bud: "$7,600",
    Comp: "40%",
  },
];
const ArrFR = [
  {
    name: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
  },
  {
    name: "New order #4219423",
    date: "21 DEC 11:21 PM",
  },
  {
    name: "Server Payments for April",
    date: "21 DEC 9:28 PM",
  },
  {
    name: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
  },
  {
    name: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
  },
  {
    name: "New order #9851258",
    date: "18 DEC 4:41 PM",
  },
];
const ArrAvatar = [

    {
    margin:"-10px",
    img: "../image/829b223a519c61d51eb440aff46c5258b749cc2b.jpg",
  },

  {
    margin:"-10px",
    img: "../image/79d4f6cc74be928a57c88c53b40db6b2d3cd95de.jpg",
  },
  {
    margin:"-10px",
    img: "../image/a70139183377d3b29d32b52ddb5e92d8d08643a1.jpg",
  },
  {
   margin:"-10px",
    img: "../image/b940caf9f3a52bcc9317c793ebc094db911b237b.jpg",
  },
  {
   margin:"-10px",
    img: "../image/aefc4dce7d5db174a07347d853fddacb55edbe39.jpg",
  },
];
function Overview() {
  return (
    <>
      <div className="overview-kol">
        <div className="overview-kol-L">
          <div className="overview-kol-L-center">
            <div className="overview-kol-L-header">
              <div className="overview-kol-L-header-matn">
                <h2>Projects</h2>
                <span className="shadowsss">
                  <Icon name="tikSabz" />
                  <strong> 30 done </strong> this month
                </span>
              </div>
              <div>
                {" "}
                <Icon name="Tanzimat" />
              </div>
            </div>
            <div className="overview-kol-L-header2">
              <div className="overview-kol-L-header2-Left">
                <strong className="overWiew-Header-str">COMPANIES</strong>
              </div>
              <div className="overview-kol-L-header2-Right">
                <strong className="overWiew-Header-str">ّMEMBERS</strong>
                <strong className="overWiew-Header-str">BUDGET</strong>
                <strong className="overWiew-Header-str">COMPLETION</strong>
              </div>
            </div>

            <div className="overview-kol-L-over">
              {ArrOver.map((item) => (
                <>
                  <div className="overview-kol-L-over-dvs">
                    <div className="overview-kol-L-over-dvs-DL">
                      <Icon name={item.icon} />{" "}
                      <h4 className="mdlsjfhuoedl">{item.name}</h4>
                    </div>
                    <div className="overview-kol-L-over-dvs-DR">
                      <div className="members-avatar">
                        {ArrAvatar.map((item) => (
                          <>
                            <div className="members-avatar-d"style={{marginLeft:`${item.margin}`}} >
                              <img src={item.img} alt=""  className="members-avatar-d-img"/>
                            </div>
                          </>
                        ))}
                      </div>
                      <div className="overview-kol-L-over-dvs-DR-price">{item.Bud}</div>
                      <div className="overview-kol-L-over-dvs-DR-com">
                        {item.Comp}
                        <div className="overview-kol-L-over-dvs-DR-com-d">
                          <div
                            className="overview-kol-L-over-dvs-DR-com-d-por"
                            style={{ width: item.Comp }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="overview-kol-R">
          <div className="overview-kol-R-center">
            <div className="overview-kol-R-header">
              <h3>Orders overview</h3>
              <span className="kalmdvz">
                <span className="green">+30%</span> this month
              </span>
            </div>
            <div className="overview-kol-R-body">
              <div className="overview-kol-R-body-L">
                <span className="spaniconfit">
                  <Icon name="zang" />
                </span>
                <span className="fasele" />

                <span className="spaniconfit">
                  <Icon name="html" />
                </span>
                <span className="fasele" />
                <span className="spaniconfit">
                  <Icon name="sabadFo" />
                </span>
                <span className="fasele" />

                <span className="spaniconfit">
                  <Icon name="card" />
                </span>
                <span className="fasele" />

                <span className="spaniconfit">
                  <Icon name="box" />
                </span>
                <span className="fasele" />

                <span className="spaniconfit">
                  <Icon name="xdF" />
                </span>
                <span className="fasele2" />
              </div>
              <div className="overview-kol-R-body-R">
                {ArrFR.map((item) => (
                  <>
                    <div className="overview-kol-R-body-R-divs">
                      <h3 className="overview-kol-R-body-R-divs-names">
                        {item.name}
                      </h3>
                      <strong className="overview-kol-R-body-R-divs-dates">
                        {item.date}
                      </strong>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Overview;
