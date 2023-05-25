import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './pages/Counter';
import QuotesComp from './pages/QuotesComp';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
function App() {
  const state = useSelector((state:RootState)=>state);

// useEffect(()=>{
//   console.log(state)
// })
useEffect(()=>{
  console.log(state)
})
  return (
    <div className="App">
     <Counter></Counter>
     <QuotesComp></QuotesComp>
    </div>
  );
}

export default App;
