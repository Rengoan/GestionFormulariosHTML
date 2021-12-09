package web;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/Servlet")
public class Servlet {
    
    //Implementamos el metodo doPost para poder gestionar la informacion de nuestro formulario.
    
//    @Override
//    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
//        
//        //Ahora procesamos los elementos de nuestro formulario del lado del servidor
//        String usuario = request.getParameter("usuario");
//        String password = request.getParameter("password");
//        //En este caso usuamos getParameterValues ya que tenemos varios valores
//        String[] tecnologias = request.getParameterValues("tecnologia");
//    }
    
    
}
