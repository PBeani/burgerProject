import React from 'react'
import Aux from '../../hoc/Auxiliar'
import classes from './Layout.css'

const Layout = (props) => (
    <Aux>
        <div>Toolbar, sidedrower, backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout