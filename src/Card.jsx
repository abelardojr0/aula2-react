function Card({nome, imagem, data}){
    return(
        <div style={{border: "1px solid black"}}>
            <h3>{nome}</h3>
            <img style={{maxWidth: "300px"}} src={imagem}/>
            <p>{data}</p>
        </div>
    )
}

export default Card