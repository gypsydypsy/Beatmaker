import React, { useContext, useState, useEffect } from 'react'
import { soundData } from './soundData';
const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [sounds, setSounds] = useState(soundData.techno)
    const [steps, setSteps] = useState(16);
    const [bpm, setBpm] = useState(130) 
    const [reset, setReset ] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentStep, setCurrentStep] = useState(0)


    useEffect ( () => {
        let interval = null;

        if(isPlaying){
            interval = setInterval( () => {
                setCurrentStep(currentStep => currentStep + 1)
            },  60000/(bpm*4))
        }
        else {
            clearInterval(interval)
            setCurrentStep(0)
        }

        return () => clearInterval(interval)

    }, [isPlaying, bpm])

    useEffect ( () => {
        if(currentStep > steps){
            setCurrentStep(1)
        }
    }, [currentStep, steps])

    return (
        <AppContext.Provider
            value={{
                sounds,
                setSounds,
                isPlaying,
                setIsPlaying,
                steps,
                setSteps,
                bpm,
                setBpm, 
                currentStep, 
                reset, 
                setReset
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }