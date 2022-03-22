package com.caeii.backend.controller.rest;

import com.caeii.backend.controller.errors.UserNotFoundException;
import com.caeii.backend.model.DTO.UserDTO;
import com.caeii.backend.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserRESTController {

    @Autowired
    private UserService userService;

    private static final Logger log = LoggerFactory.getLogger(UserRESTController.class);

    /**
     * {@code POST  /users} : create a new User.
     *
     * @return a DTO of the created User.
     */
    @PostMapping("/users")
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        log.debug("REST request to save User : {}", userDTO);
        return userService.save(userDTO);
    }

    /**
     * {@code PUT  /users/:id} : update an existing User.
     *
     * @param id the id of the User to be updated.
     * @param userDTO  the updated values of the User.
     * @return a DTO of the updated User,
     * or {@code 404 (Not Found)} if User is not found.
     * @TODO: add only admin / authorized users to use this endpoint
     * @TODO: and self
     */
    @PutMapping("/users/{id}")
    public UserDTO updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) throws UserNotFoundException {
        log.debug("REST request to update User : {}, {}", id, userDTO);
        return userService.update(id, userDTO);
    }

    /**
     * {@code PATCH /users/:id} : partial update an existing User.
     *
     * @param id the id of the User to be updated.
     * @param userDTO
     * @return a DTO of the partially updated User.
     * @TODO: implement
     */
    @PatchMapping("/users/{id}")
    public UserDTO partialUpdateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        log.debug("REST request to partial update User : {}, {}", id, userDTO);
        return userService.partialUpdate(id, userDTO);
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
     * {@code GET  /users/:id} : get a User.
     *
     * @param id the id of the UserDTO to retrieve.
     * @return the specified UserDTO,
     * or {@code 404 (Not Found)} if the User is not found.
     * @TODO: add only admin / authorized users to use this endpoint
     */
    @GetMapping("/users/{id}")
    public UserDTO getUser(@PathVariable Long id) throws UserNotFoundException {
        log.debug("REST request to get User : {}", id);
        return userService.findById(id);
    }

    /**
     * {@code GET /user} : get the User of currently logged User.
     *
     * @return currently logged UserDTO.
     * @TODO: implement with JWT authorities
     */
    @GetMapping("/user")
    public UserDTO getSelf() {
        log.debug("REST request to get User of current User");
        return userService.findByCurrentUser();
    }

    /**
     * {@code DELETE /users/:id} : Delete a User.
     *
     * @param id the id of the UserDTO to delete.
     * @return {@code 204 (No Content)} if deleted successfully,
     * or {@code 500 (Internal Server Error)} if failed to delete.
     * @TODO: add only admin / authorized users to use this endpoint
     */
    @DeleteMapping("/users/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") long id) {
        log.debug("REST request to delete Producto : {}", id);
        try {
            userService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
