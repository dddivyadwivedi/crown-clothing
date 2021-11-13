import React from 'react';
import './header.styles.scss';
import { Link} from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/4.4 crown.svg';
import { auth } from '../../firebase/firebase.utils';
const Header = (user)=>(
    <div className="header">
        <Link className="logo-container"  to='/'>
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                SHOP PAGE
            </Link>
            <Link className="option" to='/contact'>
                CONTACT PAGE
            </Link>
            {
                user.currentUser ? <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div> : <Link className="option" to='/signin'>SIGN IN</Link>
            }
        </div>
    
    
    </div>
)

export default Header;