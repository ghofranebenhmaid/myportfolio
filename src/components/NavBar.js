import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import styles from '../styles/NavBar.module.scss';
import DarkLigthTheme from './DarkLigthTheme';
import NavLink from './ActiveLink';

const NavBar = ({ activeClassName, children, router, ...props }) =>
{

  const [open, setOpen] = useState(false);

  const handleToggle = () =>
  {
    setOpen(!open);
  };
  return (
    <nav className={ `${ styles.nav } container` }>
      <div className={ styles.nav__logo }>
        <NavLink href='/'>

          {/* <Link href='/'> */ }
          <span className={ styles.logo }>GHOFRANE.</span>
          {/* </Link> */ }
        </NavLink>

      </div>
      <div
        className={
          !open
            ? `${ styles.menu } hide-for-desktop`
            : `${ styles.menu } ${ styles.isopen } hide-for-desktop `
        }
        onClick={ handleToggle }>
        {/* { !open ? 'Menu ' : 'Close ' } */ }
        <span />
        <span />
      </div>
      <div
        className={
          !open
            ? `${ styles.list } hide-for-desktop`
            : `${ styles.list } ${ styles.isopen } hide-for-desktop `
        }>
        <ul className={ styles.list__ul }>

          <li className={ open ? styles.slideUp : ' ' } onClick={ handleToggle }>
            <NavLink href='/' activeClassName="active" >
              <a >About Me</a>
            </NavLink>
          </li>
          <li className={ open ? styles.slideUp : '' } onClick={ handleToggle }>
            <NavLink href='/projects'>
              <a>Projects</a>
            </NavLink>
          </li>
          {/* <li className={ open ? `${ styles.slideUp }` : `''` }>
            <Link href='/#ctc'>
              <a>Contact</a>
            </Link>
          </li> */}
          <li className={ open ? styles.slideUp : '' }>
            <DarkLigthTheme />
          </li>
        </ul>
      </div>
      {/* <div className={ styles.nav__logo }>
        <Link href='/'>
          <h1>.GHOFRANE.</h1>
        </Link>

      </div> */}

      <ul className='flex hide-for-mobile'>
        <li>
          <NavLink href="/" activeClassName="activeLink">
            <a >Home</a>
          </NavLink>
        </li>
        {/* <li>
          <NavLink href='/#about' activeClassName="activeLink">
            <a >About</a>
          </NavLink>

        </li> */}
        <li>
          <NavLink href='/projects' activeClassName="activeLink">
            <a>Projects</a>
          </NavLink>
        </li>
        {/* <li>
          <NavLink href='/#contact' activeClassName="activeLink">
            <a>Contact</a>
          </NavLink>
        </li> */}
      </ul>
      <div className='hide-for-mobile'>
        <DarkLigthTheme />
      </div>
    </nav>
  );
};

export default NavBar;
