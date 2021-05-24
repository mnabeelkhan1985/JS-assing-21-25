var firstName=prompt("Enter your First Name");
var lastName=prompt("Enter your Last Name");
var fullName=firstName+" "+lastName;
document.write("Congratulations your Full Name is ","<b>",fullName,"</b>");
var mobileName=prompt("Enter your Favourite Mobile Model");
var stringLength=mobileName.length;
document.write("<br/>Length of your Mobile name string is:","<b>",stringLength,"</b>");

var letter=prompt("Enter a Letter to find index of letter \"n\" is");
var k=0;
for(i=0;i<letter.length;i++)
{k="n";
 if(letter[i]===k)
 {document.write("<br/>index of letter,n ","is ","<b>",i,"</b>");
    break;}}

    
    var letter1=prompt("Enter a Letter to find index of last letter \"l\"");
var k,i;
for(i=letter1.length;i>=0;i--)
{k="l";
 if(letter1[i]===k)
 {   document.write("<br/>index of last letter,l ","is ","<b>",i,"</b>");
    break;
   }
}
   
var text="pakistani"
var str1= text.charAt(3);
document.write("<br/>The Character present at index 3 in word <b>Pakistani</b> is ","<b>",str1,"</b>");
var str2=firstName.concat(" ",lastName);
document.write("<br/>Congratulations your Full Name using concat method is ","<b>",str2,"</b>");

var city="hyderabad";
var index=city.indexOf("abad");
var newCity=city.slice(index);
newCity="Islam"+newCity;
document.write("<br/>City Name of Hyderabad after replacing \"hyder\" with \"Islam\" is ","<b>",newCity,"</b>");

var message="Ali and Sami are best friends.They play cricket and football together.";
message=message.replace(/and/g,"&");
document.write("<br/>After replacing  \"and\" with \"&\" using RegExp the result string  is ","<b>",message,"</b>");

str3="478";
str3=Number(str3);
console.log(str3);
document.write("<br/>After coverting  \"string\" to a \"Number\" using number method the result number is ","<b>",str3,"</b>");

var str4=prompt("Enter the word in small case");
str4=str4.toUpperCase();
document.write("<br/>After coverting from lowercase to UPPERCASE using .toUppercase method the result number is ","<b>",str4,"</b>");

var str5=prompt("Enter any sort of word to make it Titlecase");
var str6=str5.slice(0,1);
str6=str6.toUpperCase();
var str7=str5.slice(1,str5.length);
str7=str7.toLowerCase();
str5=str6+str7;
document.write("<br/>After coverting your string to Titlecase using titlecase method the result number is ","<b>",str5,"</b>");