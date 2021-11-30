import Row from './Row'
import { useGlobalContext } from '../context' 
import { demo } from '../demo'

const BeatMachine = () => {

    const { sounds } = useGlobalContext()
    
    const colors = [
        '#0DC75B', 
        '#FF054A', 
        '#FF7317', 
        '#F5B916', 
        '#1ACBF7', 
        '#8056F5', 
        '#FF74B6', 
        '#C6194D' 
    ]

    return (
        <section className='beat-machine'>
            {sounds.map((sound, index) => {
                return <Row key={index} color={colors[index]} sound={sound} demoRow={demo[index]} />
            })}
        </section>
    )
}

export default BeatMachine