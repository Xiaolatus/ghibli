window.addEventListener("DOMContentLoaded",run);

async function run(){

    let contentDiv = document.getElementById('content');
    
    try {
    const response = await fetch('https://ghibli.rest/films');
    const films = await response.json();
    affichage(films);
}
catch(e){
    console.log(e);
}


function affichage(data){
    console.log(data);
    let container = document.createElement("div");
    container.id = "container";
    contentDiv.appendChild(container);

    data.forEach(films => {
        let filmsDiv = document.createElement("div");
        filmsDiv.className = "bloc";
        container.appendChild(filmsDiv);

        let aElement = document.createElement("a");
        aElement.href = `ghibli2.html?id=${films.id}`; 

        let imgElement = document.createElement("img");
        imgElement.src = films.image;

        aElement.appendChild(imgElement);
        filmsDiv.appendChild(aElement);

        let texte = document.createTextNode(films.title);
        filmsDiv.appendChild(texte);

        let pElement = document.createElement("h2");
        pElement.appendChild(texte);
        pElement.className = "texte"; 
        filmsDiv.appendChild(pElement);
    });

}



}