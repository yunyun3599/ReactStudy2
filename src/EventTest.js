import React, {useState} from 'react';

const EventTest = () => {
    const [form, setForm] = useState({
        name: '',
        message: ''
    });
    const {name, message} = form;
    const onChange = (e) => {
        const changedForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(changedForm);
    }
    const onClick = () => {
        alert(name+' 님이 '+ message+'라고 입력하셨습니다.');
        setForm({
            name: '',
            message:''
        })
    };
    const onPress = (e) => {
        if(e.key === 'Enter') onClick();
    }
    return (
        <div>
            <h1>이벤트 테스트</h1>
            <input
                type= "text"
                name= "name"
                value={name}
                placeholder = "이름을 입력해주세요"
                onChange={onChange}
            />
            <br/>
            <input
                type = "text"
                name = "message"
                value = {message}
                placeholder="입력해주세요"
                onChange={onChange}
                onKeyPress={onPress}
            />
            <button onClick={onClick}>버튼</button>
        </div>
    );
}

export default EventTest;