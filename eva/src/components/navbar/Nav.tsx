import { NavItem, Navbar, Icon } from 'react-materialize';
import React from 'react'
import 'materialize-css';

export default function Nav() {
    return (
        <div>
            <Navbar
                alignLinks="right"
                brand={<a className="brand-logo" href="/">EVA</a>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    outDuration: 200,
                    preventScrolling: true
                }}
                search
                >
                <NavItem href="/">
                    Getting started
                </NavItem>
                <NavItem href="components.html">
                    Components
                </NavItem>
                </Navbar>
        </div>
    )
}
