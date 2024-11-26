let currentPage = 0;
let totalPages = 0;

async function getDigimon() {
  const digiResponse = await fetch(`https://digimon-api.vercel.app/api/digimon`);

  const digiData = await digiResponse.json();
  return digiData;
}

async function updateSection() {
  const digimonPageRef = document.getElementById("digimonPage");
  const allDigimon = await getDigimon();

  totalPages = Math.ceil(allDigimon.length / 10);

  digimonPageRef.innerHTML += `<h3>Page ${currentPage + 1} of ${totalPages}</h3>`;
  digimonPageRef.innerHTML += `<table>
  <thead>
  <tr>
  <th>Id</th>
  <th>Name</th>
  <th>Image</th>
  <th>Level</th>
  </tr>
  </thead>
  <tbody id="digimonList"></tbody>
  </table>
  `;

  let pageNumbers = "";
  for (let i = 0; i < totalPages; i++) {
    pageNumbers += `<option value="${i}">${i + 1}</option>`;
  }

  digimonPageRef.innerHTML += `
  <div>
  <button onclick="goToPage(-1)">Previous Page</button>
  <select id='pageNumber' onchange='changePage(event)'>
    ${pageNumbers}
    </select>
  <button onclick="goToPage(1)">Next Page</button>
  </div>
  `;
  updatePage();
}

function changePage(e) {
  currentPage = Number(e.currentTarget.value);
  updatePage();
}

function goToPage(pageDirection) {
  if (pageDirection > 0) {
    if (currentPage === totalPages - 1) {
      currentPage = 0;
    } else {
      currentPage++;
    }
  } else {
    if (currentPage === 0) {
      currentPage = totalPages - 1;
    } else {
      currentPage--;
    }
  }
  document.querySelector("#pageNumber").value = currentPage;
  updatePage();
}

async function updatePage() {
  const h3Ref = document.querySelector("h3");
  const digimonPageRef = document.querySelector("#digimonList");

  const allDigimon = await getDigimon();
  digimonPageRef.innerHTML = ``;
  h3Ref.innerHTML = `Page ${currentPage + 1} of ${totalPages}`;

  for (let index = 0; index < 10; index++) {
    thisDigimon = allDigimon[index + currentPage * 10];
    if (thisDigimon == undefined) continue;

    digimonPageRef.innerHTML += `<tr>
    <td>${index + currentPage * 10}</td>
    <td style='min-width: 100px'>${thisDigimon.name}</td>
    <td>
    <img src="${thisDigimon.img}" height="80" /></td>
    <td>${thisDigimon.level}</td>
    </tr>`;
  }
}

updateSection();
