package com.market.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.market.domain.Member;
import com.market.domain.Product;

@Repository
public class APIDao {
	@Autowired
	private JdbcTemplate jdbcTemplate;

	/**
	 * 상품등록
	 * @param param
	 * @throws SQLException
	 */
	public void addProduct(Product param) throws SQLException {
		String sql = "INSERT INTO item(item_name,item_price,item_amount,item_regdate) ";
				   sql +="VALUES(?,?,?,now())";
		jdbcTemplate.update(sql, new Object[]{param.getItemNm(),param.getItemPrc(),param.getItemAmt()});
	}
	
	/**
	 * 상품수정
	 * @param param
	 * @throws SQLException
	 */
	public void updateProduct(Product param)  throws SQLException {
		String sql = "UPDATE item ";
				   sql +="SET item_name = ?, item_price = ?, item_amount = ? ";
				   sql +="WHERE item_seq = ?";
		jdbcTemplate.update(sql, new Object[]{param.getItemNm(),param.getItemPrc(),param.getItemAmt(),param.getItemSeq()});
	}
	
	/**
	 * 상품삭제
	 * @param param
	 */
	public void removeProduct(Product param) throws SQLException {
		String sql = "DELETE FROM item ";
				   sql += " WHERE item_seq = ?";
	   jdbcTemplate.update(sql,new Object[]{ param.getItemSeq()});
	}

	/**
	 * 상품 목록 수 조회
	 * @param param
	 * @return
	 * @throws SQLException
	 */
	public Long listProductTotalCount(Product param) throws SQLException {
		String query = "SELECT COUNT(item_seq) totalCount FROM item ";
		if(param.getSearchValue() != null && !param.getSearchValue().equals("")) {
			query += "WHERE item_name LIKE CONCAT('%','"+param.getSearchValue()+"','%') ";	
		}
		return (Long)jdbcTemplate.queryForMap(query).get("totalCount");
	}

	/**
	 * 상품 목록 조회
	 * @param param
	 * @return
	 * @throws SQLException
	 */
	public List<Map<String,Object>> listProduct(Product param) throws SQLException {
		String query = "SELECT item_seq itemSeq, item_name itemNm, item_price itemPrc, item_amount itemAmt, item_regdate itemRegDt FROM item ";
		if(param.getSearchValue() != null && !param.getSearchValue().equals("")) {
			query += "WHERE item_name LIKE CONCAT('%','"+param.getSearchValue()+"','%') ";	
		}
		query += "LIMIT " + param.getStart() + " , " + param.getLimit();
		return jdbcTemplate.queryForList(query);
	}

	/**
	 * 멤버 수 조회
	 * @param param
	 * @return
	 * @throws SQLException
	 */
	public Long listMemberTotalCount(Member param) {
		String query = "SELECT COUNT(member_seq) totalCount FROM member ";
		if(param.getSearchValue() != null && !param.getSearchValue().equals("")) {
			query += "WHERE "+param.getSearchCode()+" LIKE CONCAT('%','"+param.getSearchValue()+"','%') ";	
		}
		return (Long)jdbcTemplate.queryForMap(query).get("totalCount");
	}

	/**
	 * 멤버목록 조회
	 * @param param
	 * @return
	 * @throws SQLException
	 */
	public List<Map<String, Object>> listMember(Member param) {
		String query = "SELECT member_seq memberSeq, member_id memberId, member_name memberNm, CONCAT(member_dft_addr,member_dtl_addr) memberAddr, member_regdate memberRegDt FROM member ";
		if(param.getSearchValue() != null && !param.getSearchValue().equals("")) {
			query += "WHERE "+param.getSearchCode()+" LIKE CONCAT('%','"+param.getSearchValue()+"','%') ";	
		}
		query += "LIMIT " + param.getStart() + " , " + param.getLimit();
		return jdbcTemplate.queryForList(query);
	}
}
