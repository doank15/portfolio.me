const typedTextSpan=document.querySelector(".dy_text");
const textArray = ["Doan Mai", "A Student","Funny","Friendly"]; /* type your text here */
const erasingDelay=100;
const newTextDelay=1000;
const typingDelay=200;
let charIndex=0;
let textArrayIndex = 0;


function type(){
	if (charIndex < textArray[textArrayIndex].length) {
		typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type,typingDelay);
	} 
   else{
       //erase
       setTimeout(erase,newTextDelay);
   }
}
function erase(){
    if(charIndex > 0){
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,erasingDelay);
    }
    else{
        textArrayIndex++;
        if(textArrayIndex>=textArray.length){
            textArrayIndex=0;
        }
        setTimeout(type,typingDelay + 1000);
    }
}
document.addEventListener("DOMcontentLoaded", function(){
    setTimeout(type,newTextDelay+100);
});
type();