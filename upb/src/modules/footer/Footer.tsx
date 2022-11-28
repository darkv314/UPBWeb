import './footer.css'
import Facebook from '../../assets/facebook'
import Instagram from '../../assets/instagram'
import Twitter from '../../assets/twitter'
import ReactLogo from '../../assets/react'

export default function Footer(){
    return (
        <footer>
            <div className='icons'>
                <a href=""><Facebook /></a>
                <a href=""><Twitter /></a>
                <a href=""><Instagram /></a>
            </div>
            <div className='footer-links'>
                <ul>
                    <li><a href="">Contactanos</a></li>
                    <li><a href="">Sobre Nosotros</a></li>
                </ul>
            </div>
            <div className='footer-logo'>
                <ReactLogo />
            </div>
        </footer>
    )
}