// alert("Hello World!");

// crea un array di oggetti in cui ogni oggetto rappresenta un membro del team. Ogni membro deve avere le informazioni necessarie per stampare: nome, ruolo e foto;

// creo array di oggetti
const team = [
    {
        "nome": "Wayne Barnett", 
        "ruolo": "Founder & CEO",
        "foto": "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "foto": "img/angela-caroll-chief-editor.jpg"
    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "foto": "img/walter-gordon-office-manager.jpg"
    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "foto": "img/angela-lopez-social-media-manager.jpg"
    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "foto": "img/scott-estrada-developer.jpg"
    },
    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "foto": "img/barbara-ramos-graphic-designer.jpg"
    },
];

// controllo in console.log
// console.log(team);

// vado a selezionare il tag html di punta
let cardImg = document.querySelector(".card-image");

//ciclo for immagini
let teamImages = "";

for (let i = 0; i < team.length; i++) {
    //console.log(team[i].foto);
    teamImages += team[i].foto;
}

console.log(teamImages);

//output html
cardImg.innerHTML = teamImages;