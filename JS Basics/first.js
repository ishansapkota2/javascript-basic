/* 1. Ways to print in JS
document.write("This is t\document write");
console.log("Hello World.");
*/

/*2. Console API
console.log("Hello World.");
console.warn('This is a warning');
console.error("This is an error");
console.clear();
console.assert(4==4)
*/

/*JS variables
Variables= Containers to store data values

var number1 = 32;
var number2 = 15;

console.log("The sum is "+ (number1 + number2));
*/

/*
    4. Data-types in JS

//STRINGS
    var str1 = "This is a string.";
    var str2 = "THis is a string as well.";

//NUMBER
    var number1 = 35;
    var number2= 90;

//OBJECT 
    var marks = {
    ishan: 75,
    anushka: 90 
}

//BOOLEAN
    let a = true; 
    let b= false;

//Undefined
var und = undefined;//und matra banayera chodidiyo bhaney pani undefined bhanera nai print huncha because 
                    //kei pani define gardeko chaina//

//NULL
    let n = null;

console.log(number1,str1,str2);
console.log(marks);
console.log(a);
console.log(und);
console.log(n);

*/

/*
At a very high level, there are two types of data-types
    1. Primitive Data-Types (undefined, null, number, string, boolean, symbol)
    2. Reference Data-types (Arrays, Objects) 
*/

//ARRAYS

    // let arr = [1,2,3,4,5];
    // console.log(arr);

// OPERATORS in JS

    /*ARITHMETIC OPERATORS
    let a = 30;
    let b = 20;

    console.log("The value of a and b is: ", (a+b));
    */

    /* ASSIGNMENT OPERATOR
        let b = 10;
        let c ;
         
        c = b;
        c += 2;
        console.log(c);
    */

    /* COMPARISON OPERATOR
        let x = 9;
        let y = 10;

        console.log(x == y);
        console.log(x >= y);
        console.log(x <= y);
    */

    /* LOGICAL OPERATORS

        // LOGICAL AND (&&)
            console.log(true && true); 
            console.log(true && false); 
            console.log(false && false); 
        

        // LOGICAL OR (||)
             console.log(true || true);
             console.log(true || false);
             console.log(false || false);
        

        // LOGICAL NOT  (!)
            console.log(!true);
            console.log(!false);
    */

/*FUNCTIONS in JS

    function avg(a,b)
    {
        return (a + b)/2;
    }

    c1 = avg(3,4);
    c2 = avg(20,10);

    console.log(c1,c2);
*/

/* CONDITIONALS in JS 

    let age = 20;

    // single if statement 
    if(age > 18)
    {
        console.log("You can drink a beer also please drink water.");
    }
    

    // if - else statement 
    if(age > 18)
    {
        console.log("You can drink a beer also please drink water.");
    }

    else{
        console.log("You must drink water not beer.");
    }
    

    // if - else ladder

    if(age > 25)
    {
        console.log("You can drink whiskey , beer also please drink water.");
    }

    else if(age > 18) {
        console.log("You can drink  beer but drink water as well.");
    }

    else{
        console.log("You must drink water.");
    }

    */ 

/*LOOPS in JS
    let arr = [1,2,3,4,5,6,7,8,9];
    
    //for loop
    for(let i = 0;i < arr.length;i++)
    {
        console.log(arr[i]);
    }
    

    // forEach loop
    arr.forEach(function(element)
    {
        console.log(element);
    })
    

    //while LOOP
    let j=0;
    //const chahhi kahile pahile change nagarnu parney variable bhaako bela use garda huncha//

    while(j<arr.length)
    {
        console.log(arr[j]);
        j++;
    }
    

    // do-while loop (jasto j bhayepani euta condition chahi chircha ani balla tespachi condition check
    //                garcha)

        let j=0;

        do
        {
            console.log(arr[j]);
            j++;
        }

        while(j<arr.length);
    */

/*CONTINUE and BREAK statement
        arr = [1,2,3,4,5,6,7,8,9];
        for(var i=0;i<arr.length;i++)
            {
                if(i==2)
                {
                    // break; yo case ma index number 2 wala ra tespachi ko print hudaina
                    continue; //yesma chahi huncha
                }
                console.log(arr[i]);
            }
  */      

/*ARRAY Methods
    let myArr = ["Fan", "Camera", 9, undefined, true];
    
        console.log(myArr.length); // array ko length dincha

        myArr.pop(); //array ko last element lai nikaldincha
        console.log(myArr);

        myArr.push("Ishan");// array ko last ma hamile push garna khojeko chij lai raakhdincha
        console.log(myArr);

        myArr.shift();// array ko first element lai remove handincha
        console.log(myArr);

        myArr.unshift("Anushka");
        console.log(myArr);

        myArr.sort() // pahila sabai element lai string ma change hancha ani alphabetically sort hancha

        myArr.toString() //sabai element lai string ma convert handincha

        myArr.slice();
        myArr.splice();
 */       

