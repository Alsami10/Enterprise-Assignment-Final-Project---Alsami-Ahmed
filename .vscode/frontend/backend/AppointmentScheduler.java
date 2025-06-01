import java.sql.*;

public class AppointmentScheduler {
    public static final String URL = "jdbc:mysql://localhost:3306/appointment_db";
    Public Static Final String USER = "Root";
    Public Static Final String PASSWORD = "password";

    public static void main(string[] args) {
        try(connection conn = Drivermanager.getConnection(URL,PASSWORD)) {
          SYSTEM.OUT.PRINTLN("connected to the database successfully!");
          
          // Retrieve doctors by speciality
          String Speciality = "Cardiologist";
          string fetchDoctorsSQL = "Select * FROM Doctors WHERE speciality = ?";
          try(prepared statement stmt = conn.prepareStatement(fetchDoctorsSQL))  {
            stmt.setstring(1, speciality);

            system.out.print.in("Avaialble Doctors in " + speciality + ":");
            While(rs.next()) {
                system.out.printIN(rs.getINT("doctor_id") + " - " + rs.getstring("name");

            }
          } 

// sample appointment booking 
string sql = "Insert into Appointments (customer_name, appointment_date, appointment_time ,doctor_id) Values (?, ?, ?, ?)";
try ( preparedstatement stmt = conn.preparestatement(sql))  {
    stmt.setString(1, " Zawad Arefin");
    stmt.setdate(2. date.valueof("2025-06-01"));
    stmt.setTime(3, Time,valueOF("14:00:00"))"
    stmt.setINT(4,1); // Doctor ID form Speciality Selection

    Int rowsInserted = Stmt.executeUpdate();
    if (rowsInserted > 0) {
    system.out.printIN("Appointment booked Successfully with a specialist!");
}
}
}catch ( SQLException e) {
e.printStackTrace();
}
}   
}
    


