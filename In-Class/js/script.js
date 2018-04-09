var titleTip = 'Charcter limit: ';
var titleMax = 'Max limit reached!';
var showToolTip = false;

function get(element) {
  return document.getElementById(element)
}

function showPosition (event) {
  var screenX = get('screenX'),
      screenY = get('screenY'),
      pageX = get('pageX'),
      pageY = get('pageY'),
      clientX = get('clientX'),
      clientY = get('clientY');

  screenX.textContent = event.screenX;
  screenY.textContent = event.screenY;

  pageX.textContent = event.pageX;
  pageY.textContent = event.pageY;

  clientX.textContent = event.clientX;
  clientY.textContent = event.clientY;

}

window.addEventListener('mousemove', showPosition);
