var animation = bodymovin.loadAnimation({
  container: document.getElementById('capital-logo'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
})
var animation_demo = bodymovin.loadAnimation({
  container: document.getElementById('demo'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data2.json'
})
