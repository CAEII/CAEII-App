package com.caeii.backend.controller.errors;

public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException(Long id) {
        super("Could not find User: " + id);
    }
}
