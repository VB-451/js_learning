        let clockInterval;
        const updateTime = () => {
            const currentTime = new Date().toTimeString();
            document.getElementById("hours").innerHTML = currentTime[0] + currentTime[1] + ":";
            document.getElementById("minutes").innerHTML = currentTime[3] + currentTime[4] + ":";
            document.getElementById("seconds").innerHTML = currentTime[6] + currentTime[7];
        }

        const timeOn = () => {
            clockInterval = setInterval(updateTime, 1000);
        }

        const timeOff = () => {
            clearInterval(clockInterval);
        }

        document.getElementById("start").onclick = timeOn;
        document.getElementById("stop").onclick = timeOff;
 