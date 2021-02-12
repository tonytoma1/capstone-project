package com.ez.wireless.cellphone.capstone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "device_company")
public class DeviceCompany {
		
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "device_company_sequence")
    @SequenceGenerator(name="device_company_sequence", sequenceName = "device_company_sequence", allocationSize = 1)
	@Column(name = "device_company_id")
	private Integer deviceCompanyId;
		
	@Column(name = "device_company_name")
	private String deviceCompanyName;

	/**
	* @return the deviceCompanyId
	*/
	public Integer getDeviceCompanyId() {
	return deviceCompanyId;
		}

	/**
	 * @param deviceCompanyId the deviceCompanyId to set
	 */
	public void setDeviceCompanyId(Integer deviceCompanyId) {
		this.deviceCompanyId = deviceCompanyId;
	}

	/**
	 * @return the deviceCompanyName
		*/
	public String getDeviceCompanyName() {
		return deviceCompanyName;
	}

	/**
	 * @param deviceCompanyName the deviceCompanyName to set
	 */
	public void deviceCompanyName(String deviceCompanyName) {
		this.deviceCompanyName = deviceCompanyName;
	}
		
		
}

