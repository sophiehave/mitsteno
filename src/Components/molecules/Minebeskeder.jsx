import './CSS/Minebeskeder.css';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

let minebeskederfrabehandler=[
    {
        overskrift: <div className="beskedindholdoverskrift"><h3>Sv: Kan ikke forstå mine blodprøvesvar</h3> <h4>Læge O. Hansen</h4> <h5>23/4-2023</h5></div>,
        svar: <div className="beskedindholdindhold"><p>Hej Maiken, <br />
        Ift. dine blodprøver, så ligger dit langtidsblodsukker på 51, som ligger så fint. Du skal huske at arbejde med dit blodsukker om morgen, som vi snakkede om.
        Fortsæt det flotte arbejde. <br /><br />Læge O. Hansen</p></div>
    },
    {
        overskrift: <div className="beskedindholdoverskrift"><h3>Justering af dosis</h3> <h4>Læge O. Hansen</h4> <h5>11/4-2023</h5></div>,
        svar: <div className="beskedindholdindhold"><p>Hej Maiken, <br />
        En ting vi ikke fik talt om ved dit besøg, er antallet af dine lave blodsukre. Jeg vil anbefale dig at skrue ned for din langtidsvirkende fra 17 ei, til nu at være 15 ei, så du kan undgå de lave blodsukre. Husk med Tresiba, kan der gå et par dage før du kan mærke effekten.<br /><br />Læge O. Hansen</p></div>
    },
    {
        overskrift: <div className="beskedindholdoverskrift"><h3>Sv: Madplanen virker ikke</h3> <h4>Diætist K. Fredriksen</h4> <h5>5/2-2023</h5></div>,
        svar: <div className="beskedindholdindhold"><p>Hej Maiken, <br />
        Ift. dit spørgsmål ift. kulhydrats ratioen, så husk at du skal arbejde med en ratio på 10 kulhydrater per enhed om morgen, og en anden ratio på 18 kulhydrater per enhed efter 12. <br /> Hvis du stadig oplever problemer, så tænker jeg vi skal få lavet en ny tid til samtale.<br /><br />Diætist K. Fredriksen</p></div>
    },
    {
        overskrift: <div className="beskedindholdoverskrift"><h3>Sv: Glemte at spørge om træning</h3> <h4>Sygeplejeske A. Vestergaard</h4> <h5>31/6-2022</h5></div>,
        svar: <div className="beskedindholdindhold"><p>Hej Maiken, <br />
        Når du skal træne, så skal du huske at de forskellige træningsforme, påvirker blodsukkeret på forskellige måder. Styrketræning, kan få blodsukkeret til at stige lidt, men vil falde igen efter. Derimod konditionstræning får blodukkeret til at falde, og jeg vil anbefale enten at have noget sukker med dig hvis du skal konditionstræne, eller planlæg det sammen med et måltid.<br /><br />Sygeplejeske A. Vestergaard</p></div>
    },
    {
        overskrift: <div className="beskedindholdoverskrift"><h3>Kursus i kulhydratstælling</h3> <h4>Diætist K. Fredriksen</h4> <h5>15/4-2022</h5></div>,
        svar: <div className="beskedindholdindhold"><p>Hej Maiken, <br />
        Det er ved at blive tid til et kursus i kulhydratstælling. <br /> Det vil finde sted i et af vores køkkener her på Steno. <br />Ved ikke endnu hvornår det vil forkomme, da vi mangler flere deltagere til kurset, men du vil forhåbenligt snart modtage en invitation på e-boks.
       <br /><br />Diætist K. Fredriksen</p></div>
    },
];

export default function Minebeskeder(){
    return(
        <div className="minebeskeder">
            <h2>Mine beskeder</h2>
            <p className='minebeskederinfo'>Her finder du svar på de beskeder du har skrevet til dine behandlere, eller beskeder som din behandler har skrevet til dig</p>

            <Accordion className='accordionbeskeder'>
                {minebeskederfrabehandler.map(({ overskrift, svar }, i) => (
                     <AccordionItem className="beskedindhold" header={overskrift} key={i} >
                        {svar}
                    </AccordionItem>
                 ))}
            </Accordion>
        </div>
    )
}