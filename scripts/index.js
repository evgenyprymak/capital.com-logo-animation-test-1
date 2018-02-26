var animData_logo = {
  container: document.getElementById('capital-logo'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'data.json'
}


var animation_demo = bodymovin.loadAnimation({
  container: document.getElementById('demo'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'data2.json'
})


var anim_logo = bodymovin.loadAnimation(animData_logo);

anim_logo.frameRate = 2;
