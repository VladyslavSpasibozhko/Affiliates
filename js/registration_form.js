// buttons
const button_get_started = document.getElementById('get_started');
const join_now_desk = document.getElementById('join_now');
const join_mob = document.getElementById('join_mob');
const btn_close_form = document.getElementById('close_form');
const btn_close_form_top = document.getElementById('close_window');
const btn_submit = document.getElementById('submit');

// bussiness type
const business_type = document.getElementById('business_type');
const corporate = document.querySelector('.corporate');
const individual = document.querySelector('.individual');

// other_node
const registration_form = document.querySelector('.registration_form_outer');
const success_form = document.getElementById('success_form');
const mainForm = document.getElementById('main_form');
const error = document.querySelector('.error');
const close_success_form = document.getElementById('close_success_form');

const showFrom = () => {
    registration_form.classList.add('active');
};

button_get_started.addEventListener('click', showFrom);
join_now_desk.addEventListener('click', showFrom);
join_mob.addEventListener('click', showFrom);

const close_form = (e) => {
    e.preventDefault();
    registration_form.classList.remove('active');
};
btn_close_form_top.addEventListener('click', close_form);
btn_close_form.addEventListener('click', close_form);
close_success_form.addEventListener('click', close_form);

const change_bussiness_type = () => {
    if (business_type.value === 'corporate') {
        corporate.classList.add('current_bsn_type');
        individual.classList.remove('current_bsn_type');
        individual.querySelector('input').removeAttribute('required');
        corporate.querySelector('input').setAttribute('required', 'true');
    }
    if (business_type.value === 'individual') {
        individual.classList.add('current_bsn_type');
        corporate.classList.remove('current_bsn_type');
        corporate.querySelector('input').removeAttribute('required');
        individual.querySelector('input').setAttribute('required', 'true');
    }
    if (business_type.value === ''){
        individual.classList.remove('current_bsn_type');
        corporate.classList.remove('current_bsn_type');
    }

};
business_type.addEventListener('change', change_bussiness_type);

const check_form_valid = (e) => {
    const input_elem = mainForm.querySelectorAll('input');
    const select_elem = mainForm.querySelector('select');
    const conf_password = mainForm.elements.conf_password;
    const password = mainForm.elements.password;

    let form_elem = Array.from(input_elem).filter(item => {
         if(item.type !== 'checkbox') {
             return item
        }
    });

    form_elem.map(item => {

        if (select_elem.value === '') {
            select_elem.parentNode.classList.add('error_select');
            select_elem.onclick = (e) => {
              e.target.parentNode.classList.remove('error_select')
            };
        }

        if (!item.validity.valid) {
            item.parentNode.classList.add('error');
            item.parentNode.onclick = (e) => {
                e.target.classList.remove('error');
            };
            item.onclick = ( e ) => {
              e.target.parentNode.classList.remove('error')
            };
        }
    });

    if(conf_password.value !== password.value) {
        conf_password.parentNode.classList.add('error');
        conf_password.parentNode.onclick = () => {
            conf_password.parentNode.classList.remove('error');
        };
        return
    }

    if (mainForm.checkValidity()){
        success_form.classList.add('active');
    }
};
btn_submit.addEventListener('click', check_form_valid);

$(function(){
    $("#birthday").datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        changeYear: true,
        yearRange: '1930:2019'
    });
});



