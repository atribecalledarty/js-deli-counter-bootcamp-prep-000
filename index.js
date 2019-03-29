function takeANumber(currLine, newPerson){
  currLine.push(newPerson)
  return 'Welcome, ' + newPerson + '. You are number '+ currLine.length + ' in line.'
  
}

function nowServing(currLine){
  if (currLine.length > 0){
    return currLine.shift()
  } else {
    return 'There is nobody waiting to be served!'
  }
}