import React from 'react';
import styles from './CSSModule.module.scss';
import classNames from 'classnames/bind';

const cx =  classNames.bind(styles);

const CSSModule = () => {
    console.log(styles);
    return(
        <div className = {cx('wrapper', 'border')}>
            지금 사용하고 계신 것은 <span className = "special"> CSS Module</span> 입니다.
        </div>
    );
};

export default CSSModule;