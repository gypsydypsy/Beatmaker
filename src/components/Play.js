import { useGlobalContext } from "../context"
import {FaPlay, FaPause} from 'react-icons/fa'
const Play = () => {
    const { setIsPlaying, isPlaying, setReset } = useGlobalContext();
 
    const toggleIsPlaying = () => {
        setIsPlaying(!isPlaying);
        setReset(false);
    }

    return (
        <button className='btn' onClick={toggleIsPlaying}>
            {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
    )
}

export default Play