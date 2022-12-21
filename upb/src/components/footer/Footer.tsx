import './footer.css'
import Facebook from '../../assets/facebook'
import Instagram from '../../assets/instagram'
import Twitter from '../../assets/twitter'
import ReactLogo from '../../assets/react'
import { Link } from 'react-router-dom'

export default function Footer(){
    return (
        <footer>
            <div className='icons'>
                <a href="https://www.facebook.com/SEUPBLaPaz"><Facebook /></a>
                <a href=""><Twitter /></a>
                <a href="https://www.instagram.com/seupblapaz/"><Instagram /></a>
            </div>
            <div className='footer-links'>
                <ul>
                    <li><Link to="/Contactanos">Contactanos</Link></li>
                    <li><Link to="">Sobre Nosotros</Link></li>
                </ul>
            </div>
            <div className='footer-logo'>
                <Link to="/"><ReactLogo /></Link>
            </div>
        </footer>
    )
}