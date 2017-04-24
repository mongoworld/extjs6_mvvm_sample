package com.market.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.market.domain.Product;

@Repository
public class APIDao {
	@Autowired
	private JdbcTemplate jdbcTemplate;

	public void addProduct(Product param) throws SQLException {
		System.out.println(param.getItemNm());
		jdbcTemplate.update("INSERT INTO item(item_name,item_price,item_amount,item_regdate) VALUES(?,?,?,now())", new Object[]{param.getItemNm(),param.getItemPrc(),param.getItemAmt()});
	}

	public Long listProductTotalCount(Product param) throws SQLException {
		String query = "SELECT COUNT(item_seq) totalCount FROM item ";
		if(param.getSearchValue() != null && !param.getSearchValue().equals("")) {
			query += "WHERE item_name LIKE CONCAT('%','"+param.getSearchValue()+"','%') ";	
		}
		return (Long)jdbcTemplate.queryForMap(query).get("totalCount");
	}

	public List<Map<String,Object>> listProduct(Product param) throws SQLException {
		String query = "SELECT item_name itemtNm, item_price itemPrc, item_amount itemAmt, item_regdate itemRegDt FROM item ";
		if(param.getSearchValue() != null && !param.getSearchValue().equals("")) {
			query += "WHERE item_name LIKE CONCAT('%','"+param.getSearchValue()+"','%') ";	
		}
		query += "LIMIT " + param.getStart() + " , " + param.getLimit();
		return jdbcTemplate.queryForList(query);
	}

}
