import { useTranslation, Trans } from "react-i18next"
import Banner from './../pages/banner/Banner';



const Home = () => {
    const {t} = useTranslation();
    
    //const {line1, line2} = t('description',{channel: "Hazrat Sufi Abdul Rehman Shah Baba"});
    const {line1, line2} = t('description');
    
  return (
    <>  
        <Banner/>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>{t("greeting")}</h1>
                    {/* <p>{line1}</p> */}
                    <span>
                    <Trans
                        //i18nKey ={'description.line1'}
                        i18nKey ={line1}
                        values = {{
                            channel: "Hazrat Sufi Abdul Rehman Shah Baba"
                        }}
                        components={{1:<b/>}}
                    />
                    </span>
                    <p>{line2}</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="card p-3 bg-body rounded">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.0728463014069!2d74.7664728!3d13.20701380000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcb194cf6247a7%3A0xc3254ee5470f15f5!2sHazrath%20Khwaja%20Sufi%20Rahmaniya%20Riyaziya%20Dargah!5e0!3m2!1sen!2sin!4v1735992740013!5m2!1sen!2sin" style={{height:"300px"}}></iframe>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home