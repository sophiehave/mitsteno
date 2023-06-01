import './CSS/Historik.css';
import {BsHospital} from "react-icons/bs";
import { Link } from "react-router-dom";

let historikinfo=[
    {
        dato: <div className='besogdato'>14 marts 2023</div>,
        behandler: <div className='besogbehandler'>Læge O. Hansen</div>
    },
    {
        dato: <div className='besogdato'>21 november 2022</div>,
        behandler: <div className='besogbehandler'>Diætist K. Fredriksen</div>
    },
    {
        dato: <div className='besogdato'>29 juni 2022</div>,
        behandler: <div className='besogbehandler'>Sygeplejeske A. Vestergaard</div>
    },
]

export default function Historik(){
    return(
        <div className='historik'>
            <h2>Historik</h2>
            <p>Her kan du se og danne overeblik over dine tidligere besøg og forløb hos Steno.</p>

            {historikinfo.map(({dato, behandler}, i) =>
                <div className='tidligerebesog'>
                    <div className='boksmedbesog'>
                        <h2><BsHospital/></h2>
                            <div dato={dato} behandler={behandler} key={i} >
                                {dato}
                                <br />
                                {behandler}
                            </div>
                    </div>
                    <div className='besogsnotatknap'>
                    <Link to="/besogsnotat" className="linkklik">
                        <button>Læs besøgsnotat</button>
                    </Link>
                    </div>

            </div>
            )}
        </div>
    )
}