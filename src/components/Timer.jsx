import React, {useState, useRef, useEffect} from 'react'

const Timer = ({restart,currentPlayer}) => {

    const [blackTime,setBlackTime] = useState(300) 
    const [whiteTime,setWhiteTime] = useState(300) 

    const timer = useRef(null)

    useEffect(() => {
        startTime()
    }, [currentPlayer])

    function startTime() {
        if (timer.current) {
            clearInterval(timer.current)
        }

        const callback = currentPlayer?.color === "white" ? decrementWhiteTime : decrementBlackTime
        timer.current = setInterval(callback,1000)
    }

    function decrementBlackTime() {
        setBlackTime(prev => prev - 1)
    }

    function decrementWhiteTime() {
        setWhiteTime(prev => prev - 1)
    }

    function handleRestart() {
        setBlackTime(300)
        setWhiteTime(300)
        restart()
    }

    return (
        <div>
            <div>
                <button onClick={handleRestart}>Перезапустить игру</button>
            </div>
            <h2>Таймер для чёрни: {blackTime}</h2>
            <h2>Таймер для бели: {whiteTime}</h2>
        </div>
    )
}

export default Timer