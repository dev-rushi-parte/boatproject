

  function on() {
      var a=document.getElementById('output').textContent='Rs.1000.00';
    document.querySelector(".onone").style.background="rgb(225,25,37)";
   
     var b= document.getElementById('change')
     b.setAttribute('src','https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Gift-Card-1000_720x.png?v=1615270910')
    
    
}

 function on1() {
      var a=document.getElementById('output').textContent='Rs.500.00';
      
    document.querySelector(".ontwo").style.background="rgb(225,25,37)";
     var b= document.getElementById('change')
     b.setAttribute('src','https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Gift-Card-500_720x.png?v=1615270910')
    
   
      
    
}
function on2() {
      var a=document.getElementById('output').textContent='Rs.2000.00';
    document.querySelector(".onthree").style.background="rgb(225,25,37)";
     var b= document.getElementById('change')
     b.setAttribute('src','https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Gift-Card-2000_720x.png?v=1615270911')
    
   
      
    
}
function on3() {
      var a=document.getElementById('output').textContent='Rs.5000.00';
    document.querySelector(".onfour").style.background="rgb(225,25,37)";
     var b= document.getElementById('change')
     b.setAttribute('src','https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Gift-card-5000_720x.png?v=1615270911')
    
   
      
    
}
document.querySelector("#account").addEventListener("click",function(){
  window.location.href="sign_in.html";
});
document.querySelector("#bundle_offer").addEventListener("click",function(){
  window.location.href="bundles_of_joy.html";
});
document.querySelector("#daily_deals").addEventListener("click",function(){
  window.location.href ="daily_deals.html"
});
document.querySelector(".home").addEventListener('click',function(){
  window.location.herf= "home_page.html"
});

document.querySelector("#cart").addEventListener("click",function(){
  window.location.href ="cart_page.html"
});