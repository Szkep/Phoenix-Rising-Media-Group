
const scrollButton = document.getElementById('scrollButton');


scrollButton.addEventListener('click', () => {

  const targetElement = document.getElementById('targetElement');

  targetElement.scrollIntoView({ behavior: 'smooth' });
});

const scrollButton2 = document.getElementById('scrollButton2');


scrollButton2.addEventListener('click', () => {

  const targetElement2 = document.getElementById('targetElement2');

  targetElement2.scrollIntoView({ behavior: 'smooth' });
});