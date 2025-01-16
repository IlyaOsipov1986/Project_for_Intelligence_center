import contactsEmail from '../src/assets/img/icons/contactsEmail.svg';
import contactsLocation from '../src/assets/img/icons/contactsLocation.svg';
import contactsPhone from '../src/assets/img/icons/contactsPhone.svg';

export const config = {}

export const footerData = [
    {
        id: 0,
        icon: contactsEmail,
        title: 'Электронный адрес',
        text: 'Для официальных обращений:',
        link: 'aicenter@spbu.ru',
        addText: ''
    },
    {
        id: 1,
        icon: contactsPhone,
        title: 'Телефон',
        text: '+7(812)363 60 00',
        link: '',
        addText: 'Добавочный номер: 6056'
    },
    {
        id: 2,
        icon: contactsLocation,
        title: 'Адрес',
        text: 'Россия, Санкт-Петеребург',
        link: '',
        addText: 'Университетская наб. 7-9, 199034'
    }
]