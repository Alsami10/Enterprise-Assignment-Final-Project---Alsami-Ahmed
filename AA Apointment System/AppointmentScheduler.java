import java.sql.*;

public class AppointmentScheduler {
    public static final String URL = "jdbc:mysql://localhost:3306/appointment_db";
    public static final String USER = "root";
    public static final String PASSWORD = "password";

    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD)) {
            System.out.println("Connected to the database successfully!");

          
            String speciality = "Cardiologist";
            String fetchDoctorsSQL = "SELECT * FROM Doctors WHERE speciality = ?";
            try (PreparedStatement stmt = conn.prepareStatement(fetchDoctorsSQL)) {
                stmt.setString(1, speciality);

                System.out.println("Available Doctors in " + speciality + ":");
                try (ResultSet rs = stmt.executeQuery()) {
                    while (rs.next()) {
                        System.out.println(rs.getInt("doctor_id") + " - " + rs.getString("name"));
                    }
                }
            }

            String sql = "INSERT INTO Appointments (customer_name, appointment_date, appointment_time, doctor_id) VALUES (?, ?, ?, ?)";
            try (PreparedStatement stmt = conn.prepareStatement(sql)) {
                stmt.setString(1, "Zawad Arefin");
                stmt.setDate(2, Date.valueOf("2025-06-01"));
                stmt.setTime(3, Time.valueOf("14:00:00"));
                stmt.setInt(4, 1); // Doctor ID from Speciality Selection

                int rowsInserted = stmt.executeUpdate();
                if (rowsInserted > 0) {
                    System.out.println("Appointment booked successfully with a specialist!");
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
