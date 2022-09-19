import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #5F021F ;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

function Announcement() {
  return (
    <>
    <Container>
        Free shiping for deals over 100$
    </Container>

    </>
  )
}

export default Announcement
