package com.market.controller;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.market.dao.LoginDao;
import com.market.domain.Admin;

@RestController
public class LoginController {
	@Autowired
	private LoginDao dao;
	
	/**
	 * 관리자 로그인 정보조회 API
	 * @param param
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/findLogin", method=RequestMethod.POST)
	public Map<String,Object> findLogin(Admin param, HttpServletRequest request){
		Map<String, Object> result = null;
		try {
			result = dao.findLogin(param);
			result.put("code", 200);
			result.put("adminNm", result.get("admin_name").toString());
			request.getSession().setAttribute("admin", result);
		} catch (SQLException e) {
			e.printStackTrace();
			result = new HashMap<String,Object>();
			result.put("code", 404);
			result.put("msg", e.getMessage());
			return result;
		}
		return result;
	}
	
	/**
	 * 세션정보가 없을 경우 실패 API 
	 * @return
	 */
	@RequestMapping(value="/fail")
	public Map<String,Object> fail(){
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("code", 999);
		return result;
	}
}
