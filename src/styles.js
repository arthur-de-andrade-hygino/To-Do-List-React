
import styled from "styled-components"
import { FaTrash, FaRocket } from "react-icons/fa";

export const Wrapper = styled.div`

    background: linear-gradient(90deg, #383838, 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;


`

export const DivItens = styled.div`

    background-color: #ffffffff;
    padding: 30px 20px;
    border-radius: 5px;
    filter: drop-shadow(0px 4px 10px rgba(255, 255, 255, 0.3));


`




export const Input = styled.input`

outline: none;
padding-left: 20px;
width: 342px;
height: 40px;
border-radius: 5px;
border: solid 2px #EDEDEE;
margin-right: 30px;
margin-bottom: 60px;

&::placeholder{

color: #000000;

}

`

export const Button = styled.button`

background-color: #8052ec;
border-radius: 5px;
font-weight: 900;
font-size: 17px;
line-height: 2px;
height: 40px;
border: none;
color: #ffffff;
padding: 10px 20px;
cursor: pointer;
transition: filter, transform 0.3s ease-out ;

&:hover{


 filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.3));
 transform: translateY(-2px);
 

}

&:active{

 filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.2));
 transform: translateY(2px);
 transition: filter, transform 0.1s ease-out ;


}



`

export const Trash = styled(FaTrash)`

cursor: pointer;
color: #FF0000;

`
export const Rocket = styled(FaRocket)`

cursor: pointer;
color: #4F0FC5;

`



export const ListItens = styled.div`

background: ${ props => props.$isFinished ? '#E8FF8B' : '#E4E4E4'};
box-shadow: 1px 4px 10px rgba(0,0,0,0.2);
border-radius: 5px;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 14px;
margin-bottom: 30px;
width: 500px;
transition: transform 0.3s ease;
border: 2px solid transparent;
transition: transform 0.3s ease, border-color 0.3s ease-out, box-shadow 0.3s ease;

&:has(${Trash}:hover){

border-color: #FF0000;
box-shadow: 2px 6px 10px rgba(148, 9, 9, 0.5);
transform: translateY(-3px);
}

&:hover{

transform: translateY(-2px);

}

&:has(${Rocket}:hover){

border-color: #E8FF8B;
box-shadow: 2px 6px 10px rgba(232, 255, 139, 0.9);
transform: translateY(-3px);

}



li{

list-style: none;


}

`
export const NoItems = styled.h3`

justify-self: center;
font-style: italic;
font-weight: 300;
font-size: 18px;

`





