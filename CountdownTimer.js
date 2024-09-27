const endDate = "27 September 2024 11:59 PM";
document.getElementById("end-date").innerHTML = endDate;

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diffTime = end-now;

    if(diffTime<=0){
        clearInterval(timerInterval);
        document.getElementById("days").value = 0;
        document.getElementById("hours").value = 0;
        document.getElementById("minutes").value = 0;
        document.getElementById("seconds").value = 0;

        alert("I love you!");
    }
    const daysDiff = Math.floor(diffTime/(1000*60*60*24));
    const hoursDiff = Math.floor((diffTime/(60*60*1000))%24);
    const minutesDiff = Math.floor((diffTime/(1000*60))%60);
    const secondsDiff = Math.floor((diffTime/1000)%60);

    document.getElementById("days").value = daysDiff;
    document.getElementById("hours").value = hoursDiff;
    document.getElementById("minutes").value = minutesDiff;
    document.getElementById("seconds").value = secondsDiff;

}

const timerInterval = setInterval(clock, 1000);