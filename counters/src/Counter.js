import {useEffect, useState} from "react";

export default function Counter({name, color, size}) {

    const [clicks, setClicks] = useState(undefined);

    useEffect(()=>{
        try {
            let stored_counter = Number(localStorage.getItem(name));
            setClicks(stored_counter);
        } catch (e) {
            setClicks(0);
        }
    }, []);

    useEffect(() => {
        if (clicks !== undefined) {
            localStorage.setItem(name, JSON.stringify(clicks));
        }
    }, [clicks]);

    function handleClick() {
        setClicks(clicks + 1);
    }

    return (
        <div style={{backgroundColor: color}  }>

            <p>
                {name} <span style={{fontSize: size}  }>{clicks}</span>
            </p>

            <button onClick={ handleClick }>Increase</button>

        </div>
    );
}