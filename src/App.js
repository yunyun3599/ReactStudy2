import React, {useState} from "react";
import Profile from './StudyingHooks/Profile';

const App = () => {
  const [visible, setVisible] = useState(false);
  return(
    <div>
      <button onClick = {() => {
        setVisible(!visible);
      }}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr/>
    {visible && <Profile/>}
    </div>
  );
};

export default App;
