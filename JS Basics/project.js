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
let d;
let htime;
let mtime;
let stime;

setInterval(() => {
     d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30*htime + mtime/2 ;
    mrotation = 6*mtime;
    srotation = 6*stime;
    
    hour1.style.transform = ` rotate(${hrotation}deg)`;
    minute1.style.transform = ` rotate(${mrotation}deg)`;
    second1.style.transform = ` rotate(${srotation}deg)`;
}, 1000);