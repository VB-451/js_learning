        let timeLeft = 0;
        let timerInterval;
        const updateRemainingTime = () =>{
            document.getElementById("days").innerHTML = Math.floor(timeLeft / (3600 * 24)) + " days";
            document.getElementById("hours").innerHTML = Math.floor((timeLeft % (3600 * 24)) / 3600) + " hours";
            document.getElementById("minutes").innerHTML = Math.floor((timeLeft % 3600) / 60) + " minutes";
            timeLeft -= 1; 
            if (!timeLeft){
                alert("Время пришло");
                clearInterval(timerInterval);
            }
        }
        const TimerOn = () =>{
            const daysInput = document.getElementById("daysInput").value * 24 * 3600;
            const hoursInput = document.getElementById("hoursInput").value * 3600
            const minutesInput = document.getElementById("minutesInput").value * 60
            timeLeft += daysInput + hoursInput + minutesInput;
            if (!timeLeft){
                alert("Вы должны заполнить хотя бы один из инпутов")
            } else{
                timerInterval = setInterval(updateRemainingTime, 1000);    
            }
        }
        document.getElementById("startButton").onclick = TimerOn;    