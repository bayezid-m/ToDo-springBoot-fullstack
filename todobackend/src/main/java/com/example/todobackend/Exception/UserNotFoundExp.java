package com.example.todobackend.Exception;

public class UserNotFoundExp extends RuntimeException{
    public UserNotFoundExp(Long id){
        super("Could not find the user of id "+ id);
    }
}
