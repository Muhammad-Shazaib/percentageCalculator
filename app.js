function calculatePercentage() {
    let userNumber = document.getElementById('calculatePercentage').value
    let calculatePercentage = userNumber  / 850 * 100;
    console.log(calculatePercentage)
    if (calculatePercentage >= 80 && calculatePercentage <= 100) {
        alert('You got A+ Congrats')
    }
    else if (calculatePercentage >= 70 && calculatePercentage <= 80) {
        alert('You got A Congrats')
    }
    else if (calculatePercentage >= 60 && calculatePercentage <= 70) {
        alert('You got B Congrats')
    }
    else if (calculatePercentage >= 50 && calculatePercentage <= 60) {
        alert('you got C Congrants')
    }
    else if (calculatePercentage >= 40 && calculatePercentage <= 50) {
        alert('Your are Fail')
    }
    else {
        alert("please enter a valid input")
    }
} 