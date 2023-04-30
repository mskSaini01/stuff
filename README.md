# stuff
Tools and Stuff in Web Development

This Repository contains various templates, code for sub-problems etc.

=>
browser-notification.js
    = This file contains the template for the Notification permission and the notification delivery to the user under various permission state provided by user
    - First we check if the notifications are already granted by the user with => Notification.permission==="granted"
    - if yes then we show the notification with => new Notification("This is a Notification")
    - if permissions are not granted then we check if the permission is default or not (default means,user choice is unknown and therefore the browser will act as if the value were denied)
    - if the permission is default then we ask for users permission with => Notification.requestPermission() followed by a .then() which returns granted or denied (depends on user) and if permission is allowed then we show the notifications with => new Notification("This is a Notification")
