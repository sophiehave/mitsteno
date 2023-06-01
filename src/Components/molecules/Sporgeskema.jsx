import './CSS/Sporgeskema.css';
import {FcSurvey} from 'react-icons/fc'

let sporgeskematiludfyldelse=[
// {
//     sporgeskemanavn: <div>Hvad har du spist?</div>
// }
]

function sporgeskemaellerej(){
        if(sporgeskematiludfyldelse.length>0){
            return(
                <div>
            {sporgeskematiludfyldelse.map(({sporgeskemanavn}, i) =>{
                return(
                    <div className='ditspørgeskema'>
                        <span><FcSurvey/></span>
                        <a href="#">
                {sporgeskemanavn}
                        </a>
                </div> 
                    )
            })}
            </div>
               )
        }else{
            return(
                <p className='Ingensporgeskema'>Du har ikke nogle spørgeskemaer at udfylde.</p>

            )
        }
        
    }


export default function Sporgeskema(){
    return(
        <div className='sporgeskema'>
            <h2>Spørgeskema</h2>
            <p>Her kan du finde dine spørgeskemaer, som dine behandler ønsker dig at udfylde</p>

            <div className='sporgeskemaindhold'>
            {sporgeskemaellerej()}
            </div>
        </div>
    )
}