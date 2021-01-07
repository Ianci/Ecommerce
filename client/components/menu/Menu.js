import React, { useEffect , useState } from 'react'
import { Container, Menu, Grid, Icon, Label } from 'semantic-ui-react'
import Link from 'next/link'
import BasicModal from '../modal/BasicModal'
import Auth from '../auth/Auth'
import useAuth from '../../hooks/useAuth'
import { Input, Button  } from 'semantic-ui-react'
import { getMeApi} from  '../../api/user'

export default function MenuWeb() {
    const [platforms, setPlatforms] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal ] = useState('Iniciar sesion')
    const [ user, setUser ] = useState(undefined)
    const onShowModal = () => setShowModal(true);
    const onCloseModal = () => setShowModal(false);
    //Context
    const { logout, auth } = useAuth()


    useEffect(() => {
        (async () => {
          const response = await getMeApi(logout);
          console.log(response)
          setUser(response);
        })();
      }, [auth]);
    return (
        <div className="menu">
            <Container>
                <Grid>
                    <Grid.Column className="menu__left" width={6}>
                        <MenuPlataforms />

                    </Grid.Column>
                    <Grid.Column className="menu__right" width={9}>
                        {user !== undefined && <MenuUser onShowModal={onShowModal} user={user} logout={logout} /> }
                      

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


function MenuUser({onShowModal, user, logout}){
    return (
            <Menu>
            {user ? (
                <>
                <Link href="/orders "> 
                    <Menu.Item as="a">
                    <Icon name="game" />
                    Mis pedidos
                    </Menu.Item> 
                </Link>

                <Link href="/favoritos "> 
                    <Menu.Item as="a">
                    <Icon name="heart" />
                    Favoritos
                    </Menu.Item> 
                </Link>

                <Link href="/account "> 
                    <Menu.Item as="a">
                    <Icon name="user" />
                    Cuenta
                    </Menu.Item> 
                </Link>

                <Link href="/cart "> 
                    <Menu.Item as="a" >
                    <Icon name="cart" />
                  
                    </Menu.Item> 
                </Link>

                  <Menu.Item onClick={logout} >
                  <Icon name="user outline" />
                  Cerrar sesion
                  </Menu.Item>
                  </>
            ): (
                
                <Menu.Item onClick={onShowModal} >
                <Icon name="user outline" />
                Mi cuenta
                </Menu.Item>
                
            )}
           
            </Menu>
    )
}
