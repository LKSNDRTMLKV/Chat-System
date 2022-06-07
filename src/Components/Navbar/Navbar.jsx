import React, { useState, useContext, useEffect } from 'react';

//npm imports
import styled, { css } from 'styled-components';
import { Link, useLocation } from '@reach/router';

//consts imports
import { API } from '../../Consts/Api';

//context
import { GlobalContext } from '../../Context/GlobalContext';

//component imports
import { Heading14, Heading16 } from '../Text/Text';

//styled-components
const NavbarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 15px;
    background-color: ${props => props.theme.dark_gray2};
    border-bottom: 1px solid ${props => props.theme.text_gray};
    .logo{
        color: ${props => props.theme.yellow};
    }
    .mobile-menu{
        .navigation-links{
            width: 100%;
            height: 100vh;
            position: fixed;
            top: 0;
            right: ${props => props.mobileMenuActive ? "0%" : "-110%"};
            background-color: ${props => props.theme.dark_gray};
            transition: right 0.3s;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            h5{
                padding: ${props => props.mobileMenuActive ? "8px 15px" : "15px 0"};
            }
        }
    }
    .burger-menu{
        display: flex;
        flex-direction: column;
        span{
            width: 26px;
            border: 1px solid white;
            margin: 3px 0;
            border-radius: 2px;
        }
    }
    .burger-menu-x {
        width: 26px;
        height: 26px;
        margin: 8px 15px 0 0;
        display: flex;
        position: relative;

        span{
            width: 26px;
            border: 1px solid white;
            border-radius: 2px;
            position: absolute;
            top: 13px;
            left: 0px;
        }

        span:first-child{
            transform: rotate(45deg);
        }

        span: last-child{
            transform: rotate(315deg);
        }
    }
    @media (max-width: 768px){

    }
`

//component
const Navbar = (props) => {
    const { user } = useContext(GlobalContext)
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const location = useLocation();

    useEffect(() => {
        // localhost:3000/my-profile/b dali vo ova
        // se sodrzi bilo koj od elementite vo nizata od props.except
        // ako da, togas, vrati mi false
        props.except && setIsNavbarVisible(!props.except.some(exceptRoute => {
            return location.pathname.indexOf(exceptRoute) > -1
        }))
    }, [location.pathname])
    return (
        isNavbarVisible &&
        <NavbarWrapper mobileMenuActive={mobileMenuActive} className="navbar">
            <Link to={API.paths.homePage} className="navbar-logo">
                <Heading14 className="logo">The Network</Heading14>
            </Link>
            <div className="mobile-menu">
                <ul className="navigation-links">
                    <div className="burger-menu-x" onClick={() => setMobileMenuActive(false)}>
                        <span></span>
                        <span></span>
                    </div>
                    <li>
                        {/* za da ne ne odnese na slednava ruta, i kodot da ni padne: */}
                        {/* http://wwww.brainster.xyz/my-profile/Bojan%20%Stojkovski */}

                        {/* na objektot user vo nego property-to userName koe sto e string, napravi mu replace(dokolku imas prazno mesto, izbrisi go) */}
                        {/* i togas rutata ke mi bide vakva */}
                        {/* http://wwww.brainster.xyz/my-profile/bojanstojkovski */}
                        <Link onClick={() => setMobileMenuActive(false)} to={API.paths.myProfile.replace("{USER_NAME}", user.userName.replace(" ", "").toLowerCase())}>
                            <Heading16>
                                My Profile
                            </Heading16>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="burger-menu" onClick={() => setMobileMenuActive(true)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </NavbarWrapper>
    );
}

export default Navbar;