document.getElementById("noakhali-button").addEventListener("click", function(event){
  event.preventDefault();

  const donateBalance_1 = getInput("noakhali-money");
  const balance = getTextInput("total-money");
  const newBalance = balance - donateBalance_1 ;
  if(donateBalance_1 > newBalance) {
    alert("You do not have sufficient balance");
  }

  else {
    document.getElementById("total-money").innerText = newBalance;
  
    const noakhaliDonation = getTextInput("noakhali-fund");
    const newNoaKhaliDonation = donateBalance_1 + noakhaliDonation ;
    document.getElementById("noakhali-fund").innerText = newNoaKhaliDonation;
  
  }



  // console.log(donateBalance_1);


} )