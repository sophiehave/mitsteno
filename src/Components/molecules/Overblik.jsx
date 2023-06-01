import './CSS/Overblik.css';
import { Link } from "react-router-dom";


export default function Overblik (){
    return(
        <div className="overblik">
        <h2>Overblik</h2>
        <p>Her får du et overblik over dine muligheder for at se data og foretage registreringer, når du er logget ind på mitsteno.dk.</p>
        <div className="kategorier">
            <div className="borderRed">
            <Link to="/mineinformationer" className="linkklik">
                <h3>Mine informationer</h3>
            </Link>
            <Link to="/provesvar" className="linkklik">
                <p className="borderGrey">Prøvesvar</p>
            </Link>
            <Link to="/recept" className="linkklik">
                <p className="borderGrey">Recept</p>
            </Link>
            <Link to="/minebeskeder" className="linkklik">
                <p className="borderGrey">Mine beskeder</p>
            </Link>
            <Link to="/historik" className="linkklik">
                <p>Historik</p>
            </Link>
            </div>

            <div  className="borderRed">
            <Link to="/kommendetider" className="linkklik">
                <h3>Kommende tider</h3>
            </Link>
            <Link to="/kommendetider" className="linkklik">
                <p className="borderGrey">Se dine kommende tider</p>
            </Link>
            <Link to="/sporgeskema" className="linkklik">
                <p className="borderGrey">Spørgeskema</p>
            </Link>
            <Link to="/uploadinformation" className="linkklik">
                <p>Upload data</p>
            </Link>
            </div>

            <div>
            <Link to="/kontakt" className="linkklik">
                <h3>Kontakt</h3>
            </Link>
            <Link to="/skrivbesked" className="linkklik">
                <p className="borderGrey">Skriv en ikke akut besked  til behandler</p>
            </Link>
            <Link to="/kontakt" className="linkklik">
                <p className="borderGrey">Ring til Steno</p>
            </Link>
            <Link to="/findvej" className="linkklik">
                <p>Find vej</p>
            </Link>
            </div>

        </div>
        </div>
    )
}