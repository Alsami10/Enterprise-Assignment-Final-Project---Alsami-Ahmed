create database appointment_db;
use appointment_db;

Create Table Doctors (
     doctor_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    Speciality VARCHAR(50) NOT NULL,
    Availability_schedule JSON TEXT NOT NULL

);
Create Table Appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    doctor_id INT NOT NULL,
    Status VARCHAR(20) DEFAULT 'Booked',
    FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id)
);

select @@secure_file_priv;

Load DATA INFILE '/path/to/AppointmentSchedulingCleanedData.csv'
INTO TABLE Doctors
Fields Terminated By ','
Enclosed By '"'
Lines Terminated By '\n'
Ignore 1 Rows;

Select * from Doctors where Speciality = 'Cardiologist';

mysql -u root -p < /path/to/'AppointmentSchedulingCleanedData.csv'
