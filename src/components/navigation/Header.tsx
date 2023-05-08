import React from 'react';

import logo from '../../assets/logo.svg';
import { Text } from '../atoms';
import '../../styles/App.css';


export function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="Revolt Theme Tools' logo" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Text type={"h1"}>Revolt Theme Tools</Text>
                <Text type={"subtitle"}>a <a href="https://github.com/rexovolt" target="_blank" rel="noreferrer">Rexovolt</a> project</Text>
            </div>
            <div className="alpha-notice"><Text type={"h3"}>ALPHA</Text></div>
        </header>
    )
};
