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

    // add relevant doctors based on specilaity selection 
    if (doctorDATA [speciality])) {

            doctordata[speciality].foreach((doctor, index)) {
                let option = index + 1; // simulating doctor_id
                option.value = index + 1; //simulating doctor_id
                option.textcontent = doctor;
                doctorDropdown.appendChild(option);
            });
            
            }
        }
    }