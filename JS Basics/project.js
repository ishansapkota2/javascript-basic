//FOR LOCAL TIME i.e KATHMANDU
let a;
let time;

setInterval(() => {  
a = new Date();
time = a.toLocaleTimeString({timeStyle:"long",hourCycle:"h24"});
document.getElementById("time").innerHTML = time;
}, 1000);


//FOR LONDON TIME

let a1;
let time1;

setInterval(() => {
    a1 = new Date();
    time1 = a1.toLocaleString("en-Us",{timeZone:"Europe/London",timeStyle:"full",hourCycle:"h24"});
    document.getElementById("londonTime").innerHTML = "LONDON TIME:<br>"+ time1;
}, 1000);

/*ALTERNATIVE METHOD (1 LINE MAI HUNEY)

let a1 = function(){
    document.getElementById("first_time").innerHTML = new Date().toLocaleTimeString('en-US',{timezone:"Europe/London",timeStyle:"full",hourCycle:"h24"});
};
a1();
setInterval(a1,1000);
*/

//FOR EASTERN STANDARD TIME

let a2;
let time2;

setInterval(() => {
    a2 = new Date();
    time2 = a2.toLocaleTimeString("en-Us",{timeZone:"America/New_York",timeStyle:"full",hourCycle:"h24"});
    document.getElementById("newyorkTime").innerHTML = "<br>EASTERN STANDARD TIME :<br>"+ time2;
}, 1000);

//FOR PACIFIC STANDARD TIME

let a3;
let time3;

setInterval(() => {
a3 = new Date();
time3 = a3.toLocaleTimeString("en-US",{timeZone:"America/Los_Angeles",timeStyle:"full",hourCycle:"h24"});
document.getElementById("laTime").innerHTML = "<br>LA TIME:<br>" + time3;
}, 1000);

//FOR ROME TIME

let a4;
let time4;

setInterval(() => {
a4 = new Date();
time4 = a4.toLocaleTimeString("en-US",{timeZone:"Europe/Rome",timeStyle:"full",hourCycle:"h24"});
document.getElementById("romeTime").innerHTML = "<br>ROME TIME: <br>" + time4;
}, 1000);

//FOR NEPAL ANALOG CLOCK
let d1;
let htime1;
let mtime1;
let stime1;

setInterval(() => {
     d1 = new Date();
    htime1 = d1.getHours();
    mtime1 = d1.getMinutes();
    stime1 = d1.getSeconds();

    hrotation1 = 30*htime1 + mtime1/2 ;
    mrotation1 = 6*mtime1;
    srotation1 = 6*stime1;
    
    hour1.style.transform = ` rotate(${hrotation1}deg)`;
    minute1.style.transform = ` rotate(${mrotation1}deg)`;
    second1.style.transform = ` rotate(${srotation1}deg)`;
}, 1000);

// FOR LONDON ANALOG CLOCK

let d2;
let htime2;
let mtime2;
let stime2;

setInterval(() => {

d2 = new Date();
htime2 = d2.toLocaleString("en-US",{timeZone:"Europe/London",hour:"2-digit",hour12: false});
mtime2 = d2.toLocaleString("en-US",{timeZone:"Europe/London",minute:"numeric"});
stime2 = d2.toLocaleString("en-US",{timeZone:"Europe/London",second:"numeric"}); 

hrotation2 = 30*htime2 + mtime2/2;
mrotation2 = 6*mtime2;
srotation2 = 6*stime2;

hour2.style.transform = ` rotate(${hrotation2}deg)`;
minute2.style.transform = ` rotate(${mrotation2}deg)`;
second2.style.transform = ` rotate(${srotation2}deg)`;

}, 1000);


//ANALOG CLOCK OF NEW YORK

let d3;
let htime3;
let mtime3;
let stime3;

setInterval(() => {

d3 = new Date();
htime3 = d3.toLocaleString("en-US",{timeZone:"America/New_York",hour:"2-digit",hour12: false});
mtime3 = d3.toLocaleString("en-US",{timeZone:"America/New_York",minute:"2-digit"});
stime3 = d3.toLocaleString("en-US",{timeZone:"America/New_York",second:"2-digit"});

hrotation3 = 30*htime3 + mtime3/2;
mrotation3 = 6*mtime3;
srotation3 = 6*stime3;

hour3.style.transform = `rotate(${hrotation3}deg)`;
minute3.style.transform = `rotate(${mrotation3}deg)`;
second3.style.transform = `rotate(${srotation3}deg)`;
    
}, 1000);



// DIGITAL CLOCK OF LA

    let d4;
    let htime4;
    let mtime4;
    let stime4;

    setInterval(() => {

    d4 = new Date();
    htime4 = d4.toLocaleString("en-US",{timeZone:"America/Los_Angeles",hour:"2-digit",hour12: false});
    mtime4 = d4.toLocaleString("en-US",{timeZone:"America/Los_Angeles",minute:"2-digit"});
    stime4 = d4.toLocaleString("en-US",{timeZone:"America/Los_Angeles",second:"2-digit"});

    document.getElementById("hour4").innerHTML = htime4;
    document.getElementById("minute4").innerHTML = mtime4;
    document.getElementById("second4").innerHTML = stime4;
}, 1000);


//ANALOG FOR ROME CLOCK

let d5;
let htime5;
let mtime5;
let stime5;

setInterval(() => {

d5= new Date();

htime5 = d5.toLocaleString("en-US",{timeZone:"Europe/Rome",hour:"2-digit",hour12: false});
mtime5 = d5.toLocaleString("en-US",{timeZone:"Europe/Rome",minute:"2-digit"});
stime5 = d5.toLocaleString("en-US",{timeZone:"Europe/Rome",second:"2-digit"});

hrotation5 = 30*htime5 + mtime5/2;
mrotation5 = 6*mtime5;
srotation5 = 6*stime5;

hour5.style.transform = `rotate(${hrotation5}deg)`;
minute5.style.transform = `rotate(${mrotation5}deg)`;
second5.style.transform = `rotate(${srotation5}deg)`;
    
}, 1000);