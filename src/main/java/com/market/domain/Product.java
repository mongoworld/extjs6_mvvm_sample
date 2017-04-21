package com.market.domain;

import java.util.Date;

public class Product {
	
	private Integer itemSeq;
	private String itemNm;
	private Integer itemPrc;
	private Integer itemAmt;
	private Date itemRegDt;
	private String searchValue;
	private int start;
	private int limit;
	
	/**
	 * @return the start
	 */
	public int getStart() {
		return start;
	}
	/**
	 * @param start the start to set
	 */
	public void setStart(int start) {
		this.start = start;
	}
	/**
	 * @return the limit
	 */
	public int getLimit() {
		return limit;
	}
	/**
	 * @param limit the limit to set
	 */
	public void setLimit(int limit) {
		this.limit = limit;
	}
	/**
	 * @return the searchValue
	 */
	public String getSearchValue() {
		return searchValue;
	}
	/**
	 * @param searchValue the searchValue to set
	 */
	public void setSearchValue(String searchValue) {
		this.searchValue = searchValue;
	}
	/**
	 * @return the itemSeq
	 */
	public Integer getItemSeq() {
		return itemSeq;
	}
	/**
	 * @param itemSeq the itemSeq to set
	 */
	public void setItemSeq(Integer itemSeq) {
		this.itemSeq = itemSeq;
	}
	/**
	 * @return the itemNm
	 */
	public String getItemNm() {
		return itemNm;
	}
	/**
	 * @param itemNm the itemNm to set
	 */
	public void setItemNm(String itemNm) {
		this.itemNm = itemNm;
	}
	/**
	 * @return the itemPrc
	 */
	public Integer getItemPrc() {
		return itemPrc;
	}
	/**
	 * @param itemPrc the itemPrc to set
	 */
	public void setItemPrc(Integer itemPrc) {
		this.itemPrc = itemPrc;
	}
	/**
	 * @return the itemAmt
	 */
	public Integer getItemAmt() {
		return itemAmt;
	}
	/**
	 * @param itemAmt the itemAmt to set
	 */
	public void setItemAmt(Integer itemAmt) {
		this.itemAmt = itemAmt;
	}
	/**
	 * @return the itemRegDt
	 */
	public Date getItemRegDt() {
		return itemRegDt;
	}
	/**
	 * @param itemRegDt the itemRegDt to set
	 */
	public void setItemRegDt(Date itemRegDt) {
		this.itemRegDt = itemRegDt;
	}
}
