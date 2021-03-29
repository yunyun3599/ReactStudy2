import React, { useState } from 'react';

const Profile = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeAge = (e) => {
        setAge(e.target.value);
    }

    return(
        <div>
            <div>
                <b>이름 입력: </b><input value={name} onChange={onChangeName}/><br/>
                <b>나이 입력: </b><input value={age} onChange={onChangeAge}/>
            </div>
            <div>
                <b>이름: </b>{name}
            </div>
            <div>
                <b>나이: </b>{age}
            </div>
        </div>
    );
};

export default Profile;