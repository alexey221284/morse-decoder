const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
  
  var WORD_NEXT = 10;
  var MORSE_NEXT = 2;
  var INTO_MORSE = {
    '10':  '.',
    '11':  '-',
    '**':  ' ',
    '00':   ''
  };

  var parsingString = function(inputStr, step) {
    var res = [];
    var i = 0
    while (i < inputStr.length) {
      res.push(inputStr.slice(i, i += step));
    }
    return res;
  }
  
  var code = parsingString(expr, WORD_NEXT). 
    map(
      function(item) {
        return parsingString(item, MORSE_NEXT). 
          map(
            function(item) {
              return INTO_MORSE[item];
            }
          ).join('');
      }
    );

  return code. 
    map( 
      function(item) {
        if (item === '     ') return ' '; 
        return MORSE_TABLE[item];
      }
    ).join('');
}

module.exports = {
    decode
}