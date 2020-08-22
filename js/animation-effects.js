const title = document.getElementById('title_second');
const why_oddsbit = document.querySelector('.why_oddsbit');
const log_in = document.getElementById('log_in_mob');
const login_form = document.querySelector('.login_form');

title.addEventListener('click', () => {
    why_oddsbit.scrollIntoView({block:'center', behavior:'smooth'})
});
log_in.addEventListener('click', () => {
    login_form.classList.toggle('show_login_form')
});
