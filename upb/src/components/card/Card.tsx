import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img4.jpg'
import CardProp from '../../interfaces/CardProp'
import './card.css'

export default function Card(props: CardProp) {
    return (
        <div className='card-home'>
            <div className='img-container'>
                <img src={`images/img${props.img}.jpg`}/>
            </div>
            <div className='content'>
                <h3>{props.title}</h3>
                <div className='description'>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}