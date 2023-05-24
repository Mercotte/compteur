// initialiser le compteur
let counter = 0;

// selectionner la value et les btn
const value = document.querySelector('#value');
const btn = document.getElementsByTagName('button');
const arr = Array.from(btn);
const setColor = (counter) => {
  if (counter < 0) {
    return 'red';
  } else if (counter > 0) {
    return 'green';
  } else {
    return 'black';
  }
};

arr.forEach(function (e) {
  e.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('btn-incrementer')) {
      counter++;
    } else if (styles.contains('btn-decrementer')) {
      counter--;
    } else {
      counter = 0;
    }
    value.style.color = setColor(counter);
    value.textContent = counter;
  });
});
