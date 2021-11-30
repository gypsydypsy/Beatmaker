import { useState, useEffect } from "react"
import { useGlobalContext } from "../context";

const Square = ({position, sound, color, isMuted, demoSquare}) => {
    const [isSelected, setIsSelected] = useState(false);
    const [bgColor, setBgColor] = useState();
    const [opacity, setOpacity] = useState(1);
    const { currentStep, reset, bpm } = useGlobalContext();

    const normalColor = '#29292B';
    const playingColor = '#414143';
    const mutedColor = '#121214';
    const selectedColor = color;
    const normalOpacity = 1;
    const playingOpacity = 0.5;

    useEffect( () => {
        if (currentStep === position) {
            if(isMuted) return;

            if (isSelected){    
                setOpacity(playingOpacity)
                const audio = new Audio(`../samples/${sound.file}`)
                audio.preload = 'auto';    
                audio.currentTime = 0;
                audio.play()
            } 
            else {
                setBgColor(playingColor)
            }
        }
        else {
            isMuted ? setBgColor(mutedColor) : 
                isSelected ? setBgColor(selectedColor) 
                    : setBgColor(normalColor)
            setOpacity(normalOpacity)
        }
    
    }, [currentStep, selectedColor, position, isSelected, sound.file, bpm, sound.bpm, isMuted])
    
    useEffect( () => {
        if(reset){
            setIsSelected(false)
        }
    }, [reset])

    useEffect( ()=> {
        if(demoSquare){
            setIsSelected(true)
        }
    }, [demoSquare])

    return (
        <div 
            className='square' 
            onClick={() => setIsSelected(!isSelected)}
            style={{ 
                backgroundColor : `${bgColor}`,
                opacity : `${opacity}`
            }}     
        />
    )
}

export default Square