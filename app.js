const ticketType = document.querySelector("#ticketType");
const quantity = document.querySelector("#quantity");

const locker = document.querySelector("#locker");
const costume = document.querySelector("#costume");

const ticketPrice = document.querySelector("#ticketPrice");
const addonPrice = document.querySelector("#addonPrice");
const totalPrice = document.querySelector("#totalPrice");

const bookingForm = document.querySelector("#bookingForm");

// CALCULATE TOTAL PRICE

function calculatePrice() {

    let price = Number(ticketType.value);
    let count = Number(quantity.value);

    let ticketTotal = price * count;

    let addons = 0;

    if (locker.checked) {
        addons += Number(locker.value);
    }

    if (costume.checked) {
        addons += Number(costume.value);
    }

    // Add-on charges are calculated per visitor

    let totalAddons = addons * count;

    let finalPrice = ticketTotal + totalAddons;

    ticketPrice.innerText = ticketTotal;
    addonPrice.innerText = totalAddons;
    totalPrice.innerText = finalPrice;
}

// DETECT CHANGES

ticketType.addEventListener("change", calculatePrice);

quantity.addEventListener("input", calculatePrice);

locker.addEventListener("change", calculatePrice);

costume.addEventListener("change", calculatePrice);


// CHECKOUT SIMULATION

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.querySelector("#visitorName").value;
    let date = document.querySelector("#visitDate").value;

    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let selectedDate = new Date(date + "T00:00:00");

    if (selectedDate < today) {
        alert("Please select a future visit date!");
        return;
    }

    let amount = totalPrice.innerText;

    alert(
        "🎉 Booking Successful!\n\n" +
        "Welcome " + name + "!\n" +
        "Visit Date: " + date + "\n" +
        "Tickets: " + quantity.value + "\n" +
        "Total Amount: ₹" + amount +
        "\n\nThank you for choosing WonderLand!"
    );

    bookingForm.reset();

    calculatePrice();

});

// INITIAL PRICE

calculatePrice();