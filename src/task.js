function encodeToRot13(str) {
  const entry = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const exit = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

  let codeStr = '';

  const arrStr = str.split(' ');

  for (let i = 0; i < arrStr.length; i += 1) {
    for (let j = 0; j < arrStr[i].length; j += 1) {
      console.log('arrStr[i]: ', arrStr[i]);
      console.log('arrStr[i].length: ', arrStr[i].length);
      console.log('j + 1: ', j + 1);
      console.log('arrStr[i][j]: ', arrStr[i][j]);
      const index = entry.indexOf(arrStr[i][j]);
      if (j + 1 === arrStr[i].length && index !== undefined) {
        codeStr = `${codeStr + arrStr[i][j]} `;
        console.log('codeStr if: ', codeStr);
      } else if (index !== undefined) {
        codeStr += exit[index];
        console.log('codeStr else if: ', codeStr);
      } else {
        codeStr += exit[index];
        console.log('codeStr else: ', codeStr);
      }
    }
  }
  return codeStr;
}

console.log(encodeToRot13('Jul qvq gur puvpxra pebff gur ebnq?'));
