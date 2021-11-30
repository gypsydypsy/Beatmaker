import Play from "./Play"
import BpmSlider from "./BpmSlider"
import GenreSelect from "./GenreSelect"
import Reset from "./Reset"
import logo from '../img/logo.png'

const Header = () => {

    return <div>
        <header>
            <div className='brand'>
                <img src={logo} alt='logo'/>
                <h1>Beatmaker</h1>
            </div>
            <div className='controls'>
                <Reset />
                <Play />
                <BpmSlider />
                <GenreSelect />
            </div>
        </header>
      
    </div>
}

export default Header