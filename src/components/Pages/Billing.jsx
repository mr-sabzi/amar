import Icon from "../Icons/Icon";
import "../Styles/Billing.css";
const Arritems = [
  {
    date: "March, 01, 2020",
    dis: "#MS-415646",
    price: "$180",
  },
  {
    date: "February, 10, 2021",
    dis: "#RV-126749",
    price: "$250",
  },
  {
    date: "April, 05, 2020",
    dis: "#FB-212562",
    price: "$560",
  },
  {
    date: "June, 25, 2019",
    dis: "#QW-103578",
    price: "$120",
  },
  {
    date: "March, 01, 2019",
    dis: "#AR-803481",
    price: "$300",
  },
];

const ArrInfo = [
  {
    name: "Oliver Liam",
    compa: "Viking Burrito",
    Email: "oliver@burrito.com",
    VAT: "FRB1235476",
  },
  {
    name: "Oliver Liam",
    compa: "Viking Burrito",
    Email: "oliver@burrito.com",
    VAT: "FRB1235476",
  },
  {
    name: "Oliver Liam",
    compa: "Viking Burrito",
    Email: "oliver@burrito.com",
    VAT: "FRB1235476",
  },
];

const ArrFooterR = [
  {
    icon: "manfi",
    name: "Netflix",
    dis: "27 March 2020, at 12:30 PM",
    price: "-$2500",
    color: "#E53E3E",
  },
  {
    icon: "mosbat",
    name: "Apple",
    dis: "27 March 2020, at 12:30 PM",
    price: "+$2500",
    color: "#48BB78",
  },
  {
    icon: "mosbat",
    name: "Stripe",
    dis: "26 March 2020, at 13:45 PM",
    color: "#48BB78",
    price: "+$800",
  },
  {
    icon: "mosbat",
    name: "HubSpot",
    dis: "26 March 2020, at 12:30 PM",
    color: "#48BB78",
    price: "+$1700",
  },
  {
    icon: "mosbat",
    name: "Webflow",
    dis: "26 March 2020, at 05:00 AM",
    price: "Pending",
    color: "#2D3748",
  },
  {
    icon: "manfi",
    name: "Microsoft",
    dis: "25 March 2020, at 16:30 PM",
    price: "-$987",
    color: "#E53E3E",
  },
];
const ArrFooterRSlice1 = ArrFooterR.slice(0, 2);
const ArrFooterRSlice2 = ArrFooterR.slice(2, 6);

