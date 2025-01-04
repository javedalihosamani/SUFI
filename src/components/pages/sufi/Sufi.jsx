import { useTranslation } from "react-i18next"
import './Sufi.css'
const Sufi = () => {
    const {t} = useTranslation();
    const {title} = t('sufi');
    const {line1, line2, line3} = t('sufi.sufiDescription');

  return (
    <>  
        <div className="sufi">
            <div className="container">
                <div className="row ">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1 className="display-1 text-center text-white text-uppercase mt-5">{title}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-5">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="lead lh-lg">
                        <p>{line1}</p>
                        <p>{line2}</p>
                        <p>{line3}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sufi