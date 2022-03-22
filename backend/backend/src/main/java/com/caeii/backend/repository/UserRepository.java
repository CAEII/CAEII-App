package com.caeii.backend.repository;

import com.caeii.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the User entity.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {}
