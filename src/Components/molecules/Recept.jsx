import './CSS/Recept.css';

let dinerecepter = [
    {
        medicin: <div className='medicin'>Novorapid Flexpen</div>,
        styrke: <div className='styrke'>100 enheder/ml</div>,
        udlevering: <div className='udlevering'>7</div>,
        gyldig: <div className='gyldig'>11-08-2024</div>
    },
    {
        medicin: <div className='medicin'>Tresiba 100 Flextouch</div>,
        styrke: <div className='styrke'>100 enheder/ml</div>,
        udlevering: <div className='udlevering'>3</div>,
        gyldig: <div className='gyldig'>11-08-2024</div>
    },
]

export default function Recept (){
    return(
        <div className='recept'>
            <h2>Dine recepter</h2>
            <p className='receptinfo'>Her kan du se dine recepter, som du har fået i løbet af din behandling på Steno, eller af en behandler fra Steno.</p>
            {dinerecepter.map(({ medicin, styrke, udlevering, gyldig }, i) => (
                <div className='dinerecepter'>
                     <div className='receptindhold' medicin={medicin} styrke={styrke} udlevering={udlevering} gyldig={gyldig} key={i} >
                        <p>Lægemiddel {medicin}
                        <br />
                        Styrke {styrke}
                        <br />
                        Gyldig til{gyldig}</p>
                    </div>
                    <div className='tilbage'>
                        Udleveringer {udlevering} tilbage
                    </div>
                </div>
            ))}
            
        </div>
    )
}