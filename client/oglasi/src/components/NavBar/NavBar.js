import React from 'react';
import { Container, ListGroup, NavItem, ProfileGroup } from './style/NavBar'

function NavBar () {
    return (
        <></>
    )
};

NavBar.Container = function NavBarContainer ({ children, ...restProps }) {
    return <Container {...restProps}>{ children }</Container>
}

NavBar.ListGroup = function NavBarListGroup ({ children, ...restProps }) {
    return <ListGroup {...restProps}>{ children }</ListGroup>
}

NavBar.NavItem = function NavBarNavItem ({ children, ...restProps }) {
    return <NavItem {...restProps}>{ children }</NavItem>
}

NavBar.ProfileGroup = function NavBarProfileGroup ({ children, ...restProps }) {
    return <ProfileGroup {...restProps}>{ children }</ProfileGroup>
}



export default NavBar;