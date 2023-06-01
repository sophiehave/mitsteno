import './CSS/Uploadinformation.css';
import {BsUpload} from 'react-icons/bs'

export default function Uploadinformation(){
    return(
        <div className='upload'>
            <h2>Upload information</h2>
            <p className='uploadinformation'>Her kan du uploade dine data fra dine blodsukkermålere og/eller pumpe, så du ikke behøver gør det når du ankommer.</p>
            <div className='uploadlink'>
                <div className='uploadboks'>
                    <div className='uploadikon'>
                        <BsUpload/>
                    </div>
                    <div className='uploadtekst'>
                        <p>Her kan du uploade information fra din <strong>Libre</strong></p>
                        <a href="https://www.libreview.com/">Upload her</a>
                    </div>
                </div>
                <br /> <br />
                <div className='uploadboks'>
                    <div className='uploadikon'>
                        <BsUpload/>
                    </div>
                    <div>
                        <p>Her kan du uploade information fra din <strong>Tandem pumpe, Glucocheck, GlucoX, Omnipod </strong></p>
                        <a href="https://my.glooko.com/users/sign_in">Upload her</a>
                    </div>
                    
                </div>
                <br /><br />
                <div className='uploadboks'>
                    <div className='uploadikon'>
                        <BsUpload/>
                    </div>
                    <div>
                        <p>Her kan du uploade information fra din <strong>Contour Next</strong></p>
                        <a href="https://tidepoolsupport.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fsupport.tidepool.org%2Fhc%2Fen-us%2Farticles%2F360029369172-Uploading-your-Ascensia-Bayer-Contour-Next-Meter&theme=hc&locale=en-us&brand_id=360001712372&auth_origin=360001712372%2Ctrue%2Ctrue">Upload her</a>
                        
                    </div>
                </div>
               
                
            </div>
        </div>
    )
}