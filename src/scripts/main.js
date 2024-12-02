'use strict';

const body = document.querySelector('body');

function succesMessage(promiseNumber) {
  return `${promiseNumber} promise was resolved`;
}

function rejectMessage(promiseNumber) {
  return `${promiseNumber} promise was rejected`;
}

const successHandler = (message) => {
  const div = document.createElement('div');

  div.setAttribute('data-qa', 'notification');
  div.classList.add('success');
  div.innerText = `${succesMessage(message)}`;

  body.append(div);
};

const errorHandler = (message) => {
  const div = document.createElement('div');

  div.setAttribute('data-qa', 'notification');
  div.classList.add('error');
  div.innerText = `${rejectMessage(message)}`;

  body.append(div);
};

const firstPromise = new Promise((resolve, reject) => {
  document.addEventListener('click', () => {
    resolve(succesMessage('First'));
  });

  setTimeout(() => {
    reject(new Error(rejectMessage('First'), 3000));
  });
});

firstPromise.then(successHandler('First')).catch(errorHandler('First'));
