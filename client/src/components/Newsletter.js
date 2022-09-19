import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import {mobile} from "../responsive"

const Container = styled.div`
height: 60vh;
background-color: #b36666;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 70px;
margin: 20px;

`
const Desc = styled.div`
font-size: 24px;
font-size: 300;
margin-bottom: 20px;
${mobile({ textAlign: "center"})}
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({ width: "80%"})}
`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`
const Button = styled.button`
flex: 2;
border: none;
background-color: #5F021F;
color:white;
`


function Newsletter() {
  return (
    <>
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely based updates on our latest jewelery</Desc>
        <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
            <SendIcon/>
        </Button>
        
        </InputContainer>
    </Container>
    
    </>
  )
}

export default Newsletter