document.getElementById('bookBtn').addEventListener('click', bookTicket);

function bookTicket() {
    const movie = document.getElementById('movie').value;
    const seat = document.getElementById('seat').value;
    const price = document.getElementById('price').innerText;

    if (!movie || !seat) {
        alert('Please select both a movie and a seat.');
        return;
    }

    const confirmationMessage = `Booking Confirmed!\nMovie: ${movie}\nSeat: ${seat}\nPrice: ${price}`;
    alert(confirmationMessage);
}
