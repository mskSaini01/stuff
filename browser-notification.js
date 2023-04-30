if(Notification.permission == "granted") {
    new Notification("This is a notification")
}
else if (Notification.permission == "default") {
    Notification.requestPermission().then(permission => {
        if(Notification.permission == "granted") {
            new Notification("This is a notification")
        }
    })
}