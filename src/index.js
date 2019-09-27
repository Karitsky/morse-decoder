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

    let result = '';

    for (let i = 0; i < expr.length; i += 10) {
        let singleLetter = expr.substr(i, 10);

        if (singleLetter == '**********') {
            result += ' ';
        } else {
            
            let singleLetterMorse = '';

            for (let j = 0; j < singleLetter.length; j += 2) {
                let singleChar = singleLetter.substr(j, 2);
                if (singleChar == '10') {
                    singleCharMorse = '.';
                } else if (singleChar == '11') {
                    singleCharMorse = '-';
                } else {
                    continue;
                }
                singleLetterMorse += singleCharMorse;
            }

            result += MORSE_TABLE[singleLetterMorse];

        }
        
    }
    return result;
}

module.exports = {
    decode
}