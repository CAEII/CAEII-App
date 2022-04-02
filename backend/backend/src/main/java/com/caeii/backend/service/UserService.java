package com.caeii.backend.service;


import com.caeii.backend.controller.errors.UserNotFoundException;
import com.caeii.backend.model.DTO.UserDTO;
import com.caeii.backend.model.User;
import com.caeii.backend.model.mapper.UserMapper;
import com.caeii.backend.repository.UserRepository;
// import com.fasterxml.jackson.databind.ObjectMapper;
import org.jetbrains.annotations.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;
    // private ObjectMapper mapper;

    private static final Logger log = LoggerFactory.getLogger(UserService.class);

    /**
     * Save a new User.
     *
     * @param userDTO the User to save.
     * @return the new User as DTO.
     */
    public UserDTO save(UserDTO userDTO) {
        log.debug("Request to save User : {}", userDTO);
        User user = userMapper.toEntity(userDTO); // User user = mapper.convertValue(userDTO, User.class);
        user = userRepository.save(user);
        return userMapper.toDto(user);// mapper.convertValue(user, UserDTO.class);
    }

    /**
     * Tries to find a User and if it's not found throws an exception.
     *
     * @param id the id of the User you want to use.
     * @return the User specified.
     * @throws UserNotFoundException if User is not found.
     */
    public User findIfExists(Long id) throws UserNotFoundException {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return user.get();
        }
        throw new UserNotFoundException(id);
    }

    /**
     * Update an existing User.
     *
     * @param id the id of the User.
     * @param userDTO the UserDTO with the attributes used to update the User.
     * @return updated UserDTO.
     * @throws UserNotFoundException if this.findIfExists can't find the User.
     */
    public UserDTO update(Long id, @NotNull UserDTO userDTO) throws UserNotFoundException {
        log.debug("Request to update User : {} with : {}", id, userDTO);
        this.findIfExists(id);
        Objects.requireNonNull(userDTO).setId(id);
        return save(userDTO);
    }

    /**
     * Updates only not null attributes.
     *
     * @param id the id of the User.
     * @param userDTO the UserDTO with the attributes to update in the User.
     * @return partially updated UserDTO.
     * @throws UserNotFoundException if this.findIfExists can't find the User.
     */
    public UserDTO partialUpdate(Long id, @NotNull UserDTO userDTO) throws UserNotFoundException {
        log.debug("Request to partially update User : {} with : {}", id, userDTO);
        User user;
        user = this.findIfExists(id);
        userDTO.setId(id);
        userMapper.partialUpdate(user, userDTO);
        return userMapper.toDto(user);
    }

    /**
     * Get all the users.
     *
     * @return the list of User as DTO.
     */
    @Transactional(readOnly = true)
    public List<UserDTO> findAll() {
        log.debug("Request to get all Users");
        /*List<User> users = userRepository.findAll();
        LinkedList<UserDTO> usersDTO = new LinkedList<>();
        for (User user : users) {
            usersDTO.add(mapper.convertValue(user, UserDTO.class));
        }
        return usersDTO;*/
        return userRepository.findAll().stream().map(userMapper::toDto).collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one User by Id.
     *
     * @param id the id of the User.
     * @return the User specified as DTO.
     * @throws UserNotFoundException if this.findIfExists can't find the User.
     */
    @Transactional(readOnly = true)
    public UserDTO findById(Long id) throws UserNotFoundException {
        log.debug("Request to get User : {}", id);
        // return mapper.convertValue(this.findIfExists(id), UserDTO.class);
        return userMapper.toDto(this.findIfExists(id));
    }

    /**
     * Get current User based on TWT authorities
     *
     * @return the User of currently logged User.
     * @TODO: replace userRepository.findByCurrentUser() for correct implementation
     */
    @Transactional(readOnly = true)
    public UserDTO findByCurrentUser() {
        // log
        // User user = userRepository.findByCurrentUser();
        // UserDTO userDTO = mapper.convertValue(user, UserDTO.class);
        return new UserDTO();
    }

    /**
     * Deletes one User by Id.
     *
     * @param id the id of the User.
     */
    public void delete(Long id) {
        log.debug("Request to delete User : {}", id);
        userRepository.deleteById(id);
    }

}
