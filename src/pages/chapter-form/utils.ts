function isWord(str: string) {
  let alphaNumericFound = false;
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if ((code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123)) {
      alphaNumericFound = true;
      return alphaNumericFound;
    }
  }
  return alphaNumericFound;
}

export function wordCounter(content: string) {
  const text = content.split(' ');
  let wordCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ' && isWord(text[i])) wordCount++;
  }
  return wordCount;
}
