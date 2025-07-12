let machines = [];

function renderMachines(data) {
  const machineList = document.getElementById("machineList");
  machineList.innerHTML = ""; // clear current list

  data.forEach((machine) => {
    const div = document.createElement("div");
    div.className = "machine";
    div.innerHTML = `
      <div class="machine-header">${machine.name}</div>
      <div class="machine-body">
        <p>${machine.address}</p>
        <div class="ratings">
          <p><strong>Claw Strength</strong> ${"💪".repeat(
            machine.clawStrength
          )}</p>
          <p><strong>Plushie Quality</strong> ${"🐻".repeat(
            machine.plushieQuality
          )}</p>
        </div>
      </div>
    `;
    machineList.appendChild(div);
  });
}

function handleSortChange() {
  const sortBy = document.getElementById("sortSelect").value;
  let sorted = [...machines];

  if (sortBy === "clawStrength") {
    sorted.sort((a, b) => b.clawStrength - a.clawStrength);
  } else if (sortBy === "plushieQuality") {
    sorted.sort((a, b) => b.plushieQuality - a.plushieQuality);
  } else if (sortBy === "name") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  }

  renderMachines(sorted);
}
function filterMachines() {
  alert("Filter feature coming soon!");
}

// Fetch and store data
fetch("claw-machines.json")
  .then((response) => response.json())
  .then((data) => {
    machines = data;
    renderMachines(machines);
  })
  .catch((error) => {
    console.error("Error loading data:", error);
  });
