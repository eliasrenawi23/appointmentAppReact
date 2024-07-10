import styled from 'styled-components';

// Navbar styles
export const Nav = styled.nav`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem; /* Adjust height as needed */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0  2rem  0 1rem;
  box-sizing: border-box; 

  @media (min-width: 1536px) {
    padding: 0  4rem  0 4rem;


  }
`;

export const LogoImage = styled.img`
  cursor: pointer;
  border-radius: 50%;
  
`;

export const BigscreenFlexUl = styled.ul`
  display: none;
  
  @media (min-width: 640px) { /* This corresponds to the 'sm' breakpoint */
    display: flex;
  }
`;

export const BigScreenStyledLi = styled.li<{ active: boolean }>`
  list-style: none;
  text-decoration: none;
  padding-left: 1rem;
  width: auto;
  text-transform: uppercase;
  //border: ${({ active }) => (active ? '2px solid black' : '1px solid transparent')};
  background: ${({ active }) =>
    active
      ? 'linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))' // Change the color and transparency as needed
      : 'none'};

  /* Conditional border-bottom */
  cursor: pointer;
  font-size: 1.25rem; /* Equivalent to text-xl */
  border-bottom: 1px solid transparent; /* Add hover effect */
  padding-right: 1rem;
  
  &:hover {
    border-color: #000; /* Change the border color on hover */
  } 

`;

export const SideMenuContainer = styled.div<{ menuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ menuOpen }) => (menuOpen ? '0' : '-100%')};  padding: 10px;
  width: 65%;
  transition: left 0.3s ease-in-out;
  background-color: #ecf0f3;
  height: 100vh;
  padding: 2.5rem;
  overflow-y: auto;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-duration: 500ms;

  @media (min-width: 640px) { //on big screen dont show
  display: none;
  }
`;

export const XbuttonContainer = styled.div`

display: flex;
width: 100%;

align-items: center;
justify-content: end;
  
`;

export const Xbutton = styled.div`
cursor: pointer;
padding-left: 6rem

`;
export const ListContainer = styled.div`
display: flex;
text-align: start;
flex-direction: column;

padding-top: 1rem/* 16px */;
  padding-bottom: 1rem/* 16px */;

`;

export const Listontent = styled.li`
list-style-type: none;
padding-top: 1rem/* 16px */;
padding-bottom: 1rem/* 16px */;
cursor: pointer;
&:hover {
    border-bottom: 1px solid; /* hover:border-b adds a border at the bottom on hover */
  }

`;
export const BottomOfsideBar = styled.li`
display: flex;
flex-direction: row;
justify-content: space-around;
padding-top: 2.5rem;
padding-bottom: 2.5rem;
align-items: center;

`;


export const MenuIcon = styled.div`
  cursor: pointer;
  padding-left: 24px;

  @media (min-width: 640px) {
    display: none;
  }
`;