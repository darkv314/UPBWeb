import './nav.css'
import ReactLogo from '../../assets/react'

export default function Nav(){
    return (
        <nav>
            <div className='nav-logo'>
                <a href=""><ReactLogo /></a>
            </div>
            <div className='nav-links'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href=''>Contactos</a></li>
                    <li><a href='/UPBMatch'>UPBMatch</a></li>
                    <li><a href=''>Pasantías</a></li>
                </ul>
            </div>
        </nav>
    )
}