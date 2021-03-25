import React, {useState} from 'react';

const Country = () => {
    const [country, setCountry] = useState('한국');
    const [color, setColor]=useState('black');
    const goKorea = () => setCountry('한국');
    const goAmerica = () =>  setCountry('미국');
    const goChina = () => setCountry('중국');
    const setBlack = () => setColor('black');
    const setRed = () =>  setColor('red');
    const setBlue = () => setColor('blue');

    return(
        <div>
            <button onClick={goKorea}>한국</button>
            <button onClick={goAmerica}>미국</button>
            <button onClick={goChina}>중국</button>
            <h1 style={{color}}>{country}에 오신 것을 환영합니다. </h1>
            <button onClick={setBlack}>검정색</button>
            <button onClick={setRed}>빨간색</button>
            <button onClick={setBlue}>파란색</button>
        </div>
    )
}

export default Country;