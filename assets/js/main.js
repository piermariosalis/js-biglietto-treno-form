// Buttons
var btnGenera = document.getElementById('btn-genera');
var btnAnnulla = document.getElementById('btn-annulla');




btnGenera.addEventListener("click", function () {
    console.log("Genera ticket");
    // ottieni infomazioni da ID
    var fullNameInput = document.getElementById('full-name');
    var kmImput = document.getElementById('km');
    var etàInput = document.getElementById('età');

    // ottieni informazioni da Value
    var fullName = fullNameInput.value;
    var km = kmImput.value;
    var età = etàInput.value;

    console.log(fullName, km, età);

    //Calcolo biglietto treno
    var costoPerKm = 0.21;
    var ticketPrice = costoPerKm * km;
    console.log(ticketPrice);

    // Definizione del tipo di biglietto
    var discount = "Ticket Type";


    if(età == "minorenne"){
        console.log("Applica 20% di sconto");
        discount = "Sconto Minorenni";
    } else if (età == "over65"){
        console.log("Applica 40% di sconto");
        discount = "Sconto Silver";

    }

    var passengerName = document.getElementById("passenger");
    var scontoApplicato = document.getElementById("discount-applied");
    var carrozzaAssegnata = document.getElementById("carrozza");
    var cpGenerato = document.getElementById("cp");
    var price = document.getElementById("ticket-price");


    // -----
    passengerName.innerHTML = fullName;
    scontoApplicato.innerHTML = discount;
    price.innerHTML = "€ " + ticketPrice;
    carrozzaAssegnata.innerHTML = numeroCarrozza;

    //
    var numeroCarrozza = Math.floor(Math.random() * 10);

});

btnAnnulla.addEventListener("click", function () {
    console.log("Anulla richiesta");
})