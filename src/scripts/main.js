/* eslint-disable prefer-promise-reject-errors */
'use strict';

const body = document.querySelector('body');

const notification = (message, type) => {
  const div = document.createElement('div');

  div.setAttribute('data-qa', 'notification');
  div.classList.add(type === 'success' ? 'success' : 'error');
  div.innerText = message;

  body.appendChild(div);
};

const firstPromise = new Promise((resolve, reject) => {
  document.addEventListener('click', () => {
    resolve('First promise was resolved');
  });

  setTimeout(() => {
    reject('First promise was rejected');
  }, 3000);
});

const secondPromise = new Promise((resolve) => {
  document.addEventListener('click', (e) => {
    if (e.button === 0 || e.button === 2) {
      resolve('Second promise was resolved');
    }
  });

  // document.addEventListener('contextmenu', () => {
  //   resolve(succesMessage('Second'));
  // });
});

firstPromise
  .then((message) => notification(message, 'success'))
  .catch((message) => notification(message, 'error'));

secondPromise.then((message) => notification(message, 'success'));
