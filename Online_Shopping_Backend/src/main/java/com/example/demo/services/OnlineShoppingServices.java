
package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.repository.OnlineShoppingRepository;
import com.example.demo.studententity.OnlineShoppingEntity;

@Service
public class OnlineShoppingServices {
	
	@Autowired
	OnlineShoppingRepository studentManagementRepository;
	
	public OnlineShoppingEntity createUser(OnlineShoppingEntity user) {
		return studentManagementRepository.save(user);
	}

	public OnlineShoppingEntity checklogin(OnlineShoppingEntity loginuser) {
	    return studentManagementRepository.findByEmailAndPassword(
	        loginuser.getEmail(),
	        loginuser.getPassword()
	    );
	}

	public OnlineShoppingEntity updateUser(OnlineShoppingEntity updateuser) {
		return studentManagementRepository.save(updateuser);
	}

	public void deleteUser(Long id) {
		studentManagementRepository.deleteById(id);
		
	}


 
	
}