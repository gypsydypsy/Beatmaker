import { useGlobalContext } from "../context"

const BpmSlider = () => {

    const { bpm, setBpm } = useGlobalContext()

    return(
        <div className='bpm-slider'>   
            <label>BPM</label>
            <input 
                min='80' 
                max='200' 
                value={bpm}
                step='1' 
                type='number'
                onChange={(e) => setBpm(e.target.value)
                }
            />
        </div>
    )
}

export default BpmSlider