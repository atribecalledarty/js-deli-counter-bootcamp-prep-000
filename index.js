function takeANumber(currLine, newPerson){
  currLine.push(newPerson)
  console.log('Welcome, ' + newPerson + '. You are number '+ (currLine.length + 1) + ' in line.')
  
}