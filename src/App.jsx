import { useState } from 'react'

import './App.css'
import { Ponto } from './components/ponto.style'

function App() {
  const [lista, setLista] = useState([])
  const [desfeito, setDesfeito] = useState([])
  const ultimoItem = {}
  

  const clicou = (event) => {
    const ponto = {
      x : event.clientX,
      y : event.clientY,
    }
    setLista([...lista, ponto])
    setDesfeito([])

  }
  
  const desfazer = (event) => {
    event.stopPropagation();

    if(lista.length === 0){
      return alert("Não existe mais pontos na tela")
    }


  const ultimoItem = lista[lista.length-1]
  setDesfeito((cop) => [...cop,ultimoItem])
  setLista((cop) => {
      const nlista = cop.slice(0,-1);
      return nlista
    })
///    console.log("lista de render",lista)
///    console.log("lista desfeito",desfeito)
  }

  const refazer = (event) => {
    console.log(desfeito)
    event.stopPropagation();
    if(desfeito.length === 0){
      return alert("vc não desfez nada")
    }

    const ultimoItem = desfeito[desfeito.length - 1]
    setDesfeito((cop) =>{ 
      const nlista = cop.slice(0,-1)
      return nlista
    })

    setLista([...lista, ultimoItem])
  
  }

  return (
    <div className="container"  onClick={clicou}>

    {lista.map((item) => {
    return <Ponto
            top={item.y+"px"} 
            left={item.x+"px"} 
            />
  
    })}
    
      <button style={{position:'absolute',textAlign:'center',width:80,height:40,top:5,left:5,padding:10}} onClick={desfazer}>
        desfazer
      </button>
      <button style={{position:'absolute',textAlign:'center',width:80,height:40,top:5,right:5,padding:10}} onClick={refazer}>
        refazer
      </button>
    </div>
  )
}

export default App
