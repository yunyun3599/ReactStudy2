import React, {Component} from 'react'; 

class Counter extends Component {
    state = {
          number: 0,
          fixedNumber: 0,
    };
    render(){
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>{fixedNumber} 값은 바뀌지 않습니다</h2>
                <button
                    onClick={() => {
                        this.setState(
                            {number: number +1},     
                            () => {
                            console.log("숫자를 1만큼 증가시켰습니다.");
                            console.log(this.state);
                            }
                        )
                    }}
                >
                    +1
                </button>
            </div>
        )
    }
}

export default Counter;