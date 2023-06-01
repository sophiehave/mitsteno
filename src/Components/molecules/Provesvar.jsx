import './CSS/Provesvar.css';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import{MdOutlineBloodtype} from "react-icons/md";



let blodprovesvar=[
    {
        overskrift: <div className='proveboks'><span className='proveikon'><MdOutlineBloodtype /></span><h3>HÆMOBLOBIN A1C (IFCC);HB(B) <br /> <span className='provedato'> 14 marts 2023</span></h3></div>,
        svar: <div><p>Bestilt af Læge O. Hansen</p> <br /> <p>Prøve taget 14 marts 2023</p> <br /> <p>Prøvesvar 14 marts 2023</p> <br /> <br /> <p className='provevaerdi'>Værdi: 51</p> <br /> <p>Normalområde: {'<'}48 mmol/mol </p> </div>
    },
    {
        overskrift: <div className='proveboks'><span className='proveikon'><MdOutlineBloodtype /></span><h3>GLUKOSE, MIDDEL (FRA HBA1C);P <br /> <span className='provedato'>14 marts 2023</span></h3></div>,
        svar: <div><p>Bestilt af Læge O. Hansen</p> <br /> <p>Prøve taget 14 marts 2023</p> <br /> <p>Prøvesvar 14 marts 2023</p> <br /> <br /> <p className='provevaerdi'>Værdi: 8,9</p> <br /> <p>Normalområde: {'<'}7,7 mmol/L </p> </div>
    },
    {
        overskrift: <div className='proveboks'><span className='proveikon'><MdOutlineBloodtype /></span><h3>HÆMOBLOBIN A1C (IFCC);HB(B) <br /> <span className='provedato'>21 november 2022</span></h3></div>,
        svar: <div><p>Bestilt af Læge O. Hansen</p> <br /> <p>Prøve taget 21 november 2022</p> <br /> <p>Prøvesvar 21 november 2022</p> <br /> <br /> <p className='provevaerdi'>Værdi: 56</p> <br /> <p>Normalområde: {'<'}48 mmol/mol </p> </div>
    },
    {
        overskrift: <div className='proveboks'><span className='proveikon'><MdOutlineBloodtype /></span><h3>GLUKOSE, MIDDEL (FRA HBA1C);P <br /> <span className='provedato'>21 november 2022</span></h3></div>,
        svar: <div><p>Bestilt af Læge O. Hansen</p> <br /> <p>Prøve taget 21 november 2022</p> <br /> <p>Prøvesvar 21 november 2022</p> <br /> <br /> <p className='provevaerdi'>Værdi: 7,2</p> <br /> <p>Normalområde: {'<'}7,7 mmol/L </p> </div>
    },
];


export default function Provesvar (){
    return(
        <div className='provesvar'>
            <h2>Prøvesvar</h2>
            <p>Her kan du se og få overblik over alle dine prøvesvar, som du har fået taget hos Steno eller i anledning af dit Steno forløb.</p>
          
            <Accordion className='accordion'>
                {blodprovesvar.map(({ overskrift, svar }, i) => (
                    <AccordionItem className="proveindhold" header={overskrift} key={i} >
                        {svar}
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}