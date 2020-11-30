import React from 'react';
import {Logo, HeaderContainer} from './styles';

import Icone from '../../assets/rwcPitu.png';

function Header(props) {
    return (
        <>
            <HeaderContainer>
                <Logo src={Icone} alt='RWC Pitu - Encurtador de URL' />
                <h1>RWC Pitu</h1>
                <p>{props.children }</p>
            </HeaderContainer>
        </>
    )
}


export default Header;