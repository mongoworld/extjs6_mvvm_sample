package com.market.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/api")
public class APIController {
	/**
	 * 관리자 로그인체크
	 * @param request
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/sessionCheck", method=RequestMethod.POST)
	public Map<String,Object> sessionCheck(HttpServletRequest request){
			Map<String,Object> result = new HashMap<String,Object>();
			Map<String,Object> adminInfo = (Map<String,Object>)request.getSession().getAttribute("admin");
			result.put("code", 200);
			result.put("adminNm", adminInfo.get("admin_name"));
			return result;
	}
	
	/**
	 * 관리자 로그아웃 API
	 * @param param
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/logout", method=RequestMethod.POST)
	public Map<String,Object> logout(HttpServletRequest request){
		Map<String, Object> result = new HashMap<String,Object>();
		try {
			request.getSession().removeAttribute("admin");
			result.put("code", 200);
		} catch (Exception e) {
			e.printStackTrace();
			result.put("code", 404);
			result.put("msg", e.getMessage());
		}
		return result;
	}
}
