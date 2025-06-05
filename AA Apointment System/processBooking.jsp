<%@ page import="java.sql.*: %>

<%

String name = request.getParamter("name");
String speciality = request.getParameter("specialty");
String doctor = request.getParameter("doctor");
String date = request.getParameter("date");
String time = request.getParameter("time");

TRY{}
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:5500,AA Appointment", "root", "password");
    String sql = "INSERT INTO appointments (name, specialty, doctor, appointment_date, appointment_time) VALUES (?, ?, ?, ?, ?)";
    PreparedStatement pstmt = conn.prepareStatement(sql);
    stmt.setString(1, name);
     stmt.setDate(2, java.sql.Date.valueOf(date));
     stmt.setTime(3, java.sql.Time.valueOf(time));
     stmt.setInt (4, 1 ); // Assuming doctor_id lookkup logic

     int rowsInserteed = stmt.executeUpdate();
     if (rowsInserted > 0) {
        out.println("Appointment booked Successfully!");
        } 
    } catch (Exception e) {
        out.println("Error booking appointment: " + e.getMessage());
    
    }

%>
