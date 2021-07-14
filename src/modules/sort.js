export default () => {
  const draggables = document.querySelectorAll('.fa-ellipsis-v');
  const containers = document.querySelectorAll('.droppable');
  draggables.forEach((e) => {
    e.addEventListener('dragstart', () => {
      e.classList.add('dragging');
    });
    e.addEventListener('dragend', () => {
      e.classList.remove('dragging');
    });
  });
};
