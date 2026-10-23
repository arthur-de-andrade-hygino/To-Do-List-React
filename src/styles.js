
import styled from "styled-components"

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

li{

list-style: none;


}

`


