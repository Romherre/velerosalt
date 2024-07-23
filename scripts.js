// document.addEventListener("DOMContentLoaded", function() {
//     const params = new URLSearchParams(window.location.search);
//     const velero = params.get("velero");

//     let veleroName = "Brisa Marina";

//     switch(velero) {
//         case "atardecer_enamorado":
//             veleroName = "Atardecer Enamorado";
//             break;
//         case "aventura_marina":
//             veleroName = "Aventura Marina";
//             break;
//         case "brisa_marina":
//             veleroName = "Brisa Marina";
//             break;
//         default:
//             veleroName = "Brisa Marina";
//     }

//     document.getElementById("velero").value = veleroName;
// });


document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const velero = params.get("velero");

    let veleroName = "Brisa Marina"; // Valor por defecto

    switch(velero) {
        case "atardecer_enamorado":
            veleroName = "Atardecer Enamorado";
            break;
        case "aventura_marina":
            veleroName = "Aventura Marina";
            break;
        case "brisa_marina":
            veleroName = "Brisa Marina";
            break;
        default:
            veleroName = "Brisa Marina";
    }

    const veleroInput = document.getElementById("velero");
    if (veleroInput) {
        veleroInput.value = veleroName;
    }
});
