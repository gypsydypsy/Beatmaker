import Square from "./Square"
import { useState } from 'react'
import { useGlobalContext } from '../context';
import { FaCircle, FaRegCircle } from "react-icons/fa";

const Row = ({sound, color, demoRow}) => {
    const [isMuted, setIsMuted] = useState(false)

    const { steps } = useGlobalContext()
    let squaresArray = Array(steps).fill('');

    const playPreview = () => {
        const audio = new Audio(`../samples/${sound.file}`)
        audio.play()
    }

    return (
        <div className='row'>
            <div 
                className='sound-control' 
                onMouseEnter= { (e) => e.currentTarget.style.backgroundColor=color }
                onMouseLeave= { (e) => e.currentTarget.style.backgroundColor='#29292B'}
            >
                <div className='sound-info' onClick={playPreview} >
                    <img src={`../icons/${sound.image}`} alt='snare' />
                    <span>{sound.name}</span>
                </div>
                <button className='mute-btn'onClick={() => setIsMuted(!isMuted)}>
                   {isMuted ? <FaRegCircle/> : <FaCircle/> }
                </button>
            </div>
            <div className='grid' >
                { squaresArray.map( (square, index)  => {
                    return <Square key={index} position={index + 1} sound={sound} color={color} isMuted={isMuted} demoSquare={demoRow[index]}/>
                })}
            </div>
        </div>
    )
}

export default Row