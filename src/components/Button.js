import React, {useState} from 'react';

const Button = (props) => {
    const { increment } = props;
    const [add, setAdd] = useState(1);
    return (
    <div style={{display: 'flex', justifyContent:'center'}}>
      <div style={{ background: 'red', width: '40%' }}>
        <button onClick={() => setAdd(add + +increment)}>Increment</button>
        <div>{add}</div>
      </div>
    </div>
    );
};

export default Button;