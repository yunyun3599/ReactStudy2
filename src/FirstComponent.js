import React from 'react';
import PropTypes from 'prop-types';

const FirstComponent = ({name, age}) => {
    return (
        <div> 
            안녕하세요, 제 이름은 {name}입니다. <br/>
            제 나이는 {age}세 입니다.
        </div>
    );
};

FirstComponent.defaultProps = {
    name: '기본 이름'
};

FirstComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
}

export default FirstComponent;