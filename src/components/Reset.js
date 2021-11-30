import { useGlobalContext } from "../context"
import { FaSync } from "react-icons/fa"

const Reset = () => {

    const { setReset, setIsPlaying } = useGlobalContext()

    const Reset = () => {
        setReset(true);
        setIsPlaying(false)
    }

    return (
        <button className='btn' onClick={Reset}>
            <FaSync />
        </button>
    )
}

export default Reset 