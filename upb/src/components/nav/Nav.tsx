import './nav.css'
import ReactLogo from '../../assets/react'
import { Link } from 'react-router-dom'

export default function Nav(){
    return (
        <nav>
            <div className='nav-logo'>
                <Link to='/'><ReactLogo /></Link>
            </div>
            <div className='nav-links'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    {/* <li><Link to='/Contactanos'>Contactos</Link></li> */}
                    <li><Link to='/UPBMatch'>UPBMatch</Link></li>
                    <li><Link to='/Tienda'>Tienda</Link></li>
                </ul>
            </div>
        </nav>
    )
}