import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Wrapper, DivItens, Input, Button, ListItens, Trash, Rocket, NoItems } from './styles.js'



function App() {

  const [list, setList] = useState([])
  const [inputTask, setinputTask] = useState('')





  function inputMudou(event) {

    setinputTask(event.target.value)


  }


  function buttonClicado() {
    

    if (inputTask) {
       
      setList([...list, { id: uuidv4(), task: inputTask, finished: false}])

    }
    else{

      // alert('Escreva uma tarefa no campo abaixo')
      
    }

   limparInput()

  }

  function limparInput(){

    setinputTask('')


  }



  function finalizeTask(id){

    const newList = list.map( item => ( item.id === id ? { ...item, finished: !item.finished} : item ))

    setList(newList)
    
  }

function DeleteTask(id){

  const newList = list.filter(item => item.id !== id)

  setList(newList)


}

function enterClicked(e){

if(e.key === 'Enter'){

buttonClicado()

}


}

  return (

    <Wrapper>

      <DivItens>

        <Input onKeyDown={enterClicked} value={inputTask} onChange={inputMudou} placeholder="O que tenho que fazer..." />
        <Button onClick={buttonClicado}>Adicionar</Button>

        <ul>

          {

            list.length > 0 ? (

            list.map(item => (
              <ListItens key={item.id} $isFinished= { item.finished }>
                <Rocket onClick={ ()=> finalizeTask(item.id)} />
                <li> {item.task} </li> 
                <Trash onClick={ ()=> DeleteTask(item.id)} />
              </ListItens>
            )
            )
            ) : ( <NoItems> Não há tarefas ainda . . . </NoItems> )

          }

        </ul>

      </DivItens>

    </Wrapper>

  )
}

export default App
