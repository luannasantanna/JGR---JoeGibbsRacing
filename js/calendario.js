const calendarioNascar = document.getElementById('calendario-nascar');
const calendarioXfinity = document.getElementById('calendario-xfinity');

const logoNascar = document.getElementById('nascar');
const logoXfinity = document.getElementById('xfinity');

const tagCupSeries = document.querySelector('.tag__cup');
const tagXfinity = document.querySelector('.tag__xfinity');

logoNascar.addEventListener('click', (e) => {
    e.preventDefault();
    calendarioNascar.classList.remove('display-none');
    calendarioXfinity.classList.add('display-none');
    tagCupSeries.classList.remove('display-none');
    tagXfinity.classList.add('display-none');
});

logoXfinity.addEventListener('click', (e) => {
    e.preventDefault();
    calendarioNascar.classList.add('display-none');
    calendarioXfinity.classList.remove('display-none');
    tagCupSeries.classList.add('display-none');
    tagXfinity.classList.remove('display-none');
    tagXfinity.classList.add('link-ativo');
});

