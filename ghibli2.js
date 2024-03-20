window.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const filmId = urlParams.get('id');

    try {
        const response = await fetch(`https://ghibli.rest/films?id=${filmId}`);
        const film = await response.json();
        affichage(film);
    }
    catch(e){
        console.log(e);
    }
});

let contentDiv = document.getElementById('content');

function affichage(data){
    console.log(data);
    let desc = document.createElement("div");
    desc.id = "desc";
    contentDiv.appendChild(desc);

    data.forEach(film => {
        let filmDiv = document.createElement("div");
        filmDiv.className = "banner";
        desc.appendChild(filmDiv);

        let texte = document.createTextNode(film.title + " - " + film.original_title + " (" + film.original_title_romanised + ")");
        filmDiv.appendChild(texte);

        let pElement = document.createElement("h2");
        pElement.appendChild(texte);
        pElement.className = "texte"; 
        filmDiv.appendChild(pElement);

        let imgElement = document.createElement("img");
        imgElement.src = film.movie_banner;
        filmDiv.appendChild(imgElement);

        let pElement2 = document.createElement("p");
        pElement2.appendChild(document.createTextNode(film.description));
        pElement2.className = "texte";
        filmDiv.appendChild(pElement2);

        let pElement3 = document.createElement("p");
        pElement3.appendChild(document.createTextNode("Director : "+ film.director));
        pElement3.className = "texte";
        filmDiv.appendChild(pElement3);

        let pElement4 = document.createElement("p");
        pElement4.appendChild(document.createTextNode("Release date : "+ film.release_date));
        pElement4.className = "texte";
        filmDiv.appendChild(pElement4);

    });

}

