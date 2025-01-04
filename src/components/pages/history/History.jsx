import { useTranslation } from 'react-i18next';
import './History.css'
import dadaMurshid from './images/dadamurshid.jpeg';
import riyazBaba from './images/riyazbaba.jpeg';
import chistibaba from './images/chistibaba.jpeg';
const History = () => {
    const {t} = useTranslation();
    const {title} = t('history');
    const {line1, line2, line3} = t('history.historyDescription');
    const {baba1, baba2, baba3} = t('history.card.title');
  return (
    <>
        <div className="history">
            <div className="container">
                <div className="row ">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1 className="display-5 text-center text-white text-uppercase mt-5">{title}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-5">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 my-3">
                    <div className="card text-start">
                        <img className="card-img-top shadow ing-fluid img-thumbnail" src={dadaMurshid} alt="Title" style={{height:"500px"}}/>
                        <div className="card-body">
                            <h4 className="card-title text-uppercase text-center">{baba1}</h4>
                            <p className="card-text">Body</p>
                        </div>
                    </div>                    
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 my-3">
                    <div className="card text-start">
                        <img className="card-img-top shadow ing-fluid img-thumbnail" src={riyazBaba} alt="Title" style={{height:"500px"}}/>
                        <div className="card-body">
                            <h4 className="card-title text-uppercase text-center">{baba2}</h4>
                            <p className="card-text">Body</p>
                        </div>
                    </div>                    
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 my-3">
                    <div className="card text-start">
                        <img className="card-img-top shadow ing-fluid img-thumbnail" src={chistibaba} alt="Title" style={{height:"500px"}}/>
                        <div className="card-body">
                            <h4 className="card-title text-uppercase text-center">{baba3}</h4>
                            <p className="card-text">Body</p>
                        </div>
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

export default History