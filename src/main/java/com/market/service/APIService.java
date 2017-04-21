package com.market.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.market.dao.APIDao;
import com.market.domain.Product;

@Service
public class APIService {
	
	@Autowired
	private APIDao dao;

	public void addProduct(Product param)  throws SQLException{
		dao.addProduct(param);
	}

	public Long listProductTotalCount(Product param)  throws SQLException {
		return dao.listProductTotalCount(param);
	}

	public List<Map<String,Object>> listProduct(Product param)  throws SQLException {
		// TODO Auto-generated method stub
		return dao.listProduct(param);
	}

}
