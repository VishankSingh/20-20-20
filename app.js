let date; //declareing date variable
















function notificationSendMain() {
    if(!window.Notification) {
        console.log('Browser does not support notifications.');

    } else {

        if (Notification.permission === 'granted') {
            var notify = new Notification('', {
                body: "You'll get a notification every 20 minutes which will prompt you to look away from the screen.",
                icon: "favicon.png"
            });
            notificationSend()
        } else {
            Notification.requestPermission().then(function(p) {
                if(p === 'granted') {
                    var notify = new Notification('', {
                        body: "You'll get a notification every 20 minutes which will prompt you to look away from the screen.",
                        icon: "favicon.png"
                    });
                    notificationSend()
                } else {
                    console.log('User blocked notifications.');
                }
            }).catch(function(err) {
                console.error(err);
            });
        }
    }
}

function notificationSend() {
    date = new Date();
    seconds = date.getSeconds();
    minutes = date.getMinutes();
    milliSeconds = date.getMilliseconds();
    timeConstant = (minutes*60*1000)+(seconds*1000)+milliSeconds
    
    
    setTimeout(() => { 
        var notify = new Notification('', {
            body: "Please look 20 feet away for 20 seconds",
            icon: "favicon.png"
        });
    }, 1);
 
    setTimeout(() => {notificationSend()}, 1);

}