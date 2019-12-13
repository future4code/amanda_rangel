import { checkPalindrome } from "./ex2";

describe("Check Palindrome", () => {
  it("Expect the letter a to be a palindrome", () => {
   
    expect(checkPalindrome('a')).toEqual(true);
  });
  it("Expect the word mirim to be a palindrome", () => {
   
    expect(checkPalindrome('mirim')).toEqual(true)
  });
  it("Expect the word Mirim whith uppercase to be equal to mirim", () => {
   
    expect(checkPalindrome('Mirim')).toEqual(true)
  });
  it("Expect the frase 'Socorram-me subi no onibus em marrocos' to be a palindrome", () => {
   
    expect(checkPalindrome('Socorram-me subi no onibus em marrocos')).toEqual(true)
  });
  it("Expect the frase 'Socorram-me subi no onibus em marrocos' to be a palindrome", () => {
   
    expect(checkPalindrome('Socorram-me subi no onibus em marrocos')).toEqual(true)
  });
  it("Expect the frase 'Olé! Maracujá, caju, caramelo!' to be a palindrome", () => {
    expect(checkPalindrome('Olé! Maracujá, caju, caramelo!')).toEqual(true)
  })
});
