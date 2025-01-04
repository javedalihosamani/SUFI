import { useTranslation } from "react-i18next";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { PiSnapchatLogo } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  const {t} = useTranslation();
  return (
    <div className='bg-light shadow'>
        <div className="container">
            <div className="row">
                <div className="col p-5">
                  <div className="lead text-center text-dark">
                    <p className="lead p-3 text-dark fw-medium">&#169; {t("footerTitle")}</p>
                    <span><NavLink to={`https://www.youtube.com/@sufiabdulrahmanshah5341`} target={`_blank`}><CiYoutube/></NavLink></span>
                    <span><NavLink><CiFacebook/></NavLink></span>
                    <span><NavLink><CiTwitter/></NavLink></span>
                    <span><NavLink><CiInstagram/></NavLink></span>
                    <span><NavLink><PiSnapchatLogo/></NavLink></span>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer