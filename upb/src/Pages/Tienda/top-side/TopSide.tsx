import './top.css'
import background from '../../../assets/homeback.jpg'

export default function TopSide(){
    return (
        <div className='top-side'>
            <h1>
                Visita nuestra tienda!
            </h1>
            <img src={background}/>
        </div>
    )
}