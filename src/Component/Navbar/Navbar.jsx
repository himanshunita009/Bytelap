import './Navbar.css';
import Dropdown from '../Dropdown/Dropdown';
import { useState } from 'react';
const Navbar = () => {
    const optionList = [
        'Option 1',
        'Option 2',
        'Option 3'
    ]
    const [menuState,setMenuState] = useState(false);
    
    return ( 
        <div className="navbar-back">
            <div className="mobile">
                {!menuState && <span className='material-icons' onClick={() => setMenuState(!menuState)} >menu</span>}
                {menuState && <div className="navbar">
                    <span className='material-icons'  onClick={() => setMenuState(!menuState)}>close</span>
                    <span className="font-text">Home</span>
                    <Dropdown optionList={optionList} />
                    <span className="font-text">Logout</span>
                </div>}
            </div>
            <div className="desktop">
                <div className="navbar">
                    <span className="font-text">Home</span>
                    <Dropdown optionList={optionList} />
                    <span className="font-text">Logout</span>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;