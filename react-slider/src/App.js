import React, {useState, useEffect} from 'react';
import './App.css';
import 'h8k-components';

import Slides from './components/Slides';
const title = "Slideshow App";

const colorG = ['white', 'red'];

export const ColorContext = React.createContext();

function App({slides}) {
    const [selectedColor, setSelectedColor] = useState(0)
    const [color, setColor] = useState(colorG[selectedColor]);

    useEffect(() => {
      setColor(colorG[selectedColor])
    }, [selectedColor])
    

    return (
        <ColorContext.Provider value={{color, setColor, setSelectedColor}}>
            <Content slides={slides}/>
        </ColorContext.Provider>
    );
}


function Content({slides}) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="App">
                <Slides 
                 slides={slides} 
                 restart={() => setCount(0)} 
                 next={() => setCount(count + 1)}
                 previous={() => setCount(count - 1)}
                 currentSlide={count} />
            </div>
        </div>
    );
}

export default App;
