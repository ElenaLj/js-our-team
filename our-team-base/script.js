// alert("Hello World!");

// crea un array di oggetti in cui ogni oggetto rappresenta un membro del team. Ogni membro deve avere le informazioni necessarie per stampare: nome, ruolo e foto;
//bonus: Utilizza gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team.
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
    }
];
console.log(team);

// vado a selezionare il tag html di punta
let teamContainer = document.querySelector(".team-container");

//ciclo for per inserire le immagini
let elements = "";

for (let i = 0; i < team.length; i++) {
    //console.log(team[i].foto);
    elements += `
    <div class="team-card">
        <div class="card-image">
            <img src="${team[i].foto}" />
        </div>

        <div class="card-text">
            <h3>${team[i].nome}</h3>
            <p>${team[i].ruolo}</p>
        </div>
    </div>
    `
}

//output html
teamContainer.innerHTML = elements;

//bonus
const addMember = document.getElementById("addMemberButton");


addMember.addEventListener("click", function(){
    const insertName = document.getElementById("name").value;
    const insertRole = document.getElementById("role").value;
    
    const newMember = {
        "nome": insertName,
        "ruolo": insertRole,
        "foto": "img/new-team-member-01.jpg"
    };

    team.push(newMember);

    teamContainer.innerHTML += 
    `<div class="team-card">
        <div class="card-image">
            <img src="img/new-team-member-01.jpg" />
        </div>

        <div class="card-text">
            <h3>${insertName}</h3>
            <p>${insertRole}</p>
        </div>
    </div>`
});
