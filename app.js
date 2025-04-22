function calculatePercentage() {

    let userNumber1 = document.getElementById('obtainedMarks').value
    let userNumber2 = document.getElementById('totalMarks').value
    let percentage = (userNumber1 / userNumber2) * 100


    if (percentage >= 90 && percentage <= 100) {
        alert('You got A+ Congrats')
    }
    else if (percentage >= 80 && percentage <= 90) {
        alert('You got A Congrats')
    }
    else if (percentage >= 70 && percentage <= 80) {
        alert('You got B Congrats')
    }
    else if (percentage >= 60 && percentage <= 70) {
        alert('you got C Congrants')
    }
    else if (percentage >= 50 && percentage <= 60) {
        alert('you got D Congrants')

    } else if (percentage >= 40 && percentage <= 50) {
        alert('you got D Congrants')
        
    } else if (percentage > 33 && percentage <= 40) {
        alert('you got E Congrants')

    } else {
        alert("You are Fail batter the next time")
    }
} 