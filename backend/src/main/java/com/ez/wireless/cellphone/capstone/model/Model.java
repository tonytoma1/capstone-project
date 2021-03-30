package com.ez.wireless.cellphone.capstone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Represents a phone's model. Such as IPhone 6, IPhone XR, Samsung Galaxy Note etc.
 * @author Tony Toma
 */
@Entity
@Table(name = "model")
public class Model {
	
	@Id
	@SequenceGenerator(name="model_sequence", sequenceName = "model_sequence", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "model_sequence")
	@Column(name = "model_id")
	private Integer modelId;
	
	@Column(name =  "model_name", unique = true)
	private String modelName;

	@Column(name = "model_image")
	private String modelImage;


	
	
	/**
	 * @return the modelImage
	 */
	public String getModelImage() {
		return modelImage;
	}

	/**
	 * @param modelImage the modelImage to set
	 */
	public void setModelImage(String modelImage) {
		this.modelImage = modelImage;
	}

	/**
	 * @return the modelId
	 */
	public Integer getModelId() {
		return modelId;
	}

	/**
	 * @param modelId the modelId to set
	 */
	public void setModelId(Integer modelId) {
		this.modelId = modelId;
	}

	/**
	 * @return the modelName
	 */
	public String getModelName() {
		return modelName;
	}

	/**
	 * @param modelName the modelName to set
	 */
	public void setModelName(String modelName) {
		this.modelName = modelName;
	}
	
	
	

}
