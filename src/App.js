import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { divStyle, inputErrStyle, inputStyle } from './Styles';
import Navbar from './Navbar';

function App() {
  const divRefs = useRef(Array.from({ length: 6 }, () => React.createRef()));
  const [randomWord, setRandomWord] = useState('')
  const [value, setValue] = useState('')
  const [count, setCount] = useState(0)
  // const [wordPosition, setWordPosition] = useState({})
  const [inputAlert, setInputAlert] = useState(false)

  
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(value === ''){
      return
    }
    if(count<6){
        let charCount = {}

        for (let i = 0; i < randomWord.length; i++) {
          let char = randomWord.charAt(i);
          charCount[char] = charCount[char]?charCount[char] + 1 : 1
        }
        
        let pos = 0
        let addedCount = {}
        
        divRefs.current[count].current.childNodes.forEach(e => {
          let alphabet = value[pos].toUpperCase()
          e.textContent = alphabet
          e.style.border = '1px solid'
          if(alphabet === randomWord[pos]){
              e.style.backgroundColor = 'green'
              addedCount[alphabet] = addedCount[alphabet]? addedCount[alphabet] + 1 : 1
          }
          pos++
        });
        
        pos = 0
        divRefs.current[count].current.childNodes.forEach(e => {
          let alphabet = value[pos].toUpperCase() 
          let currentCount = addedCount[alphabet] ? addedCount[alphabet] + 1 : 0
          if(alphabet !== randomWord[pos] && randomWord.includes(alphabet) && currentCount <= charCount[alphabet]){
              e.style.backgroundColor = 'yellow'
              addedCount[alphabet] = addedCount[alphabet]? addedCount[alphabet] + 1 : 1
          }else if(alphabet !== randomWord[pos]){
              e.style.backgroundColor = 'gray'
          }
          pos++
        });
        if (value.toUpperCase()===randomWord){
          alert('yaayyy')
          setCount(count +  10)
        }
        setCount(count+1)
    }else{
      alert(`you're done. The word was ${randomWord}`)
      return
    }
    setValue('')
    
  }

  const handleOnchange = (e)=>{
    let otherValuesExist = /^[A-Za-z]+$/.test(e.target.value)
    setInputAlert(!otherValuesExist?true:false)
    setValue(e.target.value)
  }
  
  const getRandomWord = async () => {
    // let list = ['RADIO','ALLOW','AWARE','BLIND','BRAIN','CATCH','ANGER','APPLE','MANGO','TIGER','BEACH','BRAVE']
    let list = ['MANGO']
    let word = list[(Math.floor(Math.random() * list.length))]
    let i = 0
    let wordPos = {}
    for(let alph of word){
      wordPos[i] = alph
      i++
    }
    
    setRandomWord(word)
    // setWordPosition(wordPos)
  };
  useEffect(()=>{
    getRandomWord();
  },[])

  const divElements = Array.from({ length: 6 }, (_, index) => (
    <div style={divStyle} key={index} ref={divRefs.current[index]} id={`attempt${index}`}>
        {Array.from({ length: 5 }, (_, spanIndex) => (
          <span style={{display: 'inline-block',  width: '50px'}} id={`attempt${index}-span${spanIndex}`} key={`attempt${index}-span${spanIndex}`}></span>
        ))}
    </div>
  ));

  // console.log(randomWord);
  // console.log(wordPosition);

  return (
    <div>
          <Navbar/>
          <form onSubmit={handleSubmit} style={{textAlign: 'center', margin: '12px 0px'}}>
            <input onInput={(e)=> e.target.value.toUpperCase()} onChange={handleOnchange} autoFocus minLength={5} maxLength={5} style={inputStyle}/>
            {inputAlert && value !=='' && <span style={inputErrStyle}>Only english letters allowed!!</span>}
          </form>
          {divElements}
          
    </div>
  );
}

export default App;
