import Icon from "../../Icons/Icon";
import "../../Styles/ChartRL.css";
import BarChart from "./LeftChart";
import RghitChart from "./RghitChart.jsx";
const objectha = [
  {
    id: 1,
    Icons: "KifSmall",
    name: "users",
    number: "32,984",
    por: 60,
  },
  {
    id: 2,
    Icons: "Mooshak",
    name: "Clicks",
    number: "2,42m",
    por: 80,
  },
  {
    id: 3,
    Icons: "SabadSmall",
    name: "Sales",
    number: "2,400$",
    por: 40,
  },
  {
    id: 4,
    Icons: "Achar",
    name: "Items",
    number: "320",
    por: 55,
  },
];
function ChartRL() {
  return (
    <>
      <div className="Task3">
        <div className="Task3-divL">
          <div className="Task3-d-center">
            <div className="Task3-divL-chart">
              <BarChart />
            </div>
            <div className="Task3-divL-matn">
              <strong>Active Users</strong>

              <p>
                <span className="Task3-divL-matn-d-span">(+23) </span> than last
                week
              </p>
            </div>
            <div className="Task3-divL-divs">
              {objectha.map((item) => (
                <>
                  <div className="Task3-divL-divs-d">
                    <div className="Task3-divL-divs-d-bala">
                      <span className="Task3-divL-divs-d-bala-span">
                        <Icon name={item.Icons} />
                      </span>
                      <p className="Task3-divL-divs-d-bala-p">{item.name}</p>
                    </div>
                    <span>{item.number}</span>
                    <div className="Task3-divL-divs-d-divkhali">
                      <div
                        className="Task3-divL-divs-d-divpor"
                        style={{ width: item.por }}
                      ></div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="Task3-divR">
          <div className="Task3-d-center">
            <div className="Task3-divR-div-bala">
              <strong>Sales overview</strong>
              <p className="Task3-divL-matn-d-p">
                <span className="Task3-divL-matn-d-span">(+5) more</span> in
                2021
              </p>
            </div>
            <div className="Task3-divR-div-Chart">
              <RghitChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChartRL;
