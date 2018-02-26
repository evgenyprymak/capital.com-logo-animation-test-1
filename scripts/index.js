var animData_logo = {
  container: document.getElementById('capital-logo'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'data.json'
}
var animData_demo ={
  container: document.getElementById('demo'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'data2.json'
}


var anim_logo = bodymovin.loadAnimation(animData_logo);
var anim_demo = bodymovin.loadAnimation(animData_demo);


anim_logo.addEventListener("click", myFunction);

function myFunction() {
    alert ("Hello World!");
}
