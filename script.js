let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    let message = document.getElementById("pesan").value;
    let name = document.getElementById("nama").value;

    if (message !== "" && name !== "") {
        alert("Pesan terkirim: " + message);
    } else {
        alert("Mohon isi semua field.");
    }
});