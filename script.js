function bookEvent(eventName) {
    let name = prompt("Enter your name:");

    if (name === null || name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    let email = prompt("Enter your email address:");

    if (email === null || email.trim() === "") {
        alert("Please enter your email.");
        return;
    }

    alert(
        "Thank you " + name +
        "! Your booking request for " +
        eventName + " has been received."
    );
}