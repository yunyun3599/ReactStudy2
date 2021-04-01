import React, { useReducer } from 'react';

function reducer(state, action){
    return {
        ...state,
        [action.name] : action.value
    }
}

const Profile = () => {
    const [state, dispatch] = useReducer(reducer, {name: '', age: ''});
    const {name, age} = state;

    const onChange = e => {
        dispatch(e.target);
    }

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