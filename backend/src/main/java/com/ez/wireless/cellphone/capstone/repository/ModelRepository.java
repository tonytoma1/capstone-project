package com.ez.wireless.cellphone.capstone.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ez.wireless.cellphone.capstone.model.Model;

@Repository
public interface ModelRepository extends CrudRepository<Model, Integer>  {

	Model findByModelName(String modelName);
}
