import React from 'react'
import { Container } from 'semantic-ui-react'
import Header from '../../components/headers/Header';


export default function BasicLayout(props) {

    return (
        <Container fluid className="layout__basic">
            <Header />
            <Container className="layout__content">
                {props.children}        
            </Container>
        </Container>
    )
}
