// getting the elements by ids
const allBtn = document.getElementById('allDataButton');
const stateBtn = document.getElementById('stateDataButton');
const yearBtn = document.getElementById('yearDataButton');
const allDataBody = document.getElementById('alldatabody');

const sampleData = [{
    "Bank_name": "UBA",
    "city": "Ikeja", 
    "state": "Lagos",
    "cert": 123,
    "Acquisition": "BOA",
    "Date": "23Nov2024",
    "Fund": 12
}, 
{
    "Bank_name": "UBA",
    "city": "Ikeja", 
    "state": "Lagos",
    "cert": 123,
    "Acquisition": "BOA",
    "Date": "23Nov2024",
    "Fund": 12
}]

function allData(){

    console.log(sampleData)

    // Populate the table with rows
    sampleData.forEach(item => {
        const row = document.createElement("tr");
        allDataBody.appendChild(row);

        // Create and append cells
        const banknameCell = document.createElement("td");
        banknameCell.textContent = item.Bank_name;
        row.appendChild(banknameCell);

        const cityCell = document.createElement("td");
        cityCell.textContent = item.city;
        row.appendChild(cityCell);

        const stateCell = document.createElement("td");
        stateCell.textContent = item.state;
        row.appendChild(stateCell);

        const certCell = document.createElement("td");
        certCell.textContent = item.cert;
        row.appendChild(certCell);

        const acquisitionCell = document.createElement("td");
        acquisitionCell.textContent = item.Acquisition;
        row.appendChild(acquisitionCell);

        const dateCell = document.createElement("td");
        dateCell.textContent = item.Date;
        row.appendChild(dateCell);

        const fundCell = document.createElement("td");
        fundCell.textContent = item.Fund;
        row.appendChild(fundCell);



        
    });
   
}

allBtn.addEventListener('click', allData);
function stateData(){}
function yearData(){}
// stateBtn.addEventListener('click', stateData);
// yearBtn.addEventListener('click', yearData);