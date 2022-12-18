package com.example.todobackend.Controller;


import com.example.todobackend.Exception.UserNotFoundExp;
import com.example.todobackend.Model.User;
import com.example.todobackend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepo userRepository;
    @GetMapping("/todos")
    List<User> getAllTodo() {
        return userRepository.findAll();
    }
    @PostMapping("/todo")
    User newTodo(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/todo/{id}")
    User getTodoById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundExp(id));
    }
    //
    @PutMapping("/todo/{id}")
    User updateTodo(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setContent(newUser.getContent());
                    user.setDone(newUser.getDone());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundExp(id));
    }

    @DeleteMapping("/todo/{id}")
    String deleteTodo(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundExp(id);
        }
        userRepository.deleteById(id);
        return  "User with id ("+id+") has been deleted success.";
    }


}
