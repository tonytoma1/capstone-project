package com.ez.wireless.cellphone.capstone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * The object model of a Service provider on the database
 * @author Dakota Harvey
 */
@Entity
@Table(name = "service_provider")
public class ServiceProvider {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "service_provider_sequence")
    @SequenceGenerator(name="service_provider_sequence", sequenceName = "service_provider_sequence", allocationSize = 1)
	@Column(name = "service_provider_id")
	private Integer serviceProviderId;
	
	@Column(name = "service_provider_name")
	private String serviceProviderName;

	/**
	 * @return the serviceProviderId
	 */
	public Integer getServiceProviderId() {
		return serviceProviderId;
	}

	/**
	 * @param serviceProviderId the serviceProviderId to set
	 */
	public void setServiceProviderId(Integer serviceProviderId) {
		this.serviceProviderId = serviceProviderId;
	}

	/**
	 * @return the serviceProviderName
	 */
	public String getServiceProviderName() {
		return serviceProviderName;
	}

	/**
	 * @param serviceProviderName the serviceProviderName to set
	 */
	public void setServiceProviderName(String serviceProviderName) {
		this.serviceProviderName = serviceProviderName;
	}
	
	
}
