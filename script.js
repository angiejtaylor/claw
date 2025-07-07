fetch('claw-machines.json')
  .then(response => response.json())
  .then(data => {
    const machineList = document.getElementById('machineList');
    data.forEach(machine => {
      const div = document.createElement('div');
      div.className = 'machine';
      div.innerHTML = `
        <h2>${machine.name}</h2>
        <p><strong>Address:</strong> ${machine.address}</p>
        <p><strong>Notes:</strong> ${machine.notes}</p>
      `;
      machineList.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Error loading data:', error);
  });