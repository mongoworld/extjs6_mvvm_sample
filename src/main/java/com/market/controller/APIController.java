package com.market.controller;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.market.domain.Member;
import com.market.domain.Order;
import com.market.domain.Product;
import com.market.service.APIService;

@RestController
@RequestMapping(value="/api")
public class APIController {
	@Autowired
	private APIService service;
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
	
	/**
	 * ============== 상품 API ============== 
	 * 상품등록 API
	 * @param param
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/add/product", method=RequestMethod.POST)
	public Map<String,Object> addProduct(HttpServletRequest request, Product param){
		Map<String, Object> result = new HashMap<String,Object>();
		try {
			service.addProduct(param);
			result.put("code", 200);
		} catch (SQLException e) {
			e.printStackTrace();
			result.put("code", e.getErrorCode());
			result.put("msg", "상품등록 실패");
			return result;
		}
		return result;
	}
	
	/**
	 * 상품수정 API
	 * @param param
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/update/product", method=RequestMethod.POST)
	public Map<String,Object> updateProduct(HttpServletRequest request, Product param){
		Map<String, Object> result = new HashMap<String,Object>();
		try {
			service.updateProduct(param);
			result.put("code", 200);
		} catch (SQLException e) {
			e.printStackTrace();
			result.put("code", e.getErrorCode());
			result.put("msg", "상품수정 실패");
			return result;
		}
		return result;
	}
	
	/**
	 * 상품삭제 API
	 * @param param
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/remove/product", method=RequestMethod.POST)
	public Map<String,Object> removeProduct(HttpServletRequest request, Product param){
		Map<String, Object> result = new HashMap<String,Object>();
		try {
			service.removeProduct(param);
			result.put("code", 200);
		} catch (SQLException e) {
			e.printStackTrace();
			result.put("code", e.getErrorCode());
			result.put("msg", "상품수정 실패");
			return result;
		}
		return result;
	}
	
	/**
	 * 상품목록 조회 API
	 * @param param
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/list/product", method=RequestMethod.POST)
	public Map<String,Object> listProduct(HttpServletRequest request, Product param){
		Map<String, Object> result = new HashMap<String,Object>();
		List<Map<String,Object>> data = null;
		try {
			// 상품 목록 수 조회
			Long totalCount = 0L;
				  totalCount = service.listProductTotalCount(param);
				  
			if(totalCount > 0) {
				// 상품 목록 조회
				data = service.listProduct(param);
			}
			result.put("code", 200);
			result.put("totalCount", totalCount);
			result.put("data", data);
		} catch (SQLException e) {
			e.printStackTrace();
			result.put("code", e.getErrorCode());
			result.put("msg", "상품조회 실패");
			return result;
		}
		return result;
	}
	
	/**
	 * ============== 회원 API ============== 
	 * 회원목록조회 API
	 * @param param
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/list/member", method=RequestMethod.POST)
	public Map<String,Object> listMember(HttpServletRequest request, Member param){
		Map<String, Object> result = new HashMap<String,Object>();
		List<Map<String,Object>> data = null;
		try {
			// 상품 목록 수 조회
			Long totalCount = 0L;
				  totalCount = service.listMemberTotalCount(param);
				  
			if(totalCount > 0) {
				// 상품 목록 조회
				data = service.listMember(param);
			}
			result.put("code", 200);
			result.put("totalCount", totalCount);
			result.put("data", data);
		} catch (SQLException e) {
			e.printStackTrace();
			result.put("code", e.getErrorCode());
			result.put("msg", "회원목록조회 실패");
			return result;
		}
		return result;
	}
	
	/**
	 * ============== 주문 API ============== 
	 * 주문목록조회 API
	 * @param param
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/list/order", method=RequestMethod.POST)
	public Map<String,Object> listOrder(HttpServletRequest request, Order param){
		Map<String, Object> result = new HashMap<String,Object>();
		List<Map<String,Object>> data = null;
		try {
			// 상품 목록 수 조회
			Long totalCount = 0L;
				  totalCount = service.listOrderTotalCount(param);
				  
			if(totalCount > 0) {
				// 상품 목록 조회
				data = service.listOrder(param);
			}
			result.put("code", 200);
			result.put("totalCount", totalCount);
			result.put("data", data);
		} catch (SQLException e) {
			e.printStackTrace();
			result.put("code", e.getErrorCode());
			result.put("msg", "주문목록조회 실패");
			return result;
		}
		return result;
	}
}
