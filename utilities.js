function getInput(id) {
  const addMoney = document.getElementById(id).value ;
  const addMoneyNumber = parseFloat(addMoney);
  return addMoneyNumber;
}

function getTextInput(id){
  const theText = document.getElementById(id).innerText;
  const numberText = parseFloat(theText);
  return numberText;
}

