// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

// На що буде звертати увагу ментор при перевірці:

// На елементі input#name-input прослуховується подія input
// Під час набору тексту в інпуті його поточне значення підставляється в span#name-output як ім’я для привітання
// Значення в інпуті очищене від пробілів по краях
// Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous"

const inputName = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');
inputName.addEventListener('input', enterName);

function enterName(event) {
  const input = event.currentTarget;

  userName.textContent = input.value.trim() || 'Anonymous';

  // =============================Кожен перший літерал з великої літери=======================================
  // userName.textContent =
  //   input.value.trim().slice(0, 1).toUpperCase() + input.value.slice(1).trim();

  // if (input.value.trim() === '') {
  //   userName.textContent = 'Anonymous';
  // } else if (input.value.trim().includes(' ')) {
  //   userName.textContent = userName.textContent
  //     .split(' ')
  //     .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
  //     .join(' ');
  // }
  // ===================================================================
}
