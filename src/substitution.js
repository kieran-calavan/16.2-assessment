// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let result = ""
    if (!alphabet || alphabet.length !== 26){
      return false
    }
    const letters = {}
    for (let i = 0; i < alphabet.length; i++){
      const letter = alphabet[i]
      if (letters[letter]){
        return false
      }
      letters[letter] = true
    }
    input = input.toLowerCase()
    for (let i = 0; i < input.length; i++){
      let letter = input.charCodeAt(i)
      if (input[i] == " "){
        result += " "
        continue
      }
      if (encode){
        result += alphabet[letter - 97]
      }
        else {
          letter = alphabet.split("").findIndex(c => c == input[i])
          result += String.fromCharCode(letter + 97)
      }
    }
    return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
