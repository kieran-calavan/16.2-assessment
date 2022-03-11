// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
  let result = ""
  input = input.toUpperCase()
    const table = [ //array table
      ["A", "B", "C", "D", "E"],
      ["F", "G", "H", "I/J", "K"],
      ["L", "M", "N", "O", "P"],
      ["Q", "R", "S", "T", "U"],
      ["V", "W", "X", "Y", "Z"]
    ]

  for (let i = 0; i < input.length; i++){
    if (input[i] == " "){
      result += " "
      continue
    }
    if (encode){ //encode
      for (let r =0; r < table.length; r++){
        for (let c =0; c <table.length; c++){
          if (table[r][c].includes(input[i])){
            result += c + 1
            result += r + 1
          }
        }
      }
    }
    if (!encode){ //decode
      let c = input[i]
      let r = input[i+1]
      if (r == undefined)
        return false
        i++
      result += table[r-1][c-1].toLowerCase()
    }
  }
    return result
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
