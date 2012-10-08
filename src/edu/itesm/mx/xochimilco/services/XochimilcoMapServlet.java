package edu.itesm.mx.xochimilco.services;

import java.io.IOException;
import javax.servlet.http.*;

import edu.itesm.mx.xochimilco.dao.XochimilcoDAO;
import edu.itesm.mx.xochimilco.dao.XochimilcoSitesDAO;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@SuppressWarnings("serial")
public class XochimilcoMapServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {
		/*String nombre = (String) req.getParameter("nombre");
		String descripcion = (String) req.getParameter("descripcion");
		double lat = 0.0;
		double lon = 0.0;
		
		XochimilcoDAO.getInstance().agregar(nombre, descripcion);*/
		resp.setContentType("application/json");
		
		JSONObject json, ob;
		JSONArray array;
		
		json = new JSONObject();
		json.put("lat", 19.190857 );
		json.put("lon",  -99.02363);
		json.put("title", "Milpa Alta");
		
		 array = new JSONArray();
		array.add(json);
		
		json = new JSONObject();
		json.put("lat", 19.274085 );
		json.put("lon",  -99.138347);
		json.put("title", "Xochimilco");
		array.add(json);
		
		json = new JSONObject();
		json.put("lat", 19.357676 );
		json.put("lon",  -99.092685);
		json.put("title", "Iztapalapa");
		array.add(json);
		
		json = new JSONObject();
		json.put("lat", 19.2625217 );
		json.put("lon",  -99.00531005);
		json.put("title", "Tlahuac");
		array.add(json);
		
		ob = new JSONObject();
		ob.put("places", XochimilcoSitesDAO.getInstance().getSites());			
		resp.getWriter().println( ob.toString() );
	}
}
