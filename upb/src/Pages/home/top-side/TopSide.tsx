import './top.css'
import background from '../../../assets/homeback.jpg'

export default function TopSide(){
    return (
        <div className='top-side'>
            <h1>
                We are better together
            </h1>
            <img src={background}/>
        </div>
    )
}