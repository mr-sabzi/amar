import "../../Styles/Footer.css"

function Footer() {
    return(
        <>
        <div className={
        location.pathname === "/SignIn" ? "SignActive" :"Footer"
      }>
            <div>
                <p className="Footer-P">@ 2021, Made with ❤️ by <a href="" className="Footer-L-a">Creative Tim</a>  & <a href="" className="Footer-L-a">Simmmple</a>  for a better web</p>
            </div>
            <div className="footer-R">
                <ul className="Footer-ul">
                    <li ><a href="" className="Footer-P Footer-R-a">Simmmple</a></li>
                    <li ><a href="" className="Footer-P Footer-R-a">Blog</a></li>
                    <li ><a href="" className="Footer-P Footer-R-a">License</a></li>
                    <li ><a href="" className="Footer-P Footer-R-a">Creative Tim</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Footer