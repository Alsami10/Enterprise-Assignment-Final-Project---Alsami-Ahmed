document.getElementById("speciality").addEventListener("change", function() { 
    let speciality = this.value;
    let doctorDropdown = document.getElementById("doctor");

    //Clear current doctor options 
    doctorDropdown.innerHTML = "";

    //Sample doctor database ()
    let doctordata =
    {
        "Cardiology": ["Dr. Smith", "Dr. Jones"],
        "Neurology": ["Dr. Brown", "Dr. Taylor"],
        "Pediatrics": ["Dr. Johnson", "Dr. Lee"]
    };

        // add relevant doctors based on speciality selection 
        if (doctordata[speciality]) {
            doctordata[speciality].forEach((doctor, index) => {
                let option = document.createElement("option");
                option.value = index + 1; // simulating doctor_id
                option.textContent = doctor;
                doctorDropdown.appendChild(option);
            });
        }
    });
    