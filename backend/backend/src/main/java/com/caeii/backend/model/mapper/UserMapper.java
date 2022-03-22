package com.caeii.backend.model.mapper;


import com.caeii.backend.model.DTO.UserDTO;
import com.caeii.backend.model.User;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link User} and its DTO {@link UserDTO}.
 */
@Mapper(componentModel = "spring")
public interface UserMapper extends EntityMapper<UserDTO, User> {}
