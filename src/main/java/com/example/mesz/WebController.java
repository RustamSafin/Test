package com.example.mesz;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Random;

@Controller
public class WebController {
    @GetMapping("/")
    public String main () {
        return "start";
    }
    @PostMapping("/start")
    public  String start (Model model) {
        model.addAttribute("random",new Random());
        model.addAttribute("rome", Arrays.asList("I","V","IX","VI"));
        model.addAttribute("word", Arrays.asList("два","семь","восемь"));
        return "round";
    }
}
