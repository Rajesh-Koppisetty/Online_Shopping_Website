package com.example.demo.studentcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.OnlineShoppingServices;
import com.example.demo.studententity.OnlineShoppingEntity;

@RestController
@RequestMapping("/Student")
@CrossOrigin("*")
public class OnlineShoppingController {
	
	@Autowired
	OnlineShoppingServices studentManagementServices;
	
	@PostMapping("/register")
	public OnlineShoppingEntity createUser(@RequestBody OnlineShoppingEntity user){
		 
	  return studentManagementServices.createUser(user);
	} 
	
	@PostMapping("/login")
	public OnlineShoppingEntity checklogin(@RequestBody OnlineShoppingEntity loginuser) {
	    return studentManagementServices.checklogin(loginuser);
	}

	@PutMapping("/updateUser")
	public OnlineShoppingEntity updateUser(@RequestBody OnlineShoppingEntity updateuser) {
		return studentManagementServices.updateUser(updateuser);
	}
	
	@DeleteMapping("/deleteUser/{id}")
	public void deleteUser(@PathVariable Long id) {
		 studentManagementServices.deleteUser(id);
	}
	

}