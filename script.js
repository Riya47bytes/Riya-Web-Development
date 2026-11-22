function showMessage() {
    alert("Welcome to Tasty Bites!");

    let choice = confirm("Would you like to explore our menu?");

    if (choice == true) {
        document.getElementById("menu").scrollIntoView({
            behavior: "smooth"
        });
    } else {
        alert("Thank you for visiting!");
    }
}