import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corDeFundo}) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                {/* <img src='https://github.com/paulohvieirajr.png' alt='Paulo Vieira' /> */}
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape">
                {/* <h4>Paulo Vieira</h4> */}
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador