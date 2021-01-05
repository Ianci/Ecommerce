import React from 'react'
import { Container, Menu, Grid, Icon, Label } from 'semantic-ui-react'
import Link from 'next/link'
export default function MenuWeb() {
    return (
        <div className="menu">
            <Container>
                <Grid>
                    <Grid.Column className="menu__left" width={6}>
                        <MenuPlataforms />

                    </Grid.Column>
                    <Grid.Column className="menu__right" width={9}>
                        <MenuUser />

                    </Grid.Column>
                </Grid>
            </Container>
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


function MenuUser(){
    return (
        <Menu.Item>
            <Icon name="user outline" />
            Mi cuenta
        </Menu.Item>
    )
}