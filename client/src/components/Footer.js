import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {mobile} from "../responsive"

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column"})}
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
margin: 20px 0px;
`

const SocialContainer = styled.div`
display: flex;
`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color:white;
background-color: ${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`


const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none"})}
`
const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex: 1;
padding: 20px;

`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width: 50%;
`
function Footer() {
  return (
    <>
    <Container>
        <Left>
            <Logo>CRIMSON JEWLERY</Logo>
            <Desc>
                aba best jewlery bets dal,dmkak with grat dealsd d jdjka sjdasjkhjasjajs  asdn ajsdassj djasn d ajsdj ns 
            </Desc>
            <SocialContainer>
                <SocialIcon color="#3b5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="#e4405f">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="#55acee">
                    <TwitterIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>USEFUL LINKS</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Necklaces</ListItem>
                <ListItem>Rings</ListItem>
                <ListItem>Bracelets</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                
            </List>
        </Center>
        <Right>
            <Title>CONTACT</Title>
            <ContactItem>
               <LocationOnIcon style={{marginRight:"10px"}}/> 1702 Bint Jbeil , South Lebanon
            </ContactItem>
               <ContactItem>
              <LocalPhoneIcon style={{marginRight:"10px"}}/> +961 81 670 544
            </ContactItem>
               <ContactItem>
               <AlternateEmailIcon style={{marginRight:"10px"}}/> Crimson.jewelery@gmail.com
            </ContactItem>
            <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
    </>
  )
}

export default Footer