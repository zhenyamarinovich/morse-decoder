const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let text = "";
  for (let i = 0; i < expr.length; i += 10) {
    let subStr = expr.substring(i, i + 10);
    if (subStr === "**********") {
      text += " ";
      continue;
    }

    let tmpText = "";
    for (let j = 0; j < 10; j += 2) {
      if (subStr.substring(j, j + 2) === "10") {
        tmpText += ".";
      } else if (subStr.substring(j, j + 2) === "11") {
        tmpText += "-";
      }
    }

    text += MORSE_TABLE[tmpText];
  }
  return text;
}

module.exports = {
  decode,
};
