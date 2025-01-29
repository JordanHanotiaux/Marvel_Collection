// Charger les données JSON et afficher les figurines
fetch('data/figures.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('figures-container');
        container.innerHTML = "";
        data.forEach(fig => {
            const possessionClass = fig.owner === "YES" ? "owned" : "not-owned";
            const ownerText = fig.owner === "YES" ? "Disponible" : "Non disponible";

            container.innerHTML += `
                <div class="card ${possessionClass}">
                    <img src="${fig.image}" alt="${fig.nom}" class="figure-image">
                    <h3>${fig.nom}</h3>
                    <p>Année : ${fig.annee}</p>
                    <p>Série : ${fig.serie}</p>
                    <p><strong>Prix :</strong> ${fig.prix} €</p>
                    <p class="owner-status">${ownerText}</p>
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
                    const possessionClass = fig.owner === "YES" ? "owned" : "not-owned";
                    const ownerText = fig.owner === "YES" ? "Disponible" : "Non disponible";

                    container.innerHTML += `
                        <div class="card ${possessionClass}">
                            <img src="${fig.image}" alt="${fig.nom}" class="figure-image">
                            <h3>${fig.nom}</h3>
                            <p>Année : ${fig.annee}</p>
                            <p>Série : ${fig.serie}</p>
                            <p><strong>Prix :</strong> ${fig.prix} €</p>
                            <p class="owner-status">${ownerText}</p>
                        </div>
                    `;
                });
        });
}
