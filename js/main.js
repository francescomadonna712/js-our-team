const staff = [

    {
        Nome: "Wayne",
        Cognome: "Barnett",
        Ruolo: "Founder & CEO",
        Image: "wayne-barnett-founder-ceo.jpg",
    },

    {
        Nome: "Angela",
        Cognome: "Caroll",
        Ruolo: "Chief Editor",
        Image: "angela-caroll-chief-editor.jpg",

    },

    {
        Nome: "Walter",
        Cognome: "Gordon",
        Ruolo: "Office Manager",
        Image: "walter-gordon-office-manager.jpg",

    },

    {
        Nome: "Angela",
        Cognome: "Lopez",
        Ruolo: "Social Media Manager",
        Image: "angela-lopez-social-media-manager.jpg",

    },
    {
        Nome: "Scott",
        Cognome: "Estrada",
        Ruolo: "Developer",
        Image: "scott-estrada-developer.jpg",

    },
    {
        Nome: "Barbara",
        Cognome: "Ramos",
        Ruolo: "Graphic Designer",
        Image: "barbara-ramos-graphic-designer.jpg",

    },
]
console.log(staff)


const cardMember = document.getElementById("card");
console.log(cardMember);

for (let i = 0; i < staff.length; i++) {
    const member = staff[i];
    console.log(member);

    cardMember.innerHTML += `
    <h1>${member["Nome"]}</h1>
    <h2>${member["Cognome"]}</h2>
    <h3>${member["Ruolo"]}</h3>
    <img>${member["Image"]}
  `
}