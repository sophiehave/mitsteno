import './CSS/Mineinformationer.css';

export default function Mineinformationer(){
    return(
        <div>
            <div className='mininformationbeskrivelse'>
                <h2>Mine informationer</h2>
                <p>Her kan du se dine informationer.</p>
            </div>

            <div className='informationsdata'>
                <p><strong>Navn:</strong> Maiken Lund</p>
                <p><strong className='stenoidbeskrivelse'>StenoID*:</strong> MaLun-31<span className='stenoidforklaring'>Dette er dit personlige ID nummer til når du er ude på et af vores centre</span></p>
                <p><strong>Steno Center:</strong> Steno Diabetes Center Copenhagen</p>
                <p><strong>Primær behandler:</strong> Læge O. Hansen</p>
            </div>
        </div>
    )
}