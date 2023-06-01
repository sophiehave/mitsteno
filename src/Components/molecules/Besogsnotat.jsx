import './CSS/Besogsnotat.css';
import { Link } from "react-router-dom";
import {IoIosArrowBack} from 'react-icons/io'

let besogsnotatdata =[
    {
        behandler:<div>Læge O. Hansen</div>,
        datoogtid:<div>14 marts 2023 13:35</div>,
        titelpaabesog:<div>DIABETES BESØG, PEN</div>,
        provedata:<div><p>Hæmoglobin A1c (IFCC);Hb(B) (mmol/mol)</p> 
                    <table>
                        <tr className='tableheader'>
                            <th>Dato</th>
                            <th>Værdi</th>
                        </tr>
                        <tr>
                            <th>14-03-2023</th>
                            <th>56</th>
                        </tr>
                        <tr>
                            <th>21-11-2022</th>
                            <th>51</th>
                        </tr>
                    </table></div>,
        notatfrabehandler:<div><p> <b>Aktuelt:</b> <br/>Måler fint blodsukker i løbet af dagen. Viser nogle høje blodsukre om natten <br /><br /> <b>Konklusion og plan:</b> <br /> Tag nogle enheder novorapid inden sengetid. <br />Info: Pt. infomeret om, forstår og acceptere ovenstående plan. Henvender sig før ved behov.</p></div>
    }
]

export default function Besogsnotat () {
    return(
        <div>
            <Link to="/historik" className="linkklik">
            <div className='tilbagetilhistorik'>
                <IoIosArrowBack/> 
                <p>Tilbage til historik</p>
            </div>
            </Link>

            {besogsnotatdata.map(({behandler, datoogtid, titelpaabesog, provedata, notatfrabehandler}, i) =>
            <div className='besogindhold' behandler={behandler} datoogtid={datoogtid} titelpaabesog={titelpaabesog} provedata={provedata} notatfrabehandler={notatfrabehandler}>
                <h3>Kliniske notater</h3>
                <span className='blaabaggrund'><p>Kontinuationsnotater&nbsp;{behandler}&nbsp;{datoogtid}</p></span>
                <p><b>{titelpaabesog}</b></p>
                <p>{provedata}</p>
                <p>{notatfrabehandler}</p>
                <br /><br />
                <p>{behandler}</p>
            </div>

            )}


            {/* {historikinfo.map(({dato, behandler}, i) =>
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
                        <button>Læs besøgsnotat</button>
                    </div>

            </div>
            )} */}
        </div>
    )
}