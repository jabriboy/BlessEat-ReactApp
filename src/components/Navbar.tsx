import {Link} from 'react-router-dom'
import {ShoppingCart, ShoppingBagOpen, User, House, Envelope, Person} from 'phosphor-react'
import './navbar.css'

function Navbar(){
    return(
        <>
        <div className="navbar">
            <ul className='navlist'>
                <Link to={"/"}> <li><button>Loja <ShoppingBagOpen size={"1rem"}/></button></li> </Link>
                <Link to={"/cart"}> <li><button><ShoppingCart size={"1rem"}/></button></li> </Link>
                <Link to={"/login"}> <li><button><User size={"1rem"}/></button></li> </Link>
            </ul>
        </div>
        </>
    )
}

export default Navbar;