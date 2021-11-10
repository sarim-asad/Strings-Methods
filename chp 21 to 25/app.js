//Q1
// var firstName = prompt("Enter your first name..")
// var lastName = prompt("Enter your last name..")
// var fullName = document.write("Greetings! <br>" + firstName + " " + lastName)




//Q2
// var phoneModel = prompt("Enter your favourite mobile phone model..")
// var phoneModel_length = phoneModel.length
// var favourite_phoneModel = document.write(  "<br>"   + "<br>"   + "<br>"   + "<br>"   +   "My Favourite Phone is : " + phoneModel + " " + "<br>" + "Length of String is: "  +  phoneModel_length)


//Q3
// var word = "Pakistani"
// var indNum = word.indexOf("n")
// var index_string = document.write( "<br>"  +"<br>"  +"<br>"  + "<br>"  +  "String : " + word + " " + "<br>" + "Index of 'n' is: "  +  indNum)
//Q4
// var str = "Hello World"
// var ind_Num = str.lastIndexOf("l")
// var index_string = document.write( "<br>"  +"<br>"  +"<br>"  + "<br>"  +  "String : " + str + " " + "<br>" + "Last Index of '1' is: "  +  ind_Num)
// //Q5
// var char = "Pakistani"
// var update_char = char.charAt(3)
// var new_char = document.write( "<br>"  +"<br>"  +"<br>"  + "<br>"  +  "String : " + char + " " + "<br>" + "Character at Index of '3' is: "  +  update_char)

// //Q6  //By using concat() method
// var firstName = "Sarim"
// var lastName = " Asad"
// var fullName = firstName.concat(lastName);
// var full_Name = document.write(  "<br>" + "<br>" + "<br>" +  "<br>" +"<br>" +   fullName)

// //Q7  
// let text = "Hyderabad";
// text.replace("Hyder", "Islam");
// var new_text = document.write(   "<br>" +  "<br>" + "City : " + text + " "   + "<br>" + "After replacement : " + text.replace("Hyder", "Islam"))
// //Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";


// var new_message = document.write(   "<br>" +  "<br>" + "A Message with  'and'  : " + message + " "   + "<br>" + "After replacement of  'and' to '&' : " + message.replace(/and/g, "&"));

//Q9

// var str = "472"
// var str_type = document.write(   "<br>"  + "<br>"  + "Value : " +  str +  " "   +  "<br>" +    "Type : "   +  typeof(str))

// var num = parseInt(str)
// var num_type = document.write("<br>" + "Value : " + num + " " + "<br>" + "Type : " + typeof(num));

//Q10

//var word = prompt("Enter a word : ")
// var word_cap = word.toUpperCase()
// var new_word  = document.write("<br>" + "<br>" + "<br>" +  "<br>" + "User Input : " + word +  " <br>" + "Upper Case : "  + word_cap)

//Q11
// function toTitleCase(str) {
//     return str.replace(
//       /\w\S*/g,
//       function(txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//       }
//     );
//   }

//   //Q12
// var num = 35.36;
// var updated_num = 3536
// var new_word  = document.write("<br>" + "<br>" + "<br>" +  "<br>" + " Number : " + num +  " <br>" + "Result  : "  + updated_num)

//Q13
//var user_input = prompt("Enter your name : ")
// if(user_input === "!" , "@" , "." , ","){
//     prompt("Enter Your Valid UserName : " )
// }
//Q14
// var arr = ["cakes" , 'apple pie' , 'cookie' , 'chips' , 'patties']
//Q16 




// function myFunction() {
//   var university = "University" 
//       + "  of" + "  Karachi";

//   var array = university.split("  ");

//   document.getElementById("StringToArray")
//       .innerHTML = array;
// }


//Q17

// var myName = prompt("Enter your country name : ")
// var lastChar = myName.charAt(myName.length - 1)

// document.write("<br>" + "User Input : " + myName + " " + "<br>" + "Last Character of Input :" + " " + lastChar)








//Q18
var str = "The quick brown fox jumps over the lazy dog"
function count(main_str, sub_str) 
    {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }


  // isse hume occurrence maloom hoti hai 
var para = document.write("Text : " + str + " " + "<br>" + "There are ")
var str_new = document.write(count("The quick brown fox jumps over the lazy dog", 'the') +  " "  + "occurrence(s) of the word 'the'  " + ".");

















