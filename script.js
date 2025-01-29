// Charger les données JSON et afficher les figurines
fetch('data/figures.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('figures-container');
        container.innerHTML = "";
        data.forEach(fig => {
            container.innerHTML += `
                <div class="card">
                    <img src="${fig.image}" alt="${fig.nom}">
                    <h3>${fig.nom}</h3>
                    <p>Année : ${fig.annee}</p>
                    <p>Série : ${fig.serie}</p>
                    <p>Prix : ${fig.prix}</p>
                </div>
            `;
        });
    })
    .catch(error => console.error("Erreur de chargement du JSON", error));

// Fonction de recherche
function searchFigures() {
    let input = document.getElementById('search').value.toLowerCase();
    fetch('data/figures.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('figures-container');
            container.innerHTML = "";
            data.filter(fig => fig.nom.toLowerCase().includes(input))
                .forEach(fig => {
                    container.innerHTML += `
                        <div class="card">
                            <img src="${fig.image}" alt="${fig.nom}">
                            <h3>${fig.nom}</h3>
                            <p>Année : ${fig.annee}</p>
                            <p>Série : ${fig.serie}</p>
                            <p>Prix : ${fig.prix}</p>
                        </div>
                    `;
                });
        });
}
