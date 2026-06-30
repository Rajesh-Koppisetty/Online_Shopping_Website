package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.studententity.OnlineShoppingEntity;

@Repository
public interface OnlineShoppingRepository extends JpaRepository<OnlineShoppingEntity, Long>{


	
	OnlineShoppingEntity findByEmailAndPassword(String email, String password);

}