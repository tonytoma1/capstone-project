package com.ez.wireless.cellphone.capstone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "storage_capacity")
public class StorageCapacity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "storage_capacity_sequence")
    @SequenceGenerator(name="storage_capacity_sequence", sequenceName = "storage_capacity_sequence", allocationSize = 1)
	@Column(name = "storage_capacity_id")
	private Integer storageCapacityId;
	
	@Column(name = "storage_capacity_size")
	private Integer storageCapacitySize;

	/**
	 * @return the storageCapacityId
	 */
	public Integer getStorageCapacityId() {
		return storageCapacityId;
	}

	/**
	 * @param storageCapacityId the storageCapacityId to set
	 */
	public void setStorageCapacityId(Integer storageCapacityId) {
		this.storageCapacityId = storageCapacityId;
	}

	/**
	 * @return the storageCapacitySize
	 */
	public Integer getStorageCapacitySize() {
		return storageCapacitySize;
	}

	/**
	 * @param storageCapacitySize the storageCapacitySize to set
	 */
	public void setStorageCapacitySize(Integer storageCapacitySize) {
		this.storageCapacitySize = storageCapacitySize;
	}
	
	
}
