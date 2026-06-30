const form= document.querySelector('form');
 form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector("#Height").value)
    const weight=parseInt(document.querySelector("#Weight").value)
     const result=document.querySelector("#result")

     if(height===''|| height<0|| isNaN(height)){
        result.innerHTML="Height is not valid"
     }
     else if(weight===''|| weight<0|| isNaN(weight)){
        result.innerHTML="Weight is not valid"
     }
     const bmi=(weight/((height*height)/10000)).toFixed(2)
     result.innerHTML=`${bmi}`
     if(result.innerHTML>24.9){
        result.style.color="red"
     }
 })