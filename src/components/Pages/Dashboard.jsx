import Icon from "../Icons/Icon";
import "../Styles/Dashboard.css";
import img1 from "/image/Image.png";
import ChartRL from "../UI/Dashboard/ChartRL";
import Overview from "../UI/Dashboard/Overview";

const task1 = [
  {
    id: 1,
    name: "Today’s Money",
    price: "$53,000",
    priceCh: "+55%",
    icon: "kif",
  },
  {
    id: 2,
    name: "Today’s Users",
    price: "2,300",
    priceCh: "+5%",
    icon: "brow",
  },
  {
    id: 3,
    name: "New Clients",
    price: "+3,052",
    priceChM: "-14%",
    icon: "status",
  },
  {
    id: 4,
    name: "Total Sales",
    price: "$173,000",
    priceCh: "+8%",
    icon: "sabad",
  },
];
function Dashboard() {
  return (
    <>
      <div className="dashbord-task1">
        {task1.map((item) => (
          <div className="dashbord-task1-divs">
            <div className="dashbord-task1-divs-center">
              <div className="dashbord-task1-divs-diL">
                <span className="dashbord-task1-divs-pric-p">{item.name}</span>
                <div className="dashbord-task1-divs-pric">
                  <p className="dashbord-task1-divs-pric-p">{item.price}</p>
                  <span className="dashbord-task1-divs-pric-darsad">
                    {item.priceCh}
                  </span>
                  <span className="dashbord-task1-divs-pric-darsadM">
                    {item.priceChM}
                  </span>
                </div>
              </div>
              <div className="dashbord-task1-divs-diR">
                <Icon name={item.icon} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="task2">
        <div className="task2-div1">
          <div className="task2-div1-center">
            <div className="task2-div1-dL">
              <div className="task2-div1-dL-bala">
                <p className="task2-div1-dL-bala-p1">Built by developers</p>
                <strong className="task2-div1-dL-bala-p2">Purity UI Dashboard</strong>
                <p className="task2-div1-dL-bala-p3"> From colors, cards, typography to complex elements,
                <br /> you will find the full documentation.</p>
              </div>
              <div className="task2-div1-dL-pain">
                <button className="task2-div1-dL-pain-btn">
                  Read more
                  <span>
                    <Icon name="right" />
                  </span>
                </button>
              </div>
            </div>
            <div>
              <div className="task2-div1-dR">
                <img src={img1} alt="" className="image" />
              </div>
            </div>
          </div>
        </div>
        <div className="task2-div2">
          <div className="task2-di2-center">
            <div className="task2-di2-center-p">
              <div className="task2-di2-center-p-p">
                <p className="sdasds11">Work with the Rockets</p>
                <p className="sdasds">
                  Wealth creation is an evolutionarily recent positive-sum game.
                  <br />
                  It is all about who take the opportunity first.
                </p>
              </div>
              <div className="task2-div1-dL-pain">
                <button className="saldkmo-btn">
                  Read more
                  <span>
                    <Icon name="right2" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

        <ChartRL/>
        <Overview/>
        
    </>
  );
}
export default Dashboard;
