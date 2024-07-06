import { memo } from 'react';
import { Link } from 'react-router-dom';

import NavbarButton from './NavbarButton';

const Navbar = memo(() => (
  <nav className='navbar-inner no-select'>
    <div className='logo'>
      <Link to='/market'>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt='Crypto Exchange'
          draggable='false'
        />
      </Link>
    </div>
    <h3>Main Menu</h3>
    <ul>
      <li>
        <NavbarButton url='/dashboard' icon='dashboard' title='Deposit/Withdraw' />
      </li>
      <li>
        <NavbarButton url='/capital' icon='equalizer' title='Market' />
      </li>
    </ul>
    <h3>Others</h3>
    <ul>
      <li>
        <NavbarButton url='/members' icon='account_circle' title='Profile' />
      </li>
    </ul>
    <div className='copyright'>
      <strong>Crypto Exchange</strong>
      <p>2021 &copy; All rights reserved.</p>
    </div>
  </nav>
));

export default Navbar;
