let qrtxt = document.getElementById("qrtext");
let imgBox = document.getElementById("imgBox");
let qrimage = document.getElementById("qrimg")

function generator(){
    if(qrtxt.value.length > 0){
        qrimage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtxt.value ;
        imgBox.classList.add("show-img");
    }
    else{
        qrtxt.classList.add("error");
        setTimeout(()=>{
            qrtxt.classList.remove("error");
        },1000)
    }
}