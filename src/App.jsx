import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Wrapper, DivItens, Input, Button, ListItens } from './styles.js'
import { FaTrash, FaRocket } from "react-icons/fa";

function App() {

  const [list, setList] = useState([{ id: uuidv4(), task: "Estudar programação", finished: true}])
  const [inputTask, setinputTask] = useState('')




  function inputMudou(event) {

    setinputTask(event.target.value)


  }


  function buttonClicado() {

    setList([...list, { id: uuidv4(), task: inputTask, finished: false}])

  }


  function finalizeTask(id){

    const newList = list.map( item => ( item.id === id ? { ...item, finished: !item.finished} : item ))

    setList(newList)
    
  }



  return (

    <Wrapper>

      <DivItens>

        <Input onChange={inputMudou} placeholder="O que tenho que fazer..." />
        <Button onClick={buttonClicado}>Adicionar</Button>

        <ul>

          {

            list.map(item => (
              <ListItens key={item.id} $isFinished= { item.finished }>
                <FaRocket onClick={ ()=> finalizeTask(item.id)} />
                <li> {item.task} </li> 
                <FaTrash />
              </ListItens>
            )
            )

          }

        </ul>

      </DivItens>

    </Wrapper>

  )
}

export default App
