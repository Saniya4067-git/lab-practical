const seatsContainer = document.getElementById("seats");
let selectedSeats = [];

// Create seats dynamically
for (let i = 1; i <= 20; i++) {
    let seat = document.createElement("div");
    seat.classList.add("seat");
    seat.innerText = i;

    seat.addEventListener("click", () => {
        seat.classList.toggle("selected");

        if (selectedSeats.includes(i)) {
            selectedSeats = selectedSeats.filter(s => s !== i);
        } else {
            selectedSeats.push(i);
        }
    });

    seatsContainer.appendChild(seat);
}

// Booking function
function bookTicket() {
    const movie = document.getElementById("movie").value;

    document.getElementById("result").innerText =
        `Booked ${selectedSeats.length} seats for ${movie}: Seats ${selectedSeats.join(", ")}`;
}