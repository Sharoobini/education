fetch('data.json')
  .then(response => response.json())
  .then(schools => {
    const list = document.getElementById("schoolList");

    schools.forEach(school => {
      const item = document.createElement("li");
      item.innerHTML = `
        ${school.name}
        <span class="${school.status === 'filled' ? 'green' : 'red'}">
          ●
        </span>
      `;
      list.appendChild(item);
    });
  });
