"use strict";

function twoTruthsOneLie(){
    alert("we're going to play two truths and a lie!\nyou will be given three statements about me, two of them will be true and one will be a lie\nif you think the statement is true click OK if you think it is false click CANCEL");
    if (confirm("this is my first year learning to code")) {
        alert("incorrect :(");
    } else {
        alert("correct :D");
    }
    if (confirm("i learned python at age 8")) {
        alert("correct :D");
    } else {
        alert("incorrect :(");
    }
    if (confirm("my middle school robotics teacher taught me javascript")) {
        alert("correct :D");
    } else {
        alert("incorrect :(");
    }
}

function getToKnowYou(){
    let userName = prompt("what is your name?");
    alert("hello " + userName + " thank you for visiting my website!!");
    if (prompt("are you interested in computer science?") === "yes".toLowerCase || "y".toLowerCase){
        console.log(userName + " is interested in comp sci");
    } else {
        let interests = prompt("what are your interests?");
        console.log(userName + " is interested in " + interests);
    }
    let age = prompt("how old are you?");
        console.log(userName + " is " + age);
    let favColor = prompt("what is your favorite color?");
        console.log(userName + "'s favorite color is " + favColor);
    let favObject = prompt("what is your favortie object?");
        console.log(userName + "'s favorite object is " + favObject);
    alert("thank you " + userName + " for letting me get to know you!");
}

