const form = document.getElementById('main_form');
const submit = document.getElementById('submit');
const agree_input = document.getElementById('agree_input');
//passwords
const conf_password = form.elements.conf_password;
const passoword = form.elements.password;

let data = {

};

form.addEventListener('change', ( ) => {
    Array.from(form.elements).map(item => {
        if (item.name !== ''){
            if ( item.name ==='agreement'){
               return data[item.name] = item.checked;
            }
            data[item.name] = item.value;
        }
    });
});

submit.onclick = (e) => {
    e.preventDefault();
    if (form.checkValidity() && passoword.value === conf_password.value) {
        fetch('https://example.com',{
            method:'POST',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        });
    }
};
