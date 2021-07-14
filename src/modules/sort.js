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
  containers.forEach((e) => {
    e.addEventListener('dragover', (element) => {
      element.preventDefault();
      const draggedItem = document.querySelector('.dragging');
      e.appendChild(draggedItem);
    });
  });
};
