function notificationSendMain() {
    if(!window.Notification) {
        console.log('Browser does not support notifications.');

    } else {

        if (Notification.permission === 'granted') {
            var notify = new Notification('', {
                body: "From now you'll get a notification every 20 minutes which will prompt you to look away from the screen.",
                icon: "favicon.png"
            });
            notificationSend()
        } else {
            Notification.requestPermission().then(function(p) {
                if(p === 'granted') {
                    var notify = new Notification('', {
                        body: "From now you'll get a notification every 20 minutes which will prompt you to look away from the screen.",
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
    
    setTimeout(() => { 
        var notify = new Notification('', {
            body: "Please look 20 feet away for 20 seconds",
            icon: "favicon.png"
        });
    }, 1200000);
 
    setTimeout(() => {notificationSend()}, 1200000);

}