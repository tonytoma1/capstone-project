package com.ez.wireless.cellphone.capstone.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ez.wireless.cellphone.capstone.model.ClientTemp;

@Repository
public interface ClientTempRepository extends CrudRepository<ClientTemp, Integer> {

}
