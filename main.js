const validNumber = 12345678910;
const validPin = 1234;

const getVal = (id) => parseInt(document.getElementById(id).value);

const mainBalanceEl = document.getElementById("mainBalance");

// Logout
document.getElementById("logout").addEventListener("click", () => {
     window.location.href = "index.html";
});


function removeSection() {
     const vec = document.querySelectorAll(".section");
     for (let x of vec) x.style.display = "none";
}

function reomveColor(e="str") {
     const vec = document.querySelectorAll(".common");

     for (let x of vec) {
          x.classList.remove("border-gray-400", "border-blue-500", "border-1", "border-2");
     }

     for (let x of vec) {
          x.classList.add("border-gray-400", "border-1");
     }

     if(e==="str")return ;

     document.getElementById(e).classList.remove("border-gray-400", "border-1");
     document.getElementById(e).classList.add("border-blue-500", "border-2");

}

removeSection();

// Add Money section 
document.getElementById("add-money-btn").addEventListener("click", (e) => {
     e.preventDefault();

     const BankNumber = getVal("BankNumber");
     const AmountoAdd = getVal("AmountoAdd");
     const PinNumber = getVal("PinNumber");
     const mainBalance = parseInt(mainBalanceEl.innerText) || 0;


     if (BankNumber === validNumber && PinNumber === validPin) {
          if (AmountoAdd > 0) {
               const total = mainBalance + AmountoAdd;
               mainBalanceEl.innerText = total;
               alert("Add Money Successfull");
          } else {
               alert("Please enter a valid amount.");
          }
     } else {
          alert("Enter valid Number and Pin");
     }
});

// Cash Out section
document.getElementById("withdraw-money-btn").addEventListener("click", (e) => {
     e.preventDefault();

     const BankNumber = getVal("AgentNumber");
     const AmountoAdd = getVal("AmountWithdraw");
     const PinNumber = getVal("PinNumberCash");
     const mainBalance = parseInt(mainBalanceEl.innerText) || 0;



     if ( PinNumber == validPin) {
          if (AmountoAdd <= mainBalance) {
               const total = mainBalance - AmountoAdd;
               mainBalanceEl.innerText = total;
               alert("Cash Out Successfull");
          } else {
               alert("Please enter a valid amount.");
          }
     } else {
          alert("Enter valid Number and Pin");
     }
});

// Transfer section
document.getElementById("send-now-btn").addEventListener("click", (e) => {
     e.preventDefault();

     const BankNumber = getVal("UserAccountNumber");
     const AmountoAdd = getVal("AmountTransfer");
     const PinNumber = getVal("PinNumberTransfer");
     const mainBalance = parseInt(mainBalanceEl.innerText) || 0;



     if ( PinNumber == validPin) {
          if (AmountoAdd <= mainBalance) {
               const total = mainBalance - AmountoAdd;
               mainBalanceEl.innerText = total;
                alert("Transfer Successfull");
          } else {
               alert("Please enter a valid amount.");
          }
     } else {
          alert("Enter valid Number and Pin");
     }
});



// Bonus  section
document.getElementById("get-bonus-btn").addEventListener("click", (e) => {
     e.preventDefault();

     const AmountoAdd = getVal("EnterBonusCoupon");
     const mainBalance = parseInt(mainBalanceEl.innerText) || 0;



               const total = mainBalance + (AmountoAdd*(10/100));
               mainBalanceEl.innerText = total;

               alert(`Get Bonus: ${AmountoAdd*(10/100)} `);
         
});

// Pay Bill section
document.getElementById("pay-now-btn").addEventListener("click", (e) => {
     e.preventDefault();

     const BankNumber = getVal("BillerAccountNumber");
     const AmountoAdd = getVal("AmounttoPay");
     const PinNumber = getVal("PinNumberPay");
     const mainBalance = parseInt(mainBalanceEl.innerText) || 0;



     if ( PinNumber == validPin) {
          if (AmountoAdd <= mainBalance) {
               const total = mainBalance - AmountoAdd;
               mainBalanceEl.innerText = total;
               alert("Payment Successfull");
          } else {
               alert("Please enter a valid amount.");
          }
     } else {
          alert("Enter valid Number and Pin");
     }
});




document.getElementById("AddMoney").addEventListener("click", function () {

     removeSection();
     reomveColor("AddMoney");
     document.getElementById("add-money-section").style.display = "inline"
   

});


document.getElementById("Cashout").addEventListener("click", function () {

     removeSection();
     reomveColor("Cashout");
     document.getElementById("cash-out-section").style.display = "inline"


});

document.getElementById("TransferMoney").addEventListener("click", function () {

     removeSection();
     reomveColor("TransferMoney");
     document.getElementById("transfer-money-section").style.display = "inline"
  

});

document.getElementById("Cashout").addEventListener("click", function () {

     removeSection();
     reomveColor("Cashout");
     document.getElementById("cash-out-section").style.display = "inline"


});
document.getElementById("GetBonus").addEventListener("click", function () {

     removeSection();
     reomveColor("GetBonus");
     document.getElementById("get-bonus-section").style.display = "inline"


});
document.getElementById("PayBill").addEventListener("click", function () {

     removeSection();
     reomveColor("PayBill");
     document.getElementById("pay-bill-section").style.display = "inline"
   

});

document.getElementById("Transactions").addEventListener("click", function () {

     removeSection();
     reomveColor("Transactions");
     document.getElementById("transaction-history-section").style.display = "inline"
    

});

document.getElementById("header").addEventListener("click", () => {
    
      removeSection();
      reomveColor();
});







