package com.ez.wireless.cellphone.capstone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

/**
 * The object model for the device condition on the database.
 * @author Tony Toma
 */
@Entity
@Table(name = "device_condition")
public class DeviceCondition {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "condition_sequence")
	@SequenceGenerator(name="condition_sequence", sequenceName = "condition_sequence", allocationSize = 1)
	@Column(name = "condition_id")
	private Integer conditionId;
	
	@Column(name = "condition_name", unique = true)
	private String conditionName;

	/**
	 * @return the conditionId
	 */
	public Integer getConditionId() {
		return conditionId;
	}

	/**
	 * @param conditionId the conditionId to set
	 */
	public void setConditionId(Integer conditionId) {
		this.conditionId = conditionId;
	}

	/**
	 * @return the conditonName
	 */
	public String getConditonName() {
		return conditionName;
	}

	/**
	 * @param conditionName the conditonName to set
	 */
	public void setConditionName(String conditionName) {
		this.conditionName = conditionName;
	}

	
	
}
