addEventListener('load',function(){
    let name = document.getElementsByClassName('name');
    let intro = this.document.getElementsByClassName('intro');
    let pic = [document.getElementById('per1'),document.getElementById('per2'),document.getElementById('per3'),document.getElementById('per4'),document.getElementById('per5')];
    let b = [document.getElementById('b1'),document.getElementById('b2'),document.getElementById('b3'),document.getElementById('b4'),document.getElementById('b5')];
    let black = document.getElementById('black');
    let opt = document.getElementById('opt');
    let head_word= document.getElementById('head_word');
    let count = 0;
    let burg = false;
    /*name[1].addEventListener('click',()=>{
        this.alert("ad");
    })*/
    
   /*
   $(pic[1]).click(()=>{
       this.alert("asd");
   })
   */
    for(let i = 0;i < 5;i++){
        $(name[i]).click(() => {
            count = i;
            $(b[i]).css("visibility","visible");
            $(pic[i]).css("visibility","visible");
            $(black).css("visibility","visible");
            $(pic[i]).animate({
                opacity: "100%", 
                top: "5%",
                left: "5%",
            }, 1000)
            //this.alert(count);
        })
    }
    for(let i=0 ; i<5 ; i++){
        b[i].addEventListener('click',()=>{
            pic[i].style.visibility="hidden";
            pic[i].style.opacity="0%";
            b[i].style.visibility="hidden";
            black.style.visibility="hidden"
        })
    }
    black.addEventListener('click',()=>{
        pic[count].style.visibility="hidden";
        pic[count].style.opacity="0%";
        b[count].style.visibility="hidden";
        black.style.visibility="hidden"
    })
    $('.burger').click(() => {
        burg=!burg;
        if(!burg){
            $(opt).css("visibility","visible");
            $(head_word).css("visibility","visible");
        }
        else{
            $(opt).css("visibility","hidden");
            $(head_word).css("visibility","hidden");
        }
    })
})