// Exp 08: Show Alert on Home Page Load
window.onload = function() {
    if (window.location.pathname.includes('index.html')) {
        alert("Welcome to Comfort Furniture Website!");
    }
};

// Exp 09/10: Function to check discount using Prompt and Alert
function showDiscount() {
    let itemName = prompt("Enter the product name you are interested in:");
    if (itemName) {
        let discount = 10; // Simple logic
        alert("Special Offer for " + itemName + ": Get " + discount + "% off today!");
    } else {
        alert("Please enter a product name to check the offer.");
    }
}

// Exp 08: Confirm Box before Contact Form Submission
function confirmSubmission() {
    let confirmation = confirm("Are you sure you want to send this message?");
    if (confirmation) {
        alert("Message Sent Successfully!");
        return true;
    } else {
        return false;
    }
}  