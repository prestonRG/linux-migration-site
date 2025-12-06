// Load JSON data.
let distros = [];

// Convert distro_list.json into JavaScript, store it in "data", then display it.
fetch("../data/distro_list.json")
    .then(response => response.json())
    .then(data => {
        distros = data;
        displayDistros(distros);
        console.log("Data Loaded", data);
    })
    .catch(error => console.error("Error loading JSON", error));

// Show the list of distros.
function displayDistros(list) {
    const container = document.getElementById("distroList");
    container.innerHTML = "";

    list.forEach(distro => {
        const rowEntry = `
            <div class="card">
                <ul>
                    <li>
                        <h2>${distro.name}</h2>
                    </li>
                </ul>
                <p>${distro.description}</p>
                <p><strong>Difficulty:</strong>${distro.difficulty}</p>
                <p><strong>Release Model:</strong>${distro.release_model}</p>
            </div>
        `;
        container.innerHTML += rowEntry;
    })
}

document.getElementById("easeFilter").addEventListener("change", filter);
document.getElementById("releaseFilter").addEventListener("change", filter);

function filter() {
    const ease = document.getElementById("easeFilter").value;
    const release = document.getElementById("releaseFilter").value;

    const filtered = distros.filter(d =>
        (ease === "All" || d.difficulty.includes(ease)) &&
        (release === "All" || d.release_model.includes(release))
    );

    displayDistros(filtered);
}
