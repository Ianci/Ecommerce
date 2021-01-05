import React from 'react';
import { Container, Grid, Image, Input } from 'semantic-ui-react';
import Link from 'next/link'

export default function Topbar() {
    return (
        <div className="topbar">
           <Container>
               <Grid className="topbar">
                   <Grid.Column width={8} className="topbar__left">
                       <Logo />
                   </Grid.Column>
                   <Grid.Column width={8} className="topbar__right">
                        <Search />
                   </Grid.Column>
               </Grid>
           </Container>    
        </div>
    )
}

function Logo(){
    return (
        <Link href="/">
            <a>
            <Image src="/logo.png" alt="logo" />
            </a>
        </Link>
    )
}

function Search(){
    return (
        <Input 
        id="search-game"
        icon={{ name: "search "}}
        />
    )
}