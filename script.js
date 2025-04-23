
// this is for noakhali card

document.getElementById("noakhali-button").addEventListener("click", function(event){
  event.preventDefault();

  const donateBalanceNoakhali = getInput("noakhali-money");
  const balance = getTextInput("total-money");
  if(donateBalanceNoakhali > balance || isNaN(donateBalanceNoakhali) ) {
    alert("You do not have sufficient balance or please give a valid input");
    document.getElementById("my_modal_5").close();
    // return ;
  }
  
  else {
    const newBalance = balance - donateBalanceNoakhali ;
    document.getElementById("total-money").innerText = `${newBalance} BDT`;
  
    const noakhaliDonation = getTextInput("noakhali-fund");
    const newNoaKhaliDonation = donateBalanceNoakhali + noakhaliDonation ;
    document.getElementById("noakhali-fund").innerText = `${newNoaKhaliDonation} BDT `;

  }

} )

// this is for feni card

document.getElementById("feni-button").addEventListener("click", function(event){
  event.preventDefault();

  const donateBalance_2 = getInput("feni-money");
  const balance = getTextInput("total-money");
  const newBalance = balance - donateBalance_2 ;
  if(donateBalance_2 > balance || isNaN(donateBalance_2) ) {
    alert("You do not have sufficient balance or please give a valid input");
    document.getElementById("my_modal_6").close();
    // return ;
  }
  
  else {
    document.getElementById("total-money").innerText = `${newBalance} BDT`;
  
    const FeniDonation = getTextInput("feni-fund");
    const newFeniDonation = donateBalance_2 + FeniDonation ;
    document.getElementById("feni-fund").innerText = `${newFeniDonation} BDT `;

  }

} )


// this is for quota movement card

document.getElementById("quota-button").addEventListener("click", function(event){
  event.preventDefault();

  const donateBalanceQuota = getInput("quota-money");
  const balance = getTextInput("total-money");
  const newBalance = balance - donateBalanceQuota ;
  if(donateBalanceQuota > balance || isNaN(donateBalanceQuota) ) {
    alert("You do not have sufficient balance or please give a valid input");
    document.getElementById("my_modal_7").close();
    // return ;
  }
  
  else {
    document.getElementById("total-money").innerText = `${newBalance} BDT`;
  
    const quotaDonation = getTextInput("quota-fund");
    const newQuotaDonation = donateBalanceQuota + quotaDonation ;
    document.getElementById("quota-fund").innerText = `${newQuotaDonation} BDT `;

  }

} )