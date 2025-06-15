function typeEffect(element, text, speed = 100) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  element.innerHTML = "";
  typing();
}

function veranderTitel() {
  const titel = document.querySelector('h1');
  titel.innerText = "Bedankt voor het klikken!";
}

function verstuurFormulier(event) {
  event.preventDefault();
  alert("Bedankt voor je bericht!");
}

const elementen = document.querySelectorAll('.fade-in');

function checkZichtbaarheid() {
  elementen.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkZichtbaarheid);
window.addEventListener('load', () => {
  checkZichtbaarheid();
  const titel = document.querySelector('h1');
  typeEffect(titel, "Welkom op mijn website!", 80);
});

