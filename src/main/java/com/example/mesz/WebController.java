package com.example.mesz;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

@Controller
public class WebController {
    @GetMapping("/")
    public String main () {
        return "start";
    }
    @GetMapping("/start")
    public String round (Model model) {
        rand(model);
        return "round";
    }
    @PostMapping("/start")
    public  String start (Model model) {
        rand(model);
        return "round";
    }
    @PostMapping("/finish")
    @ResponseBody
    public String finish (String countRome,String countWord,String correctRome, String correctWord) {
        FileWriter f0 = null;
        try {
            f0 = new FileWriter("output.txt",true);
            String newLine = System.getProperty("line.separator");
            f0.write("Rome all "+ countRome +" Rome correct "+ correctRome + newLine);
            f0.write("Word all "+ countWord +" Word correct "+ correctWord + newLine);
            f0.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return countRome+correctRome+countWord+correctWord;
    }
    public void rand (Model model) {
        String[] romes = {"I","II","III","IV","V","VI","VII","VIII","IX"};
        String[] words = {"один","два","три","четыре","пять","шесть","семь","восемь","девять"};
        HashSet<String> rome = new HashSet<>();
        HashSet<String> word = new HashSet<>();
        while (rome.size()<=(romes.length/2)&&word.size()<=(words.length/2)) {
            Random random =new Random();
            rome.add(romes[random.nextInt(9)]);
            word.add(words[random.nextInt(9)]);
        }
        model.addAttribute("random",new Random());
        model.addAttribute("rome", rome);
        model.addAttribute("word", word);
    }
}
