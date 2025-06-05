document.getElementById("speciality").addEventListener("change", function() { 
    let speciality = this.value;
    let doctorDropdown = document.getElementById("doctor");


    doctorDropdown.innerHTML = "";

  
    let doctordata =
    {
        "Cardiology": ["Dr. Smith", "Dr. Jones"],
        "Neurology": ["Dr. Brown", "Dr. Taylor"],
        "Pediatrics": ["Dr. Johnson", "Dr. Lee"]
    };

        
        if (doctordata[speciality]) {
            doctordata[speciality].forEach((doctor, index) => {
                let option = document.createElement("option");
                option.value = index + 1; 
                option.textContent = doctor;
                    doctorDropdown.appendChild(option);
                });
            }
    });

document.getElementById("submit").addEventListener("click", function() {
    document.getElementById("appointmentForm").submit(); 
});

fetch('http://localhost:8080/api/users')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('error:', error));

fetch('config.json')
.then(response => response.json())
.then(data => console.log(data.config.server));

document.addEventListener("DOMContentLoaded", function() {
    fetchExcelData(); // Load Excel data on page load
});

//Load Excel file and parse data 
async function fetchExcelData() {
    const response = await fetch('appointment.csv.xlsx');
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(firstSheet);

    //Convert data for chart.js
    const labels = data.map(entry => entry.date);
    const values = data.map(entry => entry.Appointments);

    const ctx = document.getElementById('ExcelChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Appointments',
                data: values,
                borderColor: "blue",
                fill: false
            }]
        }
    });
}
// Function to handle form submission
function setupForm() {
        document.getElementById("appointmentForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
        const doctor= document.getElementById("doctor").value;
        const date = document.getElementById("date").value;
        
        if (!date) {
            alert("pease select a date.");
            return;
        }

    //send data to backend
    fetch("/sumitappointment",{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ doctor, date })
        
    })
    .then (response => response.json())
    .then(data => alert("Appointment submitted successfully:" + data.message))
    .catch(error => console.error("Error:", error));
    });
    }

    const express = require("express");
    const sqlite3 = require("sqlite3").verbose();
    const app = express();
    const port = 5500;

    app.use(express.json());
    const db = new sqlite3.Database("appointments.db");

    db.run ("CREATE TABLE IF NOT EXISTS appointments ( id INTEGER PRIMARY KEY, doctor TEXT. date TEXT)");

    APP.POST("/submitappointment", (req, res) => {
        const { doctor, date } = req.body;
        db.run("Insert INTO appointments (doctor, date) VALUES (?, ?)", [doctor, date], function(err) {
         if (err) return res.status(500).json({ message: " Failed to book appointment"});
         res.json({ message: 'Booked with ${doctor} on ${date}' });
        });

        });
        app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
    
    
    // Call setupForm to initialize form submission handling
    document.addEventListener("DOMContentLoaded", function(){
        setupForm(); // Calls the function after the page is ready

});

document.getElementById("uploadExcel").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        console.log(jsonData); // Log the data to console or process it as needed
    };

});

const labels = jsonData.map(entry => entry.date);
const values = jsonData.map(entry => entry.Appointments);

const ctx = document.getElementById('ExcelChart').getContext('2d');
new Chart(ctx, {
    type: "line",
    data: {
        labels: labels,
        datasets: [{ label: "Appointments", data: values, borderColor: "blue", fill: false }]
    },
});

