package com.caeii.backend.service;


import com.caeii.backend.model.DTO.UserDTO;
import com.caeii.backend.model.User;
import com.caeii.backend.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    private static final Logger log = LoggerFactory.getLogger(UserService.class);

    /**
     * Save a new User.
     *
     * @param userDTO the User to save.
     * @return the new User as DTO.
     */
    public UserDTO save(UserDTO userDTO) {
        log.debug("Request to save User : {}", userDTO);
        User user = userMapper.toEntity(userDTO);
        user = userRepository.save(user);
        return userMapper.toDTO(user);
    }

    /**
     * Get all the users.
     *
     * @return the list of Users as DTO.
     */
    @Transactional(readOnly = true)
    public List<UserDTO> findAll() {
        log.debug("Request to get all Users");
        return userRepository.findAll().stream().map(userMapper::toDTO).collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one User by Id.
     *
     * @param id the id of the User.
     * @return the User specified as DTO.
     */
    @Transactional(readOnly = true)
    public Optional<UserDTO> findById(Long id) {
        log.debug("Request to get Album : {}", id);
        return userRepository.findById(id).map(userMapper::toDTO);
    }

    /**
     *
     *
     * @return the User of currently logged User.
     */
    @Transactional(readOnly = true)
    public UserDTO findByCurrentUser() {
        return userMapper.toDTO(userRepository.findByCurrentUser());
    }
}
