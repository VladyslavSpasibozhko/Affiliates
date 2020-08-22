const slider_node = document.getElementById('slider');

const port_images = {
    images_desk: [
        './images/Partner_Page_baner-1_pr.png',
        './images/Partner_Page_baner-2_pr.png'
    ],
    images_mob: [
        './images/mobile_banners_pg/Partner_page-mob_banner_1_pr.png',
        './images/mobile_banners_pg/Partner_page-mob_banner_2_pr.png'
    ]
};

const eng_images = {
    images_desk: [
        './images/Partner_Page_baner-1_en.png',
        './images/Partner_Page_baner-2_en.png'
    ],
    images_mob: [
        './images/mobile_banners_eng/Partner_page-mob_banner_1_en.png',
        './images/mobile_banners_eng/Partner_page-mob_banner_2_en.png'
    ]
};

let current_lang = {};

class Slider {
    constructor(images, node){
        this.images = images;
        this.node = node;
        this.counter = 0;
        this.timeoutId = '';

        this.prev_image = this.prev_image.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.changeImageClass = this.changeImageClass.bind(this);
    }

    render(){
        this.node.innerHTML = `
              <div class="slider_pages" id="slider_pages"></div> 
              <button class="left" id="to_prev">
                    <img src="./images/arrow/left-arrow.png" alt="left_arrow">
              </button>
              <button class="right" id="to_next">
                    <img src="./images/arrow/arrow-right.png" alt="right_arrow">
              </button>
        `

        this.images.map((item, index) => {
            let image = document.createElement('img');
            image.src = item;
            if (index === 0) image.className='active';
            image.setAttribute('data-id',index);
            this.node.querySelector('.slider_pages').appendChild(image)
        });
        this.node.querySelector('#to_prev').addEventListener('click', this.prev_image);
        this.node.querySelector('#to_next').addEventListener('click', this.nextImage);
    };

