package com.market.domain;

import java.util.Date;

public class Member {
	private Integer memberSeq;
	private String memberId;
	private String memberNm;
	private String memberAddr;
	private Date memberRegDt ;
	
	private String searchCode;
	private String searchValue;
	private int start;
	private int limit;
	/**
	 * @return the memberSeq
	 */
	public Integer getMemberSeq() {
		return memberSeq;
	}
	/**
	 * @param memberSeq the memberSeq to set
	 */
	public void setMemberSeq(Integer memberSeq) {
		this.memberSeq = memberSeq;
	}
	/**
	 * @return the memberId
	 */
	public String getMemberId() {
		return memberId;
	}
	/**
	 * @param memberId the memberId to set
	 */
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}
	/**
	 * @return the memberNm
	 */
	public String getMemberNm() {
		return memberNm;
	}
	/**
	 * @param memberNm the memberNm to set
	 */
	public void setMemberNm(String memberNm) {
		this.memberNm = memberNm;
	}
	/**
	 * @return the memberAddr
	 */
	public String getMemberAddr() {
		return memberAddr;
	}
	/**
	 * @param memberAddr the memberAddr to set
	 */
	public void setMemberAddr(String memberAddr) {
		this.memberAddr = memberAddr;
	}
	/**
	 * @return the memberRegDt
	 */
	public Date getMemberRegDt() {
		return memberRegDt;
	}
	/**
	 * @param memberRegDt the memberRegDt to set
	 */
	public void setMemberRegDt(Date memberRegDt) {
		this.memberRegDt = memberRegDt;
	}
	/**
	 * @return the searchCode
	 */
	public String getSearchCode() {
		return searchCode;
	}
	/**
	 * @param searchCode the searchCode to set
	 */
	public void setSearchCode(String searchCode) {
		this.searchCode = searchCode;
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
	
}
