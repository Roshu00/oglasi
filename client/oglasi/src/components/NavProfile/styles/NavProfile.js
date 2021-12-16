import styled from "styled-components/macro";
import {Link} from 'react-router-dom';

export const UserItem = styled.div`
    position: relative;
    display: inline-block;
`

export const UserImage = styled.image`
    width: 20px;
    height: 20px;
`

export const UserUsername = styled.p`
    text-decoration: none;
    display: inline-block;
    user-select: none;
    font-weight: bold;
    color: #fff;
    padding: 4px 10px;
    margin: 0 10px;
    cursor: pointer;
`

export const NavItem = styled(Link)`
    text-decoration: none;
    display: inline-block;
    user-select: none;
    font-weight: bold;
    color: #fff;
    padding: 4px 10px;
    margin: 0 10px;
    text-transform: uppercase;
`