
import "./App.css";
import ChineseWords from "./chinesewords";
import Menu from './menu';
import FirstSet from './firstSet';
import Test from './test';
import {useState} from 'react';

function App() {
const [learnt1, setLearnt1] = useState(false);
  

if(learnt1===false){
return (
    <>
    <Menu name="Makayla"></Menu>
    <button onClick={()=>setLearnt1(true)} title="showSomeCards">Learn First Set</button>
    </>
  );
}else{
  return (
      <>
      <h3>Learn the First Set!</h3>
      <button onClick={()=>setLearnt1(false)} title="showSomeCards">Learn First Set</button>
      <FirstSet></FirstSet>
      </>
    );
  }
}





export default App;
