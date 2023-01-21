const box = document.querySelector('#draggable-box');
let boxBounds = box.getBoundingClientRect();

let dragging = false;

box.addEventListener('mousedown', () => {
  boxBounds = box.getBoundingClientRect();
  console.log(boxBounds);
  dragging = true;
});

box.addEventListener('mouseup', () => {
  dragging = false;
});

box.addEventListener('mousemove', (e) => {
  const mouseDown = e.which === 1;

  if (dragging && mouseDown) {

    // boxBounds = box.getBoundingClientRect();
    // box.style.left = `${e.clientX - boxBounds.left}px`;
    // box.style.top = `${e.clientY - boxBounds.top}px`;
    box.style.left = `${e.clientX - 40}px`;
    box.style.top = `${e.clientY - 40}px`;
  }
});
