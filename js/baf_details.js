const params = new URLSearchParams(window.location.search);
const bafNom = params.get("baf");

if (bafNom) {
    document.getElementById("baf-title").textContent = "BAF : " + bafNom;

    fetch('data/figures.json')
        .then(response => response.json())
        .then(figures => {
            const container = document.getElementById('figures-container');
            container.innerHTML = "";

            // Filtre les figurines qui appartiennent à la BAF sélectionnée
            figures.filter(fig => fig.BAF === bafNom)
                .forEach(fig => {
                    container.innerHTML += `
                        <div class="card">
                            <img src="${fig.image}" alt="${fig.nom}">
                            <h3>${fig.nom}</h3>
                            <p>Année : ${fig.annee}</p>
                            <p>Série : ${fig.serie}</p>
                            <p><strong>Prix :</strong> ${fig.prix} €</p>
                        </div>
                    `;
                });
        })
        .catch(error => console.error("Erreur de chargement des figurines", error));
}
