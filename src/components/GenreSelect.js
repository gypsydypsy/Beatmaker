import { soundData } from "../soundData";
import { useGlobalContext } from "../context";

const GenreSelect = () => {   

    const { setSounds } = useGlobalContext();

    return (
        <div className='genre-select'>
            <label>Genre</label>
            <select onChange={(e)=> setSounds(soundData[e.target.value])}>
                {Object.keys(soundData).map((genre) => {
                    return <option key={genre} value={genre}>
                                {genre}
                            </option>
                })}
            </select>
        </div>
    )
}

export default GenreSelect