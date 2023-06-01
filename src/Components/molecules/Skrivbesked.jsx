import './CSS/Skrivbesked.css';

export default function Skrivbesked(){
    return(
        <div>
            <div className='skrivbeskedintro'>
                <h2>Skriv en ikke akut besked til behandler</h2>
                <p>Her kan du skrive en ikke akut besked til din behandler. Hvis du har akut brug for hjælp, så ring til Steno på <strong>39 68 08 00</strong></p>
            </div>

            <div className='skrivbeskeddata'>
                <form>
                    <label htmlFor="behandler">Vælg behandler</label> <br />
                    <select name="behandler" id="behandler" required>
                        <option value="" disabled selected hidden> </option>
                        <option value="lage">Læge O. Hansen</option>
                        <option value="sygeplejeske">Sygeplejeske A. Vestergaard</option>
                        <option value="diaetist">Diætist K. Fredriksen</option>
                    </select>
                    <br /><br />
                    <label htmlFor="titel">Titel</label> <br />
                    <input type="text" id='titel' className='titel' required />
                    <br /><br />
                    <label htmlFor="skrevetbesked">Din besked</label> <br />
                    <textarea name="skrevetbesked" id="skrevetbesked" rows="4" required></textarea>
                    <br /><br />
                    <input type="submit" className='send' />
                </form>

            </div>
        </div>
    )
}