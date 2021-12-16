import React, { useState, useContext } from 'react';
import NavBar from '../NavBar/NavBar';
import Filter from '../Filter/Filter';
import UserContext from '../../Contexts/userContext';
import NavProfile from '../NavProfile/NavProfile';
import UserOptions from '../UserOptions/UserOptions';

function NavigationBar () {

    const [filterActive, setFilterActive] = useState(false);
    const [userOptionsActive, setUserOptionsActive] = useState(false);

    
    const UserData = useContext(UserContext)
    return (
        <>
        <NavBar.Container>
            <NavBar.ListGroup>
                <div>
                    <NavBar.NavItem to='/'>Home</NavBar.NavItem>
                    <NavBar.NavItem onClick={() => {setFilterActive(!filterActive); setUserOptionsActive(false)}}>Search</NavBar.NavItem>
                </div>
                <NavBar.ProfileGroup>
                    <NavProfile isUserLogedIn={UserData.isUserLogedIn} username={UserData.username} disableFilter={setFilterActive} active={userOptionsActive} setActive={setUserOptionsActive}></NavProfile>
                </NavBar.ProfileGroup>
            </NavBar.ListGroup>
        </NavBar.Container>
        <Filter active={filterActive}/>
        <UserOptions setActive={ setUserOptionsActive } active={userOptionsActive}/> 
        </>
    )
}

export default NavigationBar;