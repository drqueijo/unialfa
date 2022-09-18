import React, { useState } from "react";
import axios from "axios";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import Header from "./components/Header";

import banner from './imagens/banner.jpeg'
import card1 from './imagens/card1.jpg'
import card2 from './imagens/card2.jpg'
import card3 from './imagens/card3.jpg'
import card4 from './imagens/card4.jpg'

import './styles/global.css'

const requisicao = [
  {
    "id": 1,
    "titulo": 'Trem bala',
    "img": card1
  },
  {
    "id": 2,
    "titulo": 'Thor',
    "img": card2
  },
  {
    "id": 3,
    "titulo": 'Ooops',
    "img": card3
  },
  {
    "id": 4,
    "titulo": 'Top gun',
    "img": card4
  },
]

function App() {

  const [cards, setCards] = useState(requisicao)
  const [qualQuerNome,setQualQuerNome] = useState("New Filmes")
  

  function alterarNome() {
    setQualQuerNome('Cinema')
    axios.get('https://back-filmes.herokuapp.com/filmes').then((resposta) => { console.log(resposta.data)
    setCards(resposta.data)

    })
  }
  return (
    <>
    <Header />
    <button onClick={alterarNome}>alterarNome</button>
    <img width='100%' src={banner} />

    <h2>{qualQuerNome}</h2>

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}
    >
      {
        cards.map((element, index) => {
          return (
            <Card
              key={element.id}
              titulo={element.titulo}
              img={element.imagem}
            />
          )
        })
      }

    </div>

    <Footer nome="Fabio"/>

    </>
  )
}

export default App;