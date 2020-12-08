var interval = localStorage.getItem("mins");

function notificationSendMain() {
    if (Notification.permission === 'granted') {
        var notify = new Notification('', {
            body: "You'll get a notification every " + interval + " minutes which will prompt you to look away from the screen.",
            icon: "favicon.png"
        });
    } 
        
    else {
        Notification.requestPermission().then(function(p) {
            if(p === 'granted') {
                var notify = new Notification('', {
                    body: "You'll get a notification every " + interval + " minutes which will prompt you to look away from the screen.",
                    icon: "favicon.png"
                });
            } 
                
            else {
                console.log('User blocked notifications.');
            }

        }).catch(function(err) {
            console.error(err);
        });
    }
}
