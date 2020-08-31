

const input = `Under the reign of Nader Shah in the 18th century, Iran once again became a major world power,[23] 
though by the 19th century a series of conflicts with the Russian Empire 
led to significant territorial losses.[24][25] However, Iran would remain one
 of the few non-European states to avoid colonization by Europe. The early 20th 
 century saw the Persian Constitutional Revolution, which created the country's first
  constitutional monarchy and legislature, and a gradual move towards greater democracy. 
  Efforts to nationalize its fossil fuel supply from Western companies led to an Anglo-American 
  coup in 1953, which resulted in greater autocratic rule under Mohammad Reza Pahlavi and growing Western 
  political influence.[26] He went on to launch a far-reaching series of reforms in 1963, which included industrial growth, infrastructure expansion, 
  land reforms, and increased women's rights.[27] However, widespread dissatisfaction with the monarchy culminated in the Iranian Revolution, 
  which established the current Islamic Republic in 1979.[28] Iran was invaded by Iraq in 1980, leading to a bloody and protracted war that lasted for almost eight years,
   and ended in a stalemate with devastating losses for both sides.`;
console.log('hello i am cavan, here is some code i wrote just for you')
const MaxHeap = () => {
    //const nodes = [];
    let max = null;

    const insertToHeap = (node) => {
        if(!max) {
            max = node;
            return;
        }

        if(node.value > max.value){
            node.child = max;
            max = node;
            return;
        }

        let temp = max;

        while(true){
            if(node.value > temp.value){
                node.child = temp;
                temp = node;
                break;
            }
            else{
                if(!temp.child){
                    temp.child = node;
                    break;
                }
                else temp = temp.child;
            }
        }
    }

    return {
        Insert: (value, obj) => {
            insertToHeap({value, obj});
        },
        getMax: () => {
            return max;
        },
        print: () => {
            if(max && max.value){
                let currentNode = max;
                while(currentNode){
                    console.log(`freq: ${currentNode.value}: word: ${currentNode.obj}`)
                    currentNode = currentNode.child;
                }
            }
        }
    }
}


const main = (textInput) => {
    const wordsInText = textInput.toLowerCase().split(/[^A-Za-z]+/);
    const wordsMap = new Map();
    let maxCount = MaxHeap();

    for(let i = 1; i <= wordsInText.length; i++){
        const word = wordsInText[i];
        
        if(word){
            if(wordsMap.has(word)){
                let freq = wordsMap.get(word);
                freq++;
                wordsMap.set(word, freq);
                maxCount.Insert(freq, word);
            }
            else{
                wordsMap.set(word, 1);   
                maxCount.Insert(1, word);     
            }
        }
    }

    maxCount.print();
}

main(input);


function retrieveMostFrequentlyUsedWords(literatureText, wordsToExclude)
{
    //convert array to set for instant lookup O(1)
    //we know words to exclude contains unique values as well
    //lets assume words to exclude are lower case 
    const wordsExcluded = new Set(wordsToExclude);
    
    //convert to lower case since casing does not matter 
    //convert string to array for iteration and split by space 
    const wordsInText = literatureText.toLowerCase().split(/[^A-Za-z]+/);
    
    //create map key as word and value as frequency 
    const wordFrequency = new Map();//key=word, value=frequency
    
    //create freq map with freq as key and array of words as value 
    //used to look up max frequency 
    const freqLookUp = new Map(); //key=frequency, value= array of words
    let maxFreq = 0;
    
    //add word to our freq lookup which will contain array of most used words
    const addToMaxFreqLookup = (freq, word) => {
        if(freqLookUp.has(freq)){
            let words = freqLookUp.get(freq);
            words.push(word);
            freqLookUp.set(freq, [...new Set(words)]);
        }
        else{
            freqLookUp.set(freq, [word]);
        }
    }
    
    //responsible for setting max freq
    //responsible for add word to word/freq Ma
    //calls function above
    const addWordAndFrequency = (word, freq) => {
       if(freq > maxFreq) maxFreq = freq;
       wordFrequency.set(word, freq);
       addToMaxFreqLookup(freq, word);
    }
    
    for(let i = 0; i < wordsInText.length; i++){
        const word = wordsInText[i];
        
        //make sure word is not in the excluded list
        if(!wordsExcluded.has(word) && word != ""){
           if(wordFrequency.has(word)){
                let freq = wordFrequency.get(word);
                freq++;
                addWordAndFrequency(word, freq);
           }
           else {
                addWordAndFrequency(word, 1);
           }
        }
    }
    console.log(wordFrequency);
    console.log(freqLookUp.get(maxFreq));
    
    for(let freq = freqLookUp.get(maxFreq); freq > 0; )
    return freqLookUp.get(maxFreq);
}
// FUNCTION SIGNATURE ENDS
// retrieveMostFrequentlyUsedWords('Rose is a flower red rose are flower', ['is', 'are', 'red']);
// retrieveMostFrequentlyUsedWords("Jack and Jill went to the market to buy bread and cheese. Cheese is Jack's and Jill's favorite food.", ['and', 'he', 'the', 'to', 'is']);
// retrieveMostFrequentlyUsedWords("ometimes i just don't lmpw", []);
// retrieveMostFrequentlyUsedWords("Purchase Order Item Help can't find item item is too much part of purchase need fix for image item delivered too fast purchase order too big is purchase order coming? Too big why", ["help", "fix", "too", "is", "of"])
// retrieveMostFrequentlyUsedWords(`
// Under the reign of Nader Shah in the 18th century, Iran once again became a major world power,[23] 
// though by the 19th century a series of conflicts with the Russian Empire 
// led to significant territorial losses.[24][25] However, Iran would remain one
//  of the few non-European states to avoid colonization by Europe. The early 20th 
//  century saw the Persian Constitutional Revolution, which created the country's first
//   constitutional monarchy and legislature, and a gradual move towards greater democracy. 
//   Efforts to nationalize its fossil fuel supply from Western companies led to an Anglo-American 
//   coup in 1953, which resulted in greater autocratic rule under Mohammad Reza Pahlavi and growing Western 
//   political influence.[26] He went on to launch a far-reaching series of reforms in 1963, which included industrial growth, infrastructure expansion, 
//   land reforms, and increased women's rights.[27] However, widespread dissatisfaction with the monarchy culminated in the Iranian Revolution, 
//   which established the current Islamic Republic in 1979.[28] Iran was invaded by Iraq in 1980, leading to a bloody and protracted war that lasted for almost eight years,
//    and ended in a stalemate with devastating losses for both sides.
// `, ['iran', 'leading'])