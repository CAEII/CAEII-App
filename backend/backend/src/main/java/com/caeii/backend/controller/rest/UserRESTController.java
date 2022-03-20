package com.caeii.backend.controller.rest;

import com.caeii.backend.model.DTO.UserDTO;
import com.caeii.backend.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserRESTController {

    @Autowired
    private UserService userService;

    private static final Logger log = LoggerFactory.getLogger(UserRESTController.class);

    // update, partialupdate, delete

    /**
     * {@code POST  /users} : create a new User.
     *
     * @return a DTO of the created User.
     * @TODO: use @valid annotation on post
     */
    @PostMapping("/users")
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        return userService.save(userDTO);
    }

    /**
     * {@code GET  /users} : get all the Users.
     *
     * @return a list of all users.
     * @TODO: add only admin / authorized users to use this endpoint
     */
    @GetMapping("/users")
    public List<UserDTO> getUsers() {
        log.debug("REST request to get the list of User");
        return userService.findAll();
    }

    /**
     * {@code GET  /User/:id} : get the User "id".
     *
     * @param id the id of the UserDTO to retrieve.
     * @return the specified UserDTO.
     * @TODO: not found error
     * @TODO: add only admin / authorized users to use this endpoint
     */
    @GetMapping("/User/{id}")
    public UserDTO getUser(@PathVariable Long id) {
        log.debug("REST request to get a User");
        return userService.findById(id);
    }

    /**
     * {@code GET /User} : get the User of currently logged User.
     *
     * @return currently logged UserDTO.
     */
    @GetMapping("/User")
    public UserDTO getSelf() {
        log.debug("REST request to get User of current User");
        return userService.findByCurrentUser();
    }
}
