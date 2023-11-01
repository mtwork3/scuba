'use strict';

{
  const menu = document.querySelector('.menu');
  const hidden = document.getElementById('hidden');
  menu.addEventListener('click', (e) => {
    e.preventDefault();
    hidden.classList.toggle('hidden');

  });

  const menu2 = document.querySelector('.menu2');
  const hidden2 = document.getElementById('hidden2');
  menu2.addEventListener('click', (e) => {
    e.preventDefault();
    hidden2.classList.toggle('hidden');

  });



}

