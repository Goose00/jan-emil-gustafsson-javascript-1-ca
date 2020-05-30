function changeWords() {
    const words = document.querySelector("div.about").innerHTML; 
    const newWord = words.replace(/The/g, "Banana")
                         .replace(/the/g, "banana");
    document.querySelector("div.about").innerHTML = newWord;

    
  }
setTimeout(changeWords, 3000);
console.log("Words have changed");
