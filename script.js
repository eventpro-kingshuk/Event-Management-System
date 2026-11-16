function bookEvent(eventName, price) {
    const name = prompt("Enter your name:");

    if (!name || name.trim() === "") {
        alert("Please enter your name!");
        return;
    }

    const email = prompt("Enter your email:");

    if (!email || email.trim() === "") {
        alert("Please enter your email!");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    const confirmBooking = confirm(
        "Booking Details:\n\n" +
        "Event: " + eventName + "\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Price: ₹" + price + "\n\n" +
        "Do you want to confirm your booking?"
    );

    if (confirmBooking) {
        alert(
            "Your registration is successful!\n\n" +
            "Thank you, " + name + "!\n" +
            "Event: " + eventName + "\n" +
            "Price: ₹" + price
        );
    }
}
