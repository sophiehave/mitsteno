import './CSS/Findvej.css';
import oversigtskort from "../atoms/oversigtskort.png";

export default function Findvej(){
    return(
        <div className='findvej'>
            <h2>Find vej</h2>
            <p className='findvejbeskrivelse'>Problemer med at finde vej til Steno, her kan du finde de informationer du kan bruge for lettere at finde vej.</p>
            <div className='findvejindhold'>
                <div>
                    <h3>Adressen</h3>
                    <p>Borgmester Ib Juuls Vej 83, 2730 Herlev</p>
                </div>
                <div>
                    <h3>Offenlig transport</h3>
                    <p>Du kan benytte buslinje 5C, 300S eller 30E, som stoppeer ved Herlev Hospital. Den nærmeste S-togsstation er Herlev Station, der ligger 1,6 km væk. <br /> <br />Når du ankommer til Herlev Hospital, er der to gåruter til SDCC: <br />
                    <ul>
                    <li>Du kan enten følge stien langs Ring 3 forbi Akutmodtagelsen. SDCC ligger lige bagved denne bygning. </li>
                    <li>Eller du kan gå ind ad hovedindgangen til Herlev Hospital og lige ud gennem Grønnegården til den nordlige indgang til SDCC (Nr. 83).</li>
                    </ul>
                    </p>
                </div>
                <div>
                    <h3>Oversigtskort</h3>
                    <img src={oversigtskort} alt="Oversigtskort over Steno Diabetes Center Copenhagen, hvor man kan se hvordan man finder rundt på Steno, og hvor man kan parkere lettest, for at komme lettest til den rigtige indgang." />
                    <br />
                    <a href="https://www.sdcc.dk/find-vej/Documents/kort%20med%20sti%20fra%20bussen.pdf">Klik her for at se kortet i større format</a>
                </div>
                <div>
                    <h3>Google Maps</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.618646731055!2d12.438495477476998!3d55.73037929371727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46524de2df139d35%3A0x5418c2108f17fb04!2sSteno%20Diabetes%20Center%20Copenhagen!5e0!3m2!1sda!2sdk!4v1684952085949!5m2!1sda!2sdk" ></iframe>
                </div>
            </div>
        </div>
    )
}