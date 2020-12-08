let date;
var interval = localStorage.getItem("mins");

function notificationSend() {
    var interval = localStorage.getItem("mins");
    date = new Date();
    seconds = date.getSeconds();
    minutes = date.getMinutes();
    milliSeconds = date.getMilliseconds();
    timeVariable = (minutes*60*1000)+(seconds*1000)+milliSeconds
    
    if (timeVariable%(interval*60000) == 0) {
        setTimeout(() => { 
            var notify = new Notification('', {
                body: "Please concentrate your eyes at any object located far away for 20 seconds",
                icon: "favicon.png"
            });
        }, 1);  
    }
    setTimeout(() => {notificationSend()}, 1);
}
