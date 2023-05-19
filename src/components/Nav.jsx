import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
    position:absolute;
    top:0;
    left: 0;
    width: 100%;
    padding: 30px 100px;
    display:flex;
    justify-content:space-between;
    z-index:20;
`
const Logo = styled.a`
    color:snow;
    font-weight:bold;
    text-decoration:none;
    font-size:2em;
    text-transform:uppercase;
    letter-spacing:2px;
`

const List = styled.ul`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:20px;
`
const ListItem = styled.li`
    list-style:none;
`
const Item=styled.a`
    text-decoration:none;
    padding: 6px 15px;
    color:snow;
    font-weight:bold;
    border-radius:20px;
    transition:300ms;

    &:hover{
        background:#fff;
        color:#2b1055;
    }
`

const Nav = () => {
  return (
    <Container>

        <Logo href='#'>Logo</Logo>

        <List>
            <ListItem><Item href='#'>Home</Item></ListItem>
            <ListItem><Item href='#'>About</Item></ListItem>
            <ListItem><Item href='#'>Web</Item></ListItem>
            <ListItem><Item href='#'>Content</Item></ListItem>
        </List>
    </Container>
  )
}

export default Nav