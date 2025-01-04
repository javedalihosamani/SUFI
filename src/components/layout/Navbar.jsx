import { NavLink } from "react-router-dom"
import logo from './logo.png'
import './Navbar.css';
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Navbar = () => {
  const langauges = [{
    name:'ಕನ್ನಡ',
    code:'kn'
  },{
    name:'English',
    code:'en'
  },{
    name:'हिंदी',
    code:'hi'
  },{
    name:'العربية',
    code:'ar'
  },{
    name:'اردو',
    code:'ur'
  }]

  const {i18n} = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);
  return (
    <>
        <nav className="navbar navbar-expand-xxl bg-light shadow lead">
            <div className="container">
                <NavLink className="navbar-brand" to={`/`}>
                <img src={logo} alt="" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <NavLink className="navbar-brand" to={`/`}>
                    <img src={logo} alt="" />
                  </NavLink>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 fw-bolder">
                    <li className="nav-item">
                      <NavLink className='nav-link' aria-current="page" to={`/home`}>Home</NavLink>
                    </li> 
                    <li className="nav-item">
                      <NavLink className='nav-link' aria-current="page" to={`/sufi`}>Sufism</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className='nav-link' aria-current="page" to={`/history`}>History</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className='nav-link' aria-current="page" to={`/silsila`}>Crown of Silsila-e-Jahangiriya</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className='nav-link' aria-current="page" to={`/about`}>About Us</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to={`/gallery`}>Gallery</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to={`/reach`}>How to Reach</NavLink>
                    </li>
                    <li className="nav-item">
                      <ul className="navbar-nav justify-content-end flex-grow-1">                    
                          <li className="nav-item dropdown">
                              <NavLink className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Languages <IoIosArrowDropdownCircle />
                              </NavLink>
                              <ul className="dropdown-menu">
                                <li>
                                {langauges.map((lang) => (                              
                                  <NavLink key={lang.code}
                                    className={lang.code === i18n.language ? 'dropdown-item active text-center' : 'dropdown-item text-center'}
                                    onClick={()=>changeLanguage(lang.code)}
                                  >{lang.name}</NavLink>                                                         
                                ))}  
                                </li> 
                              </ul>
                          </li>                                     
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar