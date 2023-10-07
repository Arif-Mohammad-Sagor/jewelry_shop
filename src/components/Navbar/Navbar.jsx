import React, { useContext } from 'react';
import './navbar.moudle.css';
import { userContext } from '../providers/ContextProvider';

const Navbar = () => {
  const user = useContext(userContext);
  console.log(user);
  return (
    <div className=''>Navbar</div>
  )
}

export default Navbar