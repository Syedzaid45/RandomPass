let password = document.querySelector("#Password");
let copy = document.querySelector(".icon");
let generator = document.querySelector(".Generate");

generator.addEventListener("click" , ()=>{
        let pass = "";
        let Uppcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lowcase = "abcdefghijklmnopqrstuvwxyz";
        let num = "0123456789";
        let sym = "!@#$%^&*()_><{}[]";
        let len = 12 ; 
        let AllChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_><{}[]";

        pass += Uppcase[Math.floor(Math.random()*Uppcase.length)];
        pass += lowcase[Math.floor(Math.random()*lowcase.length)];
        pass += num[Math.floor(Math.random()*num.length)];
        pass += sym[Math.floor(Math.random()*sym.length)];

        while(len > pass.length){
            pass+= AllChar[Math.floor(Math.random()*AllChar.length)];
        }

        password.value = pass;
        

});
copy.addEventListener("click" , ()=>{
    password.select();
    navigator.clipboard.writeText(password.value)
});





