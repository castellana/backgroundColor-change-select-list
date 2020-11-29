// EJERCICIO 2_4 DOM Background-colors_select-list
// Schreibe eine Funktion, die beim Anklicken des Buttons die ausgewählte Farboption auf den Hintergrund des body anwendet.



const farbeAuswählen = document.querySelector('farbeAuswahlen');
console.log(farbeAuswahlen);

// farbeAuswahlen.addEventListener('change', (event) => {
//     // console.log(event.target.options)
//     // console.log(event.target.options.selectedIndex)
//     const auswahl = console.log(document.getElementById(event.target.options.selectedIndex +1));
//     console.log(auswahl.innerHTML);
//     const auswahltext = auswahl.innerHTML.split(" ").join("")
//     console.log(auswahltext);
//     document.querySelector('body').style.background =auswahltext;
// })
// target.options.selectedIndex

document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault()
    // console.log(farbeAuswahlen.options)
    // console.log(farbeAuswahlen.options.selectedIndex)
    const auswahl = document.getElementById(farbeAuswahlen.options.selectedIndex +1);

    const auswahltext = auswahl.innerHTML.split(" ").join("")
    console.log(auswahltext);
    document.querySelector('body').style.background =auswahltext;
})
