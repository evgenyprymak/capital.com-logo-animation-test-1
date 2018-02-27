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
  autoplay: false,
  path: 'data2.json'
}


var anim_logo = bodymovin.loadAnimation(animData_logo);
var anim_demo = bodymovin.loadAnimation(animData_demo);





anim_logo.addEventListener("enterFrame", f_demo_delay);

var v_demo_delay = 500;

function f_demo_delay() {
    timeoutId = setTimeout(f_demo_go, v_demo_delay)
}
function f_demo_go() {
  anim_demo.play();
}
