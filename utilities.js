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



function addTransactions(donationAmount, regionName){
  const time = new Date();
  const timezone = time.toString();
  const transaction = document.createElement("div");
   transaction.innerHTML =  `
   <div class= "border-1 border-solid rounded-xl p-6 border-gray-400 mb-10">
   <h3 class="text-xl font-bold"> ${donationAmount} Taka is Donated for ${regionName}</h3>
   <p class="text-gray-500 py-4">Date : ${timezone}   </p>
   </div>
   `;
   document.getElementById("transaction-id").appendChild(transaction);
}

