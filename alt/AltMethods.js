// aafrin
const checkValue = (typedWord,randomWord,alphabet) => {
    let isMatched = false
    randomWord.split('').forEach((letter,i)=>{
        if (alphabet === letter && letter === typedWord[i].toUpperCase()) {
            isMatched = true
        }
        })
        return isMatched
    }
    divRefs.current[count].current.childNodes.forEach(e => {
        let alphabet = value[pos].toUpperCase()
        e.textContent = alphabet
        e.style.border = '1px solid'
        let currentCount = addedCount[alphabet] ? addedCount[alphabet]: 0
        addedCount[alphabet] = currentCount
        console.log(alphabet,'ALPHABBETT')
        console.log(addedCount,'added');
        console.log(charCount,'char');
        console.log(currentCount,'countttt')
        if(alphabet === randomWord[pos]){
        e.style.backgroundColor = 'green'
        addedCount[alphabet] = addedCount[alphabet]? addedCount[alphabet] + 1 : 1
        }else if(randomWord.includes(alphabet) && currentCount < charCount[alphabet]){
        console.log('fuckkkk yeah')
        e.style.backgroundColor = 'yellow'
        }else{
        e.style.backgroundColor = 'gray'
        }
        pos++
    });

// safwan\
    // let typedWordPos = {}
        // let i = 0
        // for (let i = 0; i < randomWord.length; i++) {
        //     let char = randomWord.charAt(i);
        //     charCount[char] = charCount[char]?charCount[char] + 1 : 1
        //   }
          // for(let alph of value){
          //   typedWordPos[i] = alph
          //   i++
          // }


    divRefs.current[count].current.childNodes.forEach(e => {
            let alphabet = value[pos].toUpperCase()
            let currentCount = addedCount[alphabet] ? addedCount[alphabet] + 1 : 0
            e.textContent = alphabet
            e.style.border = '1px solid'
            if(alphabet === randomWord[pos]){
                e.style.backgroundColor = 'green'
                addedCount[alphabet] = addedCount[alphabet]? addedCount[alphabet] + 1 : 1
            }else if( randomWord.includes(alphabet) && currentCount <= charCount[alphabet]){
                e.style.backgroundColor = 'yellow'
                randomWord.slice(pos+1,randomWord.length).split('').forEach((letter,i)=>{
                    if (alphabet === letter && letter === value.slice(pos+1,value.length)[i].toUpperCase()) {
                        e.style.backgroundColor = 'gray'
                    }
                    })
                addedCount[alphabet] = addedCount[alphabet]? addedCount[alphabet] + 1 : 1
            }else{
                e.style.backgroundColor = 'gray'
            }
            pos++
        });