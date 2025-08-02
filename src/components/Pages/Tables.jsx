import Icon from "../Icons/Icon";
import "../Styles/Tables.css";

const ArrTableT2 = [
  {
    icon: "xd",
    name: "Chakra Soft UI Version",
    budget: "14,000",
    status: "Working",
    comp: "60%",
  },
  {
    icon: "Prog",
    name: "Add Progress Track",
    budget: "$3,000",
    status: "Canceled",
    comp: "60%",
  },
  {
    icon: "Plat",
    name: "Fix Platform Errors",
    budget: "Not set",
    status: "Done",
    comp: "60%",
  },
  {
    icon: "spotify",
    name: "Launch our Mobile App",
    budget: "$32,000",
    status: "Done",
    comp: "60%",
  },
  {
    icon: "Pri",
    name: "Add the New Pricing Page",
    budget: "$400",
    status: "Working",
    comp: "60%",
  },
];
const ArrTableT = [
  {
    img: "/image/Image (1).png",
    name: "Esthera Jackson",
    email: "esthera@simmmple.com",
    function: "Manager",
    zirfunc: "Organization",
    status: "Online",
    employed: "14/06/21",
  },
  {
    img: "/image/Image (2).png",
    name: "Alexa Liras",
    email: "esthera@simmmple.com",
    function: "Programmer",
    zirfunc: "Developer",
    status: "Offline",
    employed: "14/06/21",
  },
  {
    img: "/image/Image (3).png",
    name: "Ernst Handel",
    email: "laurent@simmmple.com",
    function: "Executive",
    zirfunc: "Projects",
    status: "Online",
    employed: "14/06/21",
  },
  {
    img: "/image/Image (4).png",
    name: "Freduardo Hill",
    email: "freduardo@simmmple.com",
    function: "Manager",
    zirfunc: "Organization",
    status: "Online",
    employed: "14/06/21",
  },
  {
    img: "/image/Image (5).png",
    name: "Daniel Thomas",
    email: "daniel@simmmple.com",
    function: "Programmer",
    zirfunc: "Developer",
    status: "Offline",
    employed: "14/06/21",
  },
  {
    img: "/image/Image (6).png",
    name: "Mark Wilson",
    email: "mark@simmmple.com",
    function: "Designer",
    zirfunc: "UI/UX Design",
    status: "Offline",
    employed: "14/06/21",
  },
];

function Tables() {
  return (
    <>
      <div className="table-task1">
        <h3 className="table-task1-h3">Authors Table</h3>

        <table className="table-task1-table">
          <tr className="table-task1-table-tr1">
            <th >AUTHOR</th>
            <th>FUNCTION</th>
            <th>STATUS</th>
            <th>EMPLOYED</th>
          </tr>
          {ArrTableT.map((item) => (
            <>
              <tr className="table-task1-table-tr">
                <td>
                  <div className="table-task1-table-tr-td-dimg">
                    <img
                      src={item.img}
                      alt=""
                      className="table-task1-table-tr-td-dimg-img"
                    />
                    <div className="table-task1-table-tr-td-divmargin">
                      <p className="table-task1-table-tr-td-str">{item.name}</p>
                      <p className="table-task1-table-tr-td-email">
                        {item.email}
                      </p>
                    </div>
                  </div>
                </td>
                {/* <td>{item.email}</td> */}
                <td>
                  <p className="table-task1-table-tr-td-str">{item.function}</p>
                  <p className="table-task1-table-tr-td-email">
                    {item.zirfunc}
                  </p>
                </td>
                <td>{item.status}</td>
                <td>{item.employed}</td>
                <td>
                  <button className="EditTable">Edit</button>
                </td>
              </tr>
            </>
          ))}
        </table>
      </div>

      <div className="table-task1">
              <div className="table-task1-matn">
                <h2>Projects</h2>
                <span className="shadowsss ">
                  <Icon name="tikSabz" />
                  <strong> 30 done </strong> this month
                </span>
              </div>
        <table className="table-task1-table">
          <tr className="table-task1-table-tr1">
            <th className="table-task1-table-tr1">COMPANIES</th>
            <th>BUDGET</th>
            <th>STATUS</th>
            <th>COMPLETION</th>
          </tr>
          {ArrTableT2.map((item) => (
            <>
              <tr className="table-task1-table-tr">
                <td>
                  <div className="table-task1-table-tr-td-dimg">

                    <Icon name={item.icon}  />
                    <div className="table-task1-table-tr-td-divmargin">
                      <p className="table-task1-table-tr-td-str">{item.name}</p>
                    </div>
                  </div>
                </td>

                <td>
                  <p className="table-task1-table-tr-td-str">{item.budget}</p>
                </td>
                <td>{item.status}</td>
                <td>{item.comp}</td>
                <td>
                    {" "}
                    <Icon name="Tanzimat" />
                    
                </td>
              </tr>
            </>
          ))}
        </table> 
      </div>
    </>
  );
}

export default Tables;
