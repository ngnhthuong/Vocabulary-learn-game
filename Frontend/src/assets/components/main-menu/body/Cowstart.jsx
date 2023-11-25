import cowImg from '../../../../../public/cow.png';
import cow8Img from '../../../../../public/cow_8bits.png';
import cowStart from '../../../../../public/start.png';
export default function CowStart({onOpen}){
    return <ul onClick={onOpen} className={`cow-start flex--col`}>
        <li className="cow">
            <img src={cow8Img} alt="error Cow" />
        </li>
        <li className="start">
            <img src={cowStart} alt="error Start" />
        </li>
    </ul>
}