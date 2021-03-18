package com.ez.wireless.cellphone.capstone.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URISyntaxException;
import java.security.InvalidKeyException;
import java.util.List;

import javax.mail.Multipart;

import org.apache.commons.codec.binary.Base64;
import org.apache.tomcat.util.codec.binary.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ez.wireless.cellphone.capstone.service.ModelService;
import com.microsoft.azure.storage.CloudStorageAccount;
import com.microsoft.azure.storage.StorageException;
import com.microsoft.azure.storage.blob.CloudBlobClient;
import com.microsoft.azure.storage.blob.CloudBlobContainer;
import com.microsoft.azure.storage.blob.CloudBlockBlob;
import com.ez.wireless.cellphone.capstone.model.Model;

@RestController
@RequestMapping("/api/model")
public class ModelController {


	@Autowired
	private ModelService modelService;
	
	
	/**
	 * Uploads the image to the Cloud based server, and saves the model name and model image url
	 * to the database. 
	 * @param file the image to be uploaded to the cloud server
	 * @param imageName the name of the model 
	 * @return the model if it was correctly persisted
	 */
	@PostMapping
	public Model saveModel(@RequestParam("file") MultipartFile file, 
			@RequestParam("name") String imageName) {
		
			CloudStorageAccount account;
		    CloudBlobClient serviceClient;
            CloudBlobContainer container;
            CloudBlockBlob blob;
            String url = null;
            
            try {
				account = CloudStorageAccount.parse("DefaultEndpointsProtocol=https;AccountName=recommercestorage;AccountKey=VgFrDGnQQnoM12kVs0dQ8Xa/OYDhs/c8txmWocpOv0AnzoAcTmHp9kyT59Zzowkkmwl6LyNR0sjPZvO6SVgeBA==;EndpointSuffix=core.windows.net");
				serviceClient = account.createCloudBlobClient();
				container = serviceClient.getContainerReference("test-recom");
            
				blob = container.getBlockBlobReference(file.getOriginalFilename());
				
				blob.upload(file.getInputStream(), file.getSize());
				
				url = blob.getUri().toURL().toString();
				
				
            } catch (InvalidKeyException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (URISyntaxException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (StorageException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (FileNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
            
			Model model = new Model();
			model.setModelImage(url);
			model.setModelName(imageName);
			
			return modelService.saveModel(model);
	}
	
	@GetMapping
	public List<Model> getModels() {
		return modelService.getAllModels();
	}
	
	/**
	 * Gets a model based on the model name
	 * @param modelName the name of the device model
	 * @return Model if model was found
	 */
	@GetMapping(path = "find")
	public Model getModelByModelName(@RequestParam String modelName) {
		return modelService.getModelByModelName(modelName);
	}
}
