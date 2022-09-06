/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/
const findCharacters = (character, string) => {
    var positions = [];
    for(var i=0; i<string.length;i++) {
      if (string[i] === character) positions.push(i);
    }
    return positions;
  }
  
  function duplicateEncode(word){
    const lowerWord = word.toLowerCase();
    const arrayWord = lowerWord.split('');
    
    const newWord = arrayWord.map((character) => {
        if(findCharacters(character, arrayWord).length == 1){
          return '(';
        }else{
          return ')';
        }
    });
    return newWord.join('');
  }
  