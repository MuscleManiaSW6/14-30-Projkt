const inputEl = document.querySelectorAll(".input");

inputEl.forEach((input) => {
    input.addEventListener("change", ()=> {
        calculateLoan();
    })
})

function calculateLoan() {
    const loanAmountValue = document.querySelector("#loan-amount").value;

    const interestRateValue = document.querySelector("#interest-rate").value;

    const monthsToPayValue = document.querySelector("#duration").value;

    let interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue; 

    let monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);

    document.querySelector("#payment").innerHTML = `Monthly Payment: ${monthlyPayment}`;

}