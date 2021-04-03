import React, { useReducer } from 'react';
import useInputs from './useInputs';


const Profile = () => {
    const [state, onChange] = useInputs({name: '', age: ''});
    const {name, age} = state;

    return(
        <div>
            <div>
                <b>이름 입력: </b><input name="name" value={name} onChange={onChange}/><br/>
                <b>나이 입력: </b><input name="age" value={age} onChange={onChange}/>
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