package com.market.dao;

import java.sql.SQLException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.market.domain.Admin;

@Repository
public class LoginDao {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public Map<String,Object> findLogin(Admin param) throws SQLException {
		String query = "SELECT admin_name, admin_id FROM admin WHERE admin_id = '"+param.getAdminId()+"' and admin_pwd = '"+param.getAdminPwd()+"' ";
		return jdbcTemplate.queryForMap(query);
	}
	 
}
