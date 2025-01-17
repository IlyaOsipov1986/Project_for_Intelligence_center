import contactsEmail from '../src/assets/img/icons/contactsEmail.svg';
import contactsLocation from '../src/assets/img/icons/contactsLocation.svg';
import contactsPhone from '../src/assets/img/icons/contactsPhone.svg';
import tgIconSqure from '../src/assets/img/icons/tgIconSqure.svg';
import tgIconSqureRed from '../src/assets/img/icons/tgIconSqureRed.svg';
import vkIconSqure from '../src/assets/img/icons/vkIconSqure.svg';
import vkIconSqureRed from '../src/assets/img/icons/vkIconSqureRed.svg';

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

export const titleTabsCalendarCentre = [
    {
        name: 'ПАРТНЕРАМ'
    },
    {
        name: 'ИССЛЕДОВАНИЯ'
    },
    {
        name: 'ОБРАЗОВАНИЕ'
    }
]

export const calendarEventsData = [
    {
        id: 0,
        date: '24.12',
        title: 'Безградиентные методы оптимизации для функций с гельдеровым градиентом',
        speaker: 'Шибаев Иннокентий Андреевич (Яндекс, выпускник аспирантуры МФТИ)'
    },
    {
        id: 1,
        date: '26.12',
        title: 'Оптимизация без границ: как обучать большие модели эффективнее',
        speaker: 'Шибаев Иннокентий Андреевич (Яндекс, выпускник аспирантуры МФТИ)'
    }
]

export const socialNetworksCalendarData = [
    {
        img: tgIconSqure,
        imgHover: tgIconSqureRed
    },
    {
        img: vkIconSqure,
        imgHover: vkIconSqureRed
    }
]