function Billing() {
  return (
    <>
      <div className="billing-kol">
        <div className="billing-kol-task1">
          <div className="billing-kol-task1-L">
            <div className="billing-kol-task1-L-top">
              <div className="billing-kol-task1-L-top-card">
                <img
                  src="/image/Credit Card.png"
                  alt="card"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="billing-kol-task1-L-top-items">
                <div className="billing-kol-task1-L-top-items-icon">
                  <Icon name="wallet" />
                </div>
                <div className="billing-kol-task1-L-top-items-detail">
                  <div className="billing-kol-task1-L-top-items-detail-div">
                    <strong className="billing-kol-task1-L-top-items-detail-div-p1">
                      Salary
                    </strong>
                    <p className="billing-kol-task1-L-top-items-detail-div-p2">
                      Belong Interactive
                    </p>
                  </div>
                  <div>
                    <strong>+$2000</strong>
                  </div>
                </div>
              </div>
              <div className="billing-kol-task1-L-top-items">
                <div className="billing-kol-task1-L-top-items-icon">
                  <Icon name="paypal" />
                </div>
                <div className="billing-kol-task1-L-top-items-detail">
                  <div className="billing-kol-task1-L-top-items-detail-div">
                    <strong className="billing-kol-task1-L-top-items-detail-div-p1">
                      Paypal
                    </strong>
                    <p className="billing-kol-task1-L-top-items-detail-div-p2">
                      Freelance Payment
                    </p>
                  </div>
                  <div>
                    <strong>+$455.00</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="billing-kol-task1-L-bottom">
              <div className="billing-kol-task1-L-bottom-center">
                <div className="billing-kol-task1-L-bottom-header">
                  <strong>Payment Method</strong>
                  <button className="billing-kol-task1-L-bottom-header-btn">
                    ADD A NEW CARD
                  </button>
                </div>
                <div className="billing-kol-task1-L-bottom-main">
                  <div className="billing-kol-task1-L-bottom-main-divs">
                    <Icon name="logoLeft" />
                    <input
                      type="text"
                      name=""
                      id=""
                      className="billing-kol-task1-L-bottom-main-divs-inp"
                      placeholder="7812 2139 0823 XXXX"
                    />
                    <Icon name="edit" />
                  </div>
                  <div className="billing-kol-task1-L-bottom-main-divs">
                    <Icon name="logoRghit" />
                    <input
                      type="text"
                      name=""
                      id=""
                      className="billing-kol-task1-L-bottom-main-divs-inp"
                      placeholder="7812 2139 0823 XXXX"
                    />
                    <Icon name="edit" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="billing-kol-task1-R">
            <div className="billing-kol-task1-R-center">
              <div className="billing-kol-task1-R-top">
                <strong>Invoices</strong>
                <button className="billing-kol-task1-R-top-btn">
                  VIEW ALL
                </button>
              </div>
              <div className="billing-kol-task1-R-bottom">
                {Arritems.map((item) => (
                  <>
                    <div className="billing-kol-task1-R-bottom-divs">
                      <div className="billing-kol-task1-R-bottom-divs-div1">
                        <p className="billing-kol-task1-R-bottom-divs-div1-str">
                          {item.date}
                        </p>
                        <p className="billing-kol-task1-R-bottom-divs-div1-p">
                          {item.dis}
                        </p>
                      </div>
                      <div className="billing-kol-task1-R-bottom-divs-div2">
                        <span className="billing-kol-task1-R-bottom-divs-div1-p">
                          {item.price}
                        </span>
                        <button className="billing-kol-task1-R-bottom-divs-div2-btn">
                          <Icon name="pdf" />
                          PDF
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="billing-kol-task2">
          <div className="billing-kol-task2-L">
            <div className="billing-kol-task2-L-center">
              <div className="billing-kol-task2-L-str">
                <strong>Billing Information</strong>
              </div>
              <div className="billing-kol-task2-L-main">
                {ArrInfo.map((item) => (
                  <>
                    <div className="billing-kol-task2-L-main-divs">
                      <div className="billing-kol-task2-L-main-divs-center">
                        <div className="billing-kol-task2-L-main-divs-head">
                          <p className="billing-kol-task2-L-main-divs-head-p">
                            {item.name}
                          </p>
                          <div className="billing-kol-task2-L-main-divs-head-dbtn">
                            <button className="billing-kol-task2-L-main-divs-head-dbtn-btnDel">
                              <Icon name="satl" /> DELETE
                            </button>
                            <button className="billing-kol-task2-L-main-divs-head-dbtn-btnEdi">
                              {" "}
                              <Icon name="pentis" /> EDIT
                            </button>
                          </div>
                        </div>
                        <div className="billing-kol-task2-L-main-divs-head-dp">
                          <p className="billing-kol-task2-L-main-divs-head-dp-p">
                            Company Name:{" "}
                            <span className="billing-kol-task2-L-main-divs-head-dp-p-s">
                              {item.compa}
                            </span>
                          </p>

                          <p className="billing-kol-task2-L-main-divs-head-dp-p">
                            Email Address:{" "}
                            <span className="billing-kol-task2-L-main-divs-head-dp-p-s">
                              {item.Email}
                            </span>
                          </p>
                          <p className="billing-kol-task2-L-main-divs-head-dp-p">
                            VAT Number:
                            <span className="billing-kol-task2-L-main-divs-head-dp-p-s">
                              {" "}
                              {item.VAT}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="billing-kol-task2-R">
            <div className="billing-kol-task2-L-center">
              <div className="billing-kol-task2-R-divhead">
                <strong>Your Transactions</strong>
                <div className="billing-kol-task2-R-divhead-date">
                  <Icon name="date" />
                  <p>23 - 30 March 2020</p>
                </div>
              </div>

              <div className="billing-kol-task2-R-main">
                <p className="billing-kol-task2-R-main-p">NEWEST</p>
                <div className="billing-kol-task2-R-main-items">
                  {ArrFooterRSlice1.map((item) => (
                    <>
                      <div className="billing-kol-task2-R-main-items-divs">
                        <div className="billing-kol-task2-R-main-items-divs-divL">
                          <Icon name={item.icon} />
                          <div className="billing-kol-task2-R-main-items-divs-divL-div">
                            <p className="billing-kol-task2-R-main-items-divs-divL-name">
                              {item.name}
                            </p>
                            <p className="billing-kol-task2-R-main-items-divs-divL-dis">
                              {item.dis}
                            </p>
                          </div>
                        </div>
                        <p className="billing-kol-task2-R-main-items-divs-divL-price"
                          style={{ color: item.color }}>{item.price}</p>
                      </div>
                    </>
                  ))}
                  <p className="billing-kol-task2-R-main-p">YESTERDAY</p>
                  {ArrFooterRSlice2.map((item) => (
                    <>
                      <div className="billing-kol-task2-R-main-items-divs">
                        <div className="billing-kol-task2-R-main-items-divs-divL">
                          <Icon name={item.icon} />
                          <div className="billing-kol-task2-R-main-items-divs-divL-div">
                            <p className="billing-kol-task2-R-main-items-divs-divL-name">
                              {item.name}
                            </p>
                            <p className="billing-kol-task2-R-main-items-divs-divL-dis">
                              {item.dis}
                            </p>
                          </div>
                        </div>
                        <p
                          className="billing-kol-task2-R-main-items-divs-divL-price"
                          style={{ color: item.color }}
                        >
                          {item.price}
                        </p>
                      </div>
                      
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Billing;
