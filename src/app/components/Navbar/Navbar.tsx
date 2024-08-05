import React, { ReactNode, useMemo, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTikTok } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
    MenuIcon,
} from './style';
import { Links, Routs } from './Routs';
import { RootState } from '../../../store/store';
import { logout } from '../../../store/authSlice';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<Routs>(Routs.Home);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        navigate(Routs.Login);
        setActiveLink(Routs.Login);
        setMenuOpen(false);
    };

    const handleLinkClick = (path: Routs) => {
        // eslint-disable-next-line keyword-spacing
        if (path === Routs.LogOut && isAuthenticated) {
            handleLogout();
        } else {
            setActiveLink(path);
            setMenuOpen(false);
        }
    };

    const renderLink = (link: { to: Routs; label: string }, childElement: ReactNode) => (
        <Link
            to={link.to}
            key={link.to}
            onClick={() => handleLinkClick(link.to)}
            style={{ textDecoration: 'none', color: 'black' }}
        >
            {childElement}
        </Link>
    );
    const filteredLinks = useMemo(
        () =>
            Links.filter(
                (link) =>
                    !(link.to === Routs.Login && isAuthenticated) &&
                    !(link.to === Routs.LogOut && !isAuthenticated) &&
                    !(link.to === Routs.AdminScheduleManager && !isAuthenticated),
            ),
        [isAuthenticated],
    );

    return (
        <Nav>
            <NavbarContent>
                <Link to="/">
                    <LogoImage src="/renawi_logo.png" alt="Logo" width="75" height="75" />
                </Link>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <BigscreenFlexUl>
                        {filteredLinks.map((link) =>
                            renderLink(
                                link,
                                <BigScreenStyledLi active={activeLink === link.to}>{link.label}</BigScreenStyledLi>,
                            ),
                        )}
                    </BigscreenFlexUl>
                    <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
                        <AiOutlineMenu size={25} />
                    </MenuIcon>
                </div>
            </NavbarContent>

            <SideMenuContainer menuOpen={menuOpen}>
                <XbuttonContainer>
                    <Xbutton onClick={() => setMenuOpen(!menuOpen)}>
                        <AiOutlineClose size={25} />
                    </Xbutton>
                </XbuttonContainer>
                <ListContainer>
                    <ul>{filteredLinks.map((link) => renderLink(link, <Listontent>{link.label}</Listontent>))}</ul>
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
