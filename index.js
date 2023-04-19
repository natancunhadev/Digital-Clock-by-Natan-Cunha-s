    /*This is a JavaScript function that declares four variables using the 
    document object's "getElementById" function. These variables are used 
    together to dynamically update the values displayed in HTML elements 
    according to the current system time.*/
    
    const hourEl = document.getElementById("hour");
    const minuteEl = document.getElementById("minutes");
    const secondEl = document.getElementById("seconds");
    const ampmEl = document.getElementById("ampm");

    
    /*This is a JavaScript function called "updateClock" that is used to 
    update the display of a digital clock. -  Esta é uma função JavaScript 
    chamada "updateClock" que é utilizada para atualizar a exibição de um relógio digital.*/
    
    function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }
   
    
    /*This JavaScript code is an extension of the "updateClock()" function that updates the hour,
     minute, second and AM/PM values in the HTML elements associated with the "hour", "minutes", 
     "seconds" and "ampm" identifiers, respectively .*/
    
     h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);
    }

    updateClock();