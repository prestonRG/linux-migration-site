let distros = [];

fetch("data/distro_list.json")
  .then(response => response.json())
  .then(data => {
    distros = data;
    display(distros);
  });

function display(list) {
  const container = document.getElementById("distroList");
  container.innerHTML = "";

  list.forEach(distro => {
    const card = `
      <div class="card">
        <h2>${distro.name}</h2>
        <p>${distro.description}</p>
        <p><strong>Ease:</strong> ${distro.ease}</p>
        <p><strong>Size:</strong> ${distro.size}</p>
      </div>
    `;
    container.innerHTML += card;
  });
}

document.getElementById("easeFilter").addEventListener("change", filter);
document.getElementById("sizeFilter").addEventListener("change", filter);

function filter() {
  const ease = document.getElementById("easeFilter").value;
  const size = document.getElementById("sizeFilter").value;

  const filtered = distros.filter(d =>
    (ease === "" || d.ease === ease) &&
    (size === "" || d.size === size)
  );

  display(filtered);
}
