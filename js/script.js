// Charger les données JSON et afficher les figurines
fetch('data/figures.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('figures-container');
        container.innerHTML = "";

        data.forEach(fig => {
            let bafInfo = fig.BAF ? `<p><strong>BAF :</strong> <a href="baf-details.html?baf=${fig.BAF}">${fig.BAF}</a></p>` : "";

            container.innerHTML += `
                <div class="card">
                    <img src="${fig.image}" alt="${fig.nom}">
                    <h3>${fig.nom}</h3>
                    <p>Année : ${fig.annee}</p>
                    <p>Série : ${fig.serie}</p>
                    <p><strong>Prix :</strong> ${fig.prix} €</p>
                    ${bafInfo}
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
                    let bafInfo = fig.BAF ? `<p><strong>BAF :</strong> <a href="baf-details.html?baf=${fig.BAF}">${fig.BAF}</a></p>` : "";

                    container.innerHTML += `
                        <div class="card">
                            <img src="${fig.image}" alt="${fig.nom}">
                            <h3>${fig.nom}</h3>
                            <p>Année : ${fig.annee}</p>
                            <p>Série : ${fig.serie}</p>
                            <p><strong>Prix :</strong> ${fig.prix} €</p>
                            ${bafInfo}
                        </div>
                    `;
                });
        });
}
