function checkPalindrome() {
    const word = document.getElementById('wordInput').value.toLowerCase().replace(/[^a-z]/g, '');
    let isPalindrome = true;
  
    for (let i = 0; i < (word.length / 2); i++) {
      if (word.charAt(i) !== word.charAt(word.length - 1 - i)) {
        isPalindrome = false;
        break;
      }
    }
  
    const resultText = `The word '${word}' is palindrome: ${isPalindrome}`;
    document.getElementById('result').textContent = resultText;
  
    console.log('Word:', word);
    console.log('Is Palindrome:', isPalindrome);
  }
