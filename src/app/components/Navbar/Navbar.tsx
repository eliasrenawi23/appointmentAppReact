import React, { useState } from 'react';
import {
    AiOutlineMenu,
    AiOutlineClose,
    AiOutlineInstagram,
    AiOutlineFacebook,
    AiOutlineTikTok
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
    Nav,
    NavbarContent,
    LogoImage,
    BigscreenFlexUl,
    BigScreenStyledLi,
    SideMenuContainer,
    XbuttonContainer,
    Xbutton,
    ListContainer,
    Listontent,
    BottomOfsideBar,
    MenuIcon
} from './style';
import { Links, Routs } from './Routs';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<Routs>(Routs.Home);

    const handleLinkClick = (path: Routs) => {
        setActiveLink(path);
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Nav>
            <NavbarContent>
                <Link to="/">
                    <LogoImage src="/renawi_logo.png" alt="Logo" width="75" height="75" />
                </Link>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <BigscreenFlexUl>
                        {Links.map((link) => (
                            <Link
                                to={link.to}
                                key={link.to}
                                onClick={() => handleLinkClick(link.to)}
                                style={{ textDecoration: 'none', color: 'black' }}
                            >
                                <BigScreenStyledLi active={activeLink === link.to}>
                                    {link.label}
                                </BigScreenStyledLi>
                            </Link>
                        ))}
                    </BigscreenFlexUl>
                    <MenuIcon onClick={toggleMenu}>
                        <AiOutlineMenu size={25} />
                    </MenuIcon>
                </div>
            </NavbarContent>

            <SideMenuContainer menuOpen={menuOpen}>
                <XbuttonContainer>
                    <Xbutton onClick={toggleMenu}>
                        <AiOutlineClose size={25} />
                    </Xbutton>
                </XbuttonContainer>
                <ListContainer>
                    <ul>
                        {Links.map((link) => (
                            <Link
                                to={link.to}
                                key={link.to}
                                style={{ textDecoration: 'none' }}
                                onClick={() => handleLinkClick(link.to)}
                            >
                                <Listontent>{link.label}</Listontent>
                            </Link>
                        ))}
                    </ul>
                </ListContainer>
                <BottomOfsideBar>
                    <AiOutlineInstagram size={30} style={{ cursor: 'pointer' }} />
                    <AiOutlineFacebook size={30} style={{ cursor: 'pointer' }} />
                    <AiOutlineTikTok size={30} style={{ cursor: 'pointer' }} />
                </BottomOfsideBar>
                <Link to="/">
                    <LogoImage src="/renawi_logo.png" alt="Logo" width="75" height="75" />
                </Link>
            </SideMenuContainer>
        </Nav>
    );
};

export default Navbar;