    changeImageClass(){
        slider_pages.querySelectorAll('img').forEach(item => {
            if (Number(item.dataset.id) === this.counter){
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
        });
    }

    changeSliderPage(){
        this.timeoutId = setTimeout(()=> {
            this.counter++;
            const length = this.images.length;
            if ( this.counter === length) this.counter = 0;
            this.changeImageClass();
            this.changeSliderPage();
        },5000);

    };

    prev_image(){
        clearTimeout(this.timeoutId);
        if (this.counter === 0) {
            this.counter=this.images.length-1;
        } else {
            this.counter--
        }
        this.changeImageClass();
        this.changeSliderPage();
    }

    nextImage(){
        clearTimeout(this.timeoutId);
        if (this.counter === this.images.length-1) {
            this.counter=0;
        } else {
            this.counter++
        }
        this.changeImageClass();
        this.changeSliderPage();
    }
}

let slider;

window.onload = () => {
    let images = [];

    if (window.outerWidth <= 500){
        images = eng_images.images_mob;
    } else {
        images = eng_images.images_desk;
    }

    slider = new Slider(images, slider_node);
    slider.render();
    slider.changeSliderPage();
};

//translation

//login
const login_title = document.getElementById('login_title');
//login-mob
const joinMob = document.getElementById('join_mob');
const log_in_mob = document.getElementById('log_in_mob');
//login-form-desktop
const log_in_desc = document.getElementById('log_in_desc');
const join_now = document.getElementById('join_now');
const lost_login = document.getElementById('lost_login');
//first-page-content
const get_started_btn = document.getElementById('get_started');
const link_under_slider = document.getElementById('title_first');
const description_oddsbit = document.getElementById('description_oddsbit');
const link_after_slider= document.getElementById('title_second');
///second-page
const title_1 = document.getElementById('bitcoins_title');
const description_1 = document.getElementById('bitcoins_desc');
const title_2 = document.getElementById('lot_event_title');
const description_2 = document.getElementById('lot_event_desc');
const title_3 = document.getElementById('multi_language_title');
const description_3 = document.getElementById('multi_language_desc');
const revenue_title = document.getElementById('revenue_title');
const rev_title_1 = document.getElementById('rev_title_1');
const rev_title_2 = document.getElementById('rev_title_2');
///footer
const language_select = document.getElementById('lang_sel');
const contacts_title = document.getElementById('cont_title');
const info_footer = document.getElementById('info_footer');

const eng = {
    title_block_login: 'Please Login into Your Account',
    join_mob:'Join',
    log_in_mob:'Login',
    log_in_desc:'Login',
    join_now:'Join Now',
    lost_login:'Lost Login',
    get_started_btn:'Get Started',
    link_slider: 'Who we are',
    description_Oddsbit: 'Oddsbit – a breath of fresh air in the world of modern betting. Thinking of us, imagine Elon Musk or Steve Jobs. We have similar ambitions, a love for innovation and a commitment to excellence. In short – we are the best.\n' +
        'Oddsbit Platform has access to 80 kinds of sports with more than 300,000 live matches annually and more than 150 different betting suggestions for different markets. You can also play at the casino and live casino with products from the best creators on the market. Novelties of the industry and the best hits – all of this is already here. Our product supports 20 languages, as well as desktop and mobile versions of the site.\n' +
        'The cryptogambling market is still developing, and its potential has not yet been fully revealed. Conquer new horizons together with Oddsbit Affiliate Program to become discoverers, not followers.\n',
    link_under_description: 'Why Oddsbit',
    title_1:'Earn bitcoins',
    description_1:'All bets are exclusively in cryptocurrency',
    title_2:'A lot of events',
    description_2:'Over 140 000 live events per year',
    title_3:'Multi-language',
    description_3:'20 language versions are available on the site',
    commission_title:'Revenue Share',
    com_title_1:'Number of players',
    com_title_2: 'Commission percentage',
    language_select:'Language',
    contacts_title:'Contact us',
    info_footer:'©2019 oddsbit.io All rights reserved.'
};

const portugal = {
    title_block_login: 'Faça o login na sua conta, por favor',
    join_mob:'Juntar',
    log_in_mob:'Entrar',
    log_in_desc: 'Entrar',
    join_now:'Inscreva-se agora',
    lost_login:'Login perdido',
    get_started_btn:'Introdução',
    link_slider: 'Quem nós somos',
    description_Oddsbit: 'Oddsbité uma lufada de ar fresco no mundo de apostas de hoje em dia. Quem somos nós? Somos como Elon Musk ou Steve Jobs. Nós temos ambições similares, uma paixão pela novidade e inovações, bem como uma dedicação à excelência. Em outras palavras, nós somos simplesmente os melhores.\n' +
        'A plataforma Oddsbit tem o acesso a 80 esportes com mais de 300.000 partidas ao vivo anualmente e mais de 150 diferentes dicas de apostas para vários mercados. Você também pode jogar no casino e casino ao vivo, usando produtos dos melhores criadores no mercado. Todas as novidades da indústria e melhores dicas já estão aqui esperando por você. Nosso produto suporta 20 idiomas, bem como as versões desktop e móvel do site.\n' +
        '    O mercado de cripto jogos está desenvolvendo-se até hoje e o potencial dele ainda não foi realizado completamente. Descubra novos horizontes junto com o Programa de Afiliado da Oddsbit para se tornar descobridores, não seguidores.\n',
    link_under_description: 'Por que OddsBit',
    title_1:'Ganhar bitcoins',
    description_1:'Todas as apostas são feitas exclusivamente na criptomoeda',
    title_2:'Grande variedade de eventos',
    description_2:'Mais de 140 000 eventos ao vivo por ano',
    title_3:'Quem nós somos',
    description_3:'Versões em 20 idiomas estão disponíveis no site',
    commission_title:'Compartilhamento de receita',
    com_title_1:'Número de jogadores',
    com_title_2: 'Porcentagem da Comissão',
    language_select:'Língua',
    contacts_title:'Contate-nos',
    info_footer:'©2019 oddsbit.io Todos os direitos reservados.'
};

const change_language = (obj) => {
    login_title.innerText = obj.title_block_login;
    joinMob.innerText = obj.join_mob;
    log_in_mob.innerText = obj.log_in_mob;
    join_now.innerText = obj.join_now;
    log_in_desc.innerText = obj.log_in_desc;
    lost_login.innerText = obj.lost_login;
    get_started_btn.innerText = obj.get_started_btn;
    link_under_slider.innerText = obj.link_slider;
    description_oddsbit.innerText = obj.description_Oddsbit;
    link_after_slider.innerText = obj.link_under_description;
    title_1.innerText = obj.title_1;
    description_1.innerText = obj.description_1;
    title_2.innerText = obj.title_2;
    description_2.innerText = obj.description_2;
    title_3.innerText = obj.title_3;
    description_3.innerText = obj.description_3;
    revenue_title.innerText = obj.commission_title;
    rev_title_1.innerText = obj.com_title_1;
    rev_title_2.innerText = obj.com_title_2;
    language_select.innerText = obj.language_select;
    contacts_title.innerText = obj.contacts_title;
    info_footer.innerText = obj.info_footer;

    if (obj.join_now !== 'Join Now'){
        get_started_btn.classList.add('port_lang');
    } else {
        get_started_btn.classList.remove('port_lang');
    }
};

window.onresize = () => {
    let images = [];

    if (current_lang === null) {
        if (window.outerWidth <= 500){
            images = eng_images.images_mob;
        } else {
            images = eng_images.images_desk;
        }
    } else {
        if (window.outerWidth <= 500){
            images = current_lang.images_mob;
        } else {
            images = current_lang.images_desk;
        }
    }

    slider_node.innerHTML = '';
    slider.images = images;
    slider.render()
};

const changeLanguage = (obj) => {
    current_lang = {...obj};

    let images = [];

    if (window.outerWidth <= 500){
        images = current_lang.images_mob;
    } else {
        images = current_lang.images_desk;
    }

    slider_node.innerHTML = '';
    if (slider !== undefined  ) {
        slider.images = images;
        slider.render()
    }
};

let ddData = [
    {
        text: "English",
        value: 'eng',
        selected: true,
        description: "",
        imageSrc: "./images/gb.png"
    },
    {
        text: "Portugal",
        value: 'pg',
        selected: false,
        description: "",
        imageSrc: "./images/portugal.png"
    }
];

$('#myDropdown').ddslick({
    data: ddData,
    width: 100,
    height: 50,
    background: '#399a9e',
    border:'none',
    clickOffToClose:false,
    embedCSS: false,
    imagePosition: "right",
    selectText: "English",
    onSelected: function (data) {
        if (data.selectedData.value === 'eng'){
            changeLanguage(eng_images);
            change_language(eng);
        } else {
            changeLanguage(port_images);
            change_language(portugal);
        }
    }
});
$('#mobile_language').ddslick({
    data: ddData,
    width: 50,
    height: 50,
    background: 'transparent',
    border:'none',
    embedCSS: false,
    imagePosition: "right",
    selectText: "Language",
    onSelected: function (data) {
        if (data.selectedData.value === 'eng'){
            changeLanguage(eng_images);
            change_language(eng);
        } else {
            changeLanguage(port_images);
            change_language(portugal)
        }
    }
});



