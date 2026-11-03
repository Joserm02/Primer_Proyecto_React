function BotonGeneral({cambiarValor, nombre}){
    return(
        <button onClick={cambiarValor}> {nombre}</button>
        
    );
}

export default BotonGeneral