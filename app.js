var firstName=prompt("Enter your First Name");
var lastName=prompt("Enter your Last Name");
var fullName=firstName+" "+lastName;
document.write("Congratulations your Full Name is ","<b>",fullName,"</b>");
var mobileName=prompt("Enter your Favourite Mobile Model");
var stringLength=mobileName.length;
document.write("<br/>Length of String :","<b>",stringLength,"</b>");
var letter=prompt("Enter a Letter");
var j=0;
for(i=0;i<letter.length;i++)
{k="n";
 if(letter[i]===k)
 {document.write("<br/>index of letter,n ","is ","<b>",i,"</b>");
    break;}}

    var letter=prompt("Enter a Letter to find ndex of last letter");
var j=0;i=0;
for(i=letter.length;i>0;i--)
{k="l";
 if(letter[i]===k)
 {document.write("<br/>index of last letter,l ","is ","<b>",i,"</b>");
    break;}}
