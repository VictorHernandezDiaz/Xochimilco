package edu.itesm.mx.xochimilco.dao;

import net.sf.json.JSONArray;

public interface XochimilcoDAOInterface {

	public JSONArray getSites();
	public void openConnection();
	public void closeConnection();
	public void agregar(String nombre, String descripcion);
	void agrega(String nombre, String descripcion);
}
