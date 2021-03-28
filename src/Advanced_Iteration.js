import React, {useState} from 'react';

const Advanced_Iteration = () => {
    const [weather, setWeather] = useState([
        { id: 1, text: '우박'},
        { id: 2, text: '안개'},
        { id: 3, text: '화창'},
        { id: 4, text: '바람'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = (e) => {
        setInputText(e.target.value);
    }
    
    const onClickAdd = () => {
        const nextWeather = weather.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setWeather(nextWeather);
        setInputText('');
    }

    const onClickRemove = (id) => {
        const nextWeather = weather.filter(today => today.id !== id);
        setWeather(nextWeather);
    }

    const weatherList = weather.map(today => <li key={today.id}>{today.text}<button onClick={() => {onClickRemove(today.id)}}>제거</button></li>)

    return(
        <>
            <input value = {inputText} onChange={onChange}/>
            <button onClick={onClickAdd}>추가</button>
            <ul>{weatherList}</ul>
        </>
    );
}

export default Advanced_Iteration;