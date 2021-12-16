import React from 'react'

//import styles
import { Container, TitleContainer, ButtonContainer, Title, Button } from './styles/HomeSection'
function HomeSection () {
    return (
        <Container>
            <TitleContainer>
                <Title>Dobrodosli na tehnopsesiju!</Title>
                <ButtonContainer>
                    <Button to='/search'>
                        <span>Pronadji Telefon</span>
                    </Button>
                    <Button to='/create/post'>
                        <span>Postavi Oglas</span>
                    </Button>
                </ButtonContainer>
            </TitleContainer>
        </Container>
    )
}

export default HomeSection