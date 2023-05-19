// Fonction pour récupérer les données de l'API  
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await response.json();

        return data;

    } catch (error) {
        console.log("Une erreur s'est produite lors de la récupération des données : ", error);
        return [];
    }
}

// Fonction pour afficher les données dans le tableau de bord
function displayData(dataList) {
    const tableBody = document.querySelector("#dashboard-table tbody");

    dataList.forEach(data => {
        const dataRow = tableBody.insertRow();
        dataRow.innerHTML = `<td>${data.postId}</td><td>${data.id}</td><td>${data.name}</td><td>${data.email}</td><td>${data.body}</td>`;
    });
}

// Appel de la fonction fetchData pour récupérer les données de l'API
fetchData()
    .then(data => {
        // Appel de la fonction displayData pour afficher les données dans le tableau
        displayData(data);
    }) 
    .catch(error => {
        console.log("Une erreur s'est produite : ", error);
    });