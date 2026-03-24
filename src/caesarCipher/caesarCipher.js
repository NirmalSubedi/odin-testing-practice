const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

const decodeLetter = (cipheredLetter, shift) => {
  const { length } = ALPHABET;
  const letterPosition = ALPHABET.indexOf(cipheredLetter);

  const shiftedLetter = letterPosition + shift;
  const wrappedLetter = (shiftedLetter + length) % length;
  const decodedLetter = ALPHABET[wrappedLetter];

  return decodedLetter;
};

export const caesarCipher = (message, shift) => {
  let result = "";

  for (const char of message) {
    const lowerChar = char.toLowerCase();
    // Non-letters
    if (lowerChar < "a" || lowerChar > "z") {
      result += char;
      continue;
    }

    let plainLetter = decodeLetter(lowerChar, shift);
    if (char !== lowerChar) plainLetter = plainLetter.toUpperCase();

    result += plainLetter;
  }

  return result;
};
