import React, { useState } from 'react'
import { Container, Menu, Grid, Icon, Label } from 'semantic-ui-react'
import Link from 'next/link'
import BasicModal from '../modal/BasicModal'
import Auth from '../auth/Auth'
import useAuth from '../../hooks/useAuth'
import { Input, Button  } from 'semantic-ui-react'


export default function MenuWeb() {
    const [platforms, setPlatforms] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal ] = useState('Iniciar sesion')
    const onShowModal = () => setShowModal(true);
    const onCloseModal = () => setShowModal(false);
    //Context
    const { logout, auth } = useAuth()
    return (
        <div className="menu">
            <Container>
                <Grid>
                    <Grid.Column className="menu__left" width={6}>
                        <MenuPlataforms />

                    </Grid.Column>
                    <Grid.Column className="menu__right" width={9}>
                        {auth ? <Button onClick={logout}> Desconectarse</Button> : <MenuUser onShowModal={onShowModal}/> }

                    </Grid.Column>
                </Grid>
              
            </Container>
            <BasicModal
            show={showModal}
            setShow={setShowModal}
            title={titleModal}
            size="small"
            >
            <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal} />
            </BasicModal>
            </div>
    )
}


function MenuPlataforms(){
    return (
        <Menu>
            <Link href="/play">
                    <Menu.Item as="a">
                    PlayStation
                    </Menu.Item>
            </Link>
            <Link href="/switch">
                    <Menu.Item as="a">
                    Switch
                    </Menu.Item>
            </Link>
            <Link href="/xbox">
                    <Menu.Item as="a">
                    Xbox
                    </Menu.Item>
            </Link>
        </Menu>
    )
}


function MenuUser({onShowModal}){
    
    return (
        <Menu.Item onClick={onShowModal}>
            <Icon name="user outline" />
            Mi cuenta
        </Menu.Item>
    )
}
