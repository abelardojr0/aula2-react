import Card from "./Card"

function App() {

  const eventos = [
    {
      nome: "Evento de Futebol",
      data: "14/11/2023",
      img: "https://inteligenciafinanceira.com.br/wp-content/uploads/2021/12/IF-Futebol.png"
    },
    {
      nome: "Evento de Rock",
      data: "15/11/2023",
      img: "https://conteudo.solutudo.com.br/wp-content/uploads/2019/10/rock-nacional.jpg"
    },
    {
      nome: "Evento de Comédia",
      data: "16/11/2023",
      img: "https://img.freepik.com/vetores-premium/cena-de-teatro-de-show-de-comedia-stand-up-com-comediante-de-cortina-vermelha-e-microfone-aberto-para-ilustracao_2175-4366.jpg"
    },

  ]
  const grid = {
    display: "flex",
    gap: "20px"
  }

  return (
    <>
      <h2>Lista de Eventos</h2>
      <div style={grid}>
      {eventos.map((evento)=> (
        <Card nome={evento.nome} imagem={evento.img} data={evento.data}/>
      ))}
      </div>
    </>
  )
}
export default App
