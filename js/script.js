 let heyLogo = 'https  ://www.google.com/url?sa=i&url=https%3A%2F%2Fapps.microsoft.com%2Fdetail%2F9pf08ljw7gw2%3Fhl%3Den-us%26gl%3DUS&psig=AOvVaw0eaom3_JhWvvNxQszTGbeW&ust=1717099686144000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLiZ-ZXVs4YDFQAAAAAdAAAAABAE';
 let listOfLinks = [  "www.facebook.com" , "www.twitter.com" , "www.instgram.com" ,"www.ahmed.com","www.shoieb.com","www.firfox.com" ,"www.linkedin.com" ];

 let changeSkill = 0.033333333;
let changeTranslate = 0.7;
 document.addEventListener('DOMContentLoaded',function(){
   let stack = document.getElementById('stack');
   for(i=0 ; i< listOfLinks.length ; i++){
      let div = document.createElement("div");
     
      div.classList.add("blockElement");
      div.innerHTML = `
      <div class="content"> 
      <img src="../imgs/heylogo.png" />
      <div><h3>${listOfLinks[i]}<h3/><p> our dicreption is<p/><div/>`
      let reverseIndex = listOfLinks.length-1-i;
      div.style.transform=`scale(${1-(reverseIndex)* changeSkill}) translateY(-${changeTranslate*reverseIndex}rem)`
     //  first div should have a largest scale and larged transform y
     
  
      stack.appendChild(div);
  
   }
   stack.addEventListener('click' , function(e){ 
      e.stopPropagation();
      let blocks= this.querySelectorAll('.blockElement');
      blocks.forEach(function(block,i){
         let reverseIndex = blocks.length-1-i;
         block.style.transform = `rotate(${reverseIndex*1.1}deg) translate(-${reverseIndex*0.2}rem , -${reverseIndex*4}rem)`
   
      })
    })
    document.addEventListener('click', function(e){
      let blocks= this.querySelectorAll('.blockElement');
      blocks.forEach(function(block,i){  
         let reverseIndex = blocks.length-1-i;
         block.style.transform = `scale(${1-(reverseIndex* changeSkill)

         }) translateY(-${changeTranslate*reverseIndex}rem)`;
      }) 
    })
})
 
