fetch('data/bafs.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('baf-container');
        container.innerHTML = "";

        data.forEach(baf => {
            container.innerHTML += `
                <div class="card">
                    <img src="${baf.image}" alt="${baf.nom}">
                    <h3>${baf.nom}</h3>
                    <a href="baf-details.html?baf=${baf.nom}">Voir les figurines</a>
                </div>
            `;
        });
    })
    .catch(error => console.error("Erreur de chargement du JSON", error));
