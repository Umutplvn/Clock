const hour= document.getElementById("hour")
const minute=document.getElementById("minute")
const seconds=document.getElementById("sec")


const clock= setInterval(()=>{

    const dateNow= new Date()
    let hr= dateNow.getHours()
    let min=dateNow.getMinutes()
    let sec=dateNow.getSeconds()


hr = hr.toString().padStart(2,"0") 
min = min.toString().padStart(2,"0") 
sec = sec.toString().padStart(2,"0") 


hour.innerText=hr
minute.innerText=min
seconds.innerText=sec

})