/*String methods in JS

            let myLovelyString = "Ishan is a good boy.";
                 console.log(myLovelyString.length);
                 console.log(myLovelyString.indexOf("good"));
                 console.log(myLovelyString.lastIndexOf("a"));

            console.log(myLovelyString.slice(0,5)); //0 index dekhi 4 samma ko lincha last ko lidaina
            console.log(myLovelyString.replace("good boy","pussy"));
*/

/*Dates and times in JS
    
    let myDate = new Date();
            console.log(myDate);
            console.log(myDate.getTime());//seconds ma time dincha
            console.log(myDate.getFullYear());
            console.log(myDate.getDay());
            console.log(myDate.getHours());
*/

/*Document Object Module (DOM) manipulation

    // document.getElementById('click');
    //document.getElementById('click').style.border = '2px solid blue';

    let elem = document.getElementById('click');
    console.log(elem);

    let elemclass = document.getElementsByClassName("container"); //container class ko sabai lai
                                                                //elemclass ma haldiyo
    console.log(elemclass); 

    //if euta container ko element lai modify hannu cha bhaney tala lekheko code jasari garney 
            elemclass[0].style.background = "";

    //adding a class inside existing class ko laagi 
            elemclass[0].classList.add("ishankoclass");

    //removing a class in an existing class
            elemclass[0].classList.remove("ishankoclass");
    
    
    console.log(elem.innerHTML);//html bhitra ko code
    console.log(elem.innerText);//yo class ma bhaako text dekhaucha

    console.log(elemclass[0].innerHTML); //yesley yo element ko bhitra ko html lai select garcha
    console.log(elemclass[0].innerText);//yesley yo element ko bhitra ko text lai select garcha


    tn = document.getElementsByTagName("div"); //div tag name ma bhaako sabai element lai use garnasakcha
    console.log(tn)

    //creating a paragraph in a division

          createdElement = document.createElement('p');
          createdElement.innerText = "This is newly created paragraph!";
          
          tn[1].appendChild(createdElement); //yo appendchild bhanney command le naya banaidincha

    //replacing an element 
            
    createdElement2 = document.createElement('b');
    createdElement2.innerText = "This is replaced paragraph.";

    tn[1].replaceChild(createdElement2,createdElement);

    //removing an element
     
            removeChild(element);

    document.location;
    document.scripts;
    document.images;
    document.domain;
     
//Selecting using Query

            sel = document.querySelector('.container'); //lets you know about the first container class
            console.log(sel);

            sel = document.querySelectorAll(".container");
                console.log(sel);
*/


//EVENTS in JS

    /*onclick bhanney ni event ho.// 
    // yo chahi html ma button ma onclick bhanney raakhera tesma yo clicked function//
    //rakhera gareko ho 
    function clicked(){
        console.log("The button was clicked");
    }
    */

    /* onload event
        window.onload = function(){ //yo document mnatra haina purai window nai reload gareko ho 
            console.log("The window was reloaded.")
        }
        */
    /* DIFFERENT MOUSE EVENTS
    firstContainer.addEventListener('click',function(){
        console.log("Click Bhayo");
    })

    firstContainer.addEventListener('mouseover',function(){
        console.log("Musa Chiryo");
    })

    firstContainer.addEventListener('mouseout',function(){
        console.log("Musa Bhaago");
    })

    firstContainer.addEventListener('mouseup',function(){
        console.log("Musa maathi gayo");
    })

    firstContainer.addEventListener('mousedown',function(){
        console.log("Musa tala gayo");
    })
    */

    /* euta specific mouse event lai choose garera euta task carry out gareko
    
    firstContainer.addEventListener('click',function(){
        document.querySelectorAll(".container")[1].innerHTML = "<b> We have clicked. </b>"; 
        console.log("Click Bhayo");
    })
    */

    /*an example of mouse event 

        let previousHTML = document.querySelectorAll(".container")[1].innerHTML; 
        firstContainer.addEventListener('mouseup',function()
        {
            document.querySelectorAll(".container")[1].innerHTML = previousHTML;
             console.log("Musa maathi gayo");
        }
        )

        firstContainer.addEventListener('mousedown',function() 
        {
            document.querySelectorAll(".container")[1].innerHTML = "<b> We have clicked. </b>"; 
            console.log("Musa tala gayo");
        }
        )
    */
   //ARU PANI DIFFERENT EVENTS HUNCHA JUST CONSULT GOOGLE//


//setTimeout and setInterval
        
