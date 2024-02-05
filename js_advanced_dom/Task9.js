const showNotification = (options) =>{
    let notification = document.createElement("div")
    notification.classList.add("notification")
    notification.style.position = "absolute";
    notification.style.top = `${options.top}px`;
    notification.style.right = `${options.top}px`;
    notification.innerHTML = options.message;
    document.body.appendChild(notification);
    setTimeout(() => {notification.style.display = "none"}, 1500)
}

showNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    message: "Hello!", // HTML-уведомление
});

