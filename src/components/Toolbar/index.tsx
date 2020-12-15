import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from 'reactstrap';
import logo from '../../../assets/CALogo.svg';
import closeBtn from '../../../assets/icons/close-white-24dp.svg';
import maxFBtn from '../../../assets/icons/close_fullscreen-white-24dp.svg';
import maxBtn from '../../../assets/icons/open_in_full-white-24dp.svg';
import minBtn from '../../../assets/icons/minimize-white-24dp.svg';

const { remote } = window.require('electron');

const Toolbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const minimize = () => {
    const win = remote.getCurrentWindow();
    win.minimize();
  };
  const maximize = () => {
    const win = remote.getCurrentWindow();
    if (!win.isMaximized()) {
      win.maximize();
      setMaximized(true);
    } else {
      win.unmaximize();
      setMaximized(false);
    }
  };
  const close = () => {
    const win = remote.getCurrentWindow();
    win.close();
  };
  return (
    <div>
      <Navbar className="topbar p-0 h-1 dragBox" dark color="sBlue">
        <Nav className="ml-auto flex-row" navbar>
          <NavItem>
            <NavLink href="#" onClick={minimize} className="noDrag mr-1 navSvg">
              <img src={minBtn} alt="close" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={maximize} className="noDrag mr-1 navSvg">
              <img src={maximized ? maxFBtn : maxBtn} alt="close" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={close} className="noDrag mr-1 navSvg">
              <img src={closeBtn} alt="close" />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Navbar color="light" light expand="md" className="mb-2">
        <Container>
          <NavbarBrand tag={Link} to="/">
            <img src={logo} alt="logo" className="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Counter
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Toolbar;
