// getting the elements by ids
const allBtn = document.getElementById('allDataButton');
const stateBtn = document.getElementById('stateDataButton');
const yearBtn = document.getElementById('yearDataButton');
const allDataBody = document.getElementById('alldatabody');
const yearDataBody = document.getElementById('yeardatabody');
const stateDataBody = document.getElementById('statedatabody');
const searchYearForm = document.getElementById("searchyearform");
const searchStateForm = document.getElementById("searchstateform");
const stateClearBtn = document.getElementById("clearStateDataBtn");
const yearClearBtn = document.getElementById("clearYearDataBtn");
const allClearBtn = document.getElementById("clearAllDataBtn")


const apiUrl_allData = "http://127.0.0.1:9000/api/failed_banks"; 

async function fetchYearData(year){
    console.log(year)
    if (year){

    
    try {
        const response = await fetch(`http://127.0.0.1:9000/api/${year}`); // Fetch data from FastAPI
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const yearDataJson = await response.json(); // Parse JSON response
        yearDataFunc(yearDataJson); // Render the data to the UI
    } catch (error) {
        console.error("Error fetching data:", error);
    }}
    else{
        alert("Enter year number")
    }
}

async function fetchStateData(state_id){
    console.log(state_id)
    if (state_id){
    
    try {
        const response = await fetch(`http://127.0.0.1:9000/api/failed_banks/${state_id}`); // Fetch data from FastAPI
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
       
        const stateDataJson = await response.json(); // Parse JSON response
        stateDataFunc(stateDataJson); // Render the data to the UI
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    }
    
    else {alert("Enter state id")}
}
async function fetch_allData() {
    try {
        const response = await fetch(apiUrl_allData); // Fetch data from FastAPI
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const sampleData = await response.json(); // Parse JSON response
        allData(sampleData); // Render the data to the UI
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function allData(apiData){

    console.log(apiData)

    // Populate the table with rows
    apiData.forEach(item => {
        const row = document.createElement("tr");
        allDataBody.appendChild(row);

        // Create and append cells
        const banknameCell = document.createElement("td");
        banknameCell.textContent = item['Bank name'];
        row.appendChild(banknameCell);

        const cityCell = document.createElement("td");
        cityCell.textContent = item.City;
        row.appendChild(cityCell);

        const stateCell = document.createElement("td");
        stateCell.textContent = item.State;
        row.appendChild(stateCell);

        const certCell = document.createElement("td");
        certCell.textContent = item.Cert;
        row.appendChild(certCell);

        const acquisitionCell = document.createElement("td");
        acquisitionCell.textContent = item["Acquisition institution"];
        row.appendChild(acquisitionCell);

        const dateCell = document.createElement("td");
        dateCell.textContent = item["Closing date"];
        row.appendChild(dateCell);

        const fundCell = document.createElement("td");
        fundCell.textContent = item.Fund;
        row.appendChild(fundCell);

        
    });
   
}

function yearDataFunc(apiData){

    console.log(apiData)

    // Populate the table with rows
    apiData.forEach(item => {
        const row = document.createElement("tr");
        yearDataBody.appendChild(row);

        // Create and append cells
        const banknameCell = document.createElement("td");
        banknameCell.textContent = item['Bank name'];
        row.appendChild(banknameCell);

        const cityCell = document.createElement("td");
        cityCell.textContent = item.City;
        row.appendChild(cityCell);

        const stateCell = document.createElement("td");
        stateCell.textContent = item.State;
        row.appendChild(stateCell);

        const certCell = document.createElement("td");
        certCell.textContent = item.Cert;
        row.appendChild(certCell);

        const acquisitionCell = document.createElement("td");
        acquisitionCell.textContent = item["Acquisition institution"];
        row.appendChild(acquisitionCell);

        const dateCell = document.createElement("td");
        dateCell.textContent = item["Closing date"];
        row.appendChild(dateCell);

        const fundCell = document.createElement("td");
        fundCell.textContent = item.Fund;
        row.appendChild(fundCell);

        
    });
   
}

function stateDataFunc(apiData){

    console.log(apiData)

    // Populate the table with rows
    apiData.forEach(item => {
        const row = document.createElement("tr");
        stateDataBody.appendChild(row);

        // Create and append cells
        const banknameCell = document.createElement("td");
        banknameCell.textContent = item['Bank name'];
        row.appendChild(banknameCell);

        const cityCell = document.createElement("td");
        cityCell.textContent = item.City;
        row.appendChild(cityCell);

        const stateCell = document.createElement("td");
        stateCell.textContent = item.State;
        row.appendChild(stateCell);

        const certCell = document.createElement("td");
        certCell.textContent = item.Cert;
        row.appendChild(certCell);

        const acquisitionCell = document.createElement("td");
        acquisitionCell.textContent = item["Acquisition institution"];
        row.appendChild(acquisitionCell);

        const dateCell = document.createElement("td");
        dateCell.textContent = item["Closing date"];
        row.appendChild(dateCell);

        const fundCell = document.createElement("td");
        fundCell.textContent = item.Fund;
        row.appendChild(fundCell);

        
    });
   
}

function clearAllTable(){
    allDataBody.innerHTML = ""; // Remove all rows from the table body

}

function clearYearTable(){
    yearDataBody.innerHTML = ""; // Remove all rows from the table body

}

function clearStateTable(){
    stateDataBody.innerHTML = ""; // Remove all rows from the table body

}

// EVENT LISTERNERS 

allBtn.addEventListener('click', fetch_allData);
// searchForm.addEventListener("click", fetchYearData);

searchYearForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission
    const yearInput = document.getElementById("yearInput").value;
    fetchYearData(yearInput); // Fetch and display data for the entered year
});
searchStateForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission
    const stateInput = document.getElementById("stateInput").value;
    fetchStateData(stateInput); // Fetch and display data for the entered year
});

// clearing row data event listener

yearClearBtn.addEventListener("click", clearYearTable)
stateClearBtn.addEventListener("click", clearStateTable)
allClearBtn.addEventListener("click", clearAllTable)