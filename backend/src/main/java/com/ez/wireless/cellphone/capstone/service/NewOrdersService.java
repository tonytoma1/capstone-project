package com.ez.wireless.cellphone.capstone.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ez.wireless.cellphone.capstone.dto.ShippingLabelDTO;
import com.ez.wireless.cellphone.capstone.model.Account;
import com.ez.wireless.cellphone.capstone.model.ClientTemp;
import com.ez.wireless.cellphone.capstone.model.Device;
import com.ez.wireless.cellphone.capstone.model.NewOrders;
import com.ez.wireless.cellphone.capstone.repository.NewOrdersRepository;

@Service
public class NewOrdersService {
	
	@Autowired
	private AccountService accountService;
	
	@Autowired
	private DeviceService deviceService;
	
	@Autowired
	private ClientTempService clientTempService;
	
	@Autowired
	private NewOrdersRepository newOrdersRepository;
	
	@Autowired
	public NewOrdersService(NewOrdersRepository newOrdersRepository)
	{
		this.newOrdersRepository = newOrdersRepository;
	}
	
	/**
	 * Gets all the rows in the New_Orders table
	 * @return
	 */
	public List<NewOrders> getAllNewOrders()
	{
		List<NewOrders> orders = new ArrayList<>();
		newOrdersRepository.findAll().forEach(x -> orders.add(x));
		return orders;
	}
	
	public List<NewOrders> getOrdersBasedOnUser(String username) {
		Account foundAccount = accountService.getByUsername(username);
		
		ArrayList<NewOrders> orders = new ArrayList<NewOrders>();
		
		newOrdersRepository.findAll().forEach(x -> {
			if(x.getAccount().getAccountId() == foundAccount.getAccountId()) {
				orders.add(x);
			}
		});
		
		return orders;
	}
	
	public boolean saveOrders(ShippingLabelDTO shippingLabelDTO) {
		ClientTemp clientTempCreating = new ClientTemp();//clientTempService.saveClientTemp(clientTemp)
		clientTempCreating.setCountry(shippingLabelDTO.getFromCountry());
		clientTempCreating.setEmail(shippingLabelDTO.getFromEmail());
		clientTempCreating.setState(shippingLabelDTO.getFromGeoRegion());
		clientTempCreating.setStreetAddress(shippingLabelDTO.getFromStreet1());
		clientTempCreating.setZip(shippingLabelDTO.getFromMailCode());
		
		ClientTemp clientReturned = clientTempService.saveClientTemp(clientTempCreating);
		
		for(int i = 0; i < shippingLabelDTO.getDevice().size(); i++) {
			Device device = deviceService.findDeviceById(shippingLabelDTO.getDevice().get(i).getDeviceId());
			NewOrders newOrders = new NewOrders();
			newOrders.setClientTemp(clientReturned);		
			newOrders.setDevices(device);
			newOrders.setTotalPrice(device.getDevicePrice());
			newOrdersRepository.save(newOrders);
		
		}
		
		return true;
		
	}
	
	/**
	 * Saves the condition to the New_Orders table
	 * @param newOrders the New Orders
	 * @return The NewOrders if it was successfully saved to the database
	 * @throws IllegalArgumentException if the argument is null
	 */
	@PostMapping
	public NewOrders saveOrders(NewOrders newOrders) throws IllegalArgumentException
	{
		return newOrdersRepository.save(newOrders);
	}
}
