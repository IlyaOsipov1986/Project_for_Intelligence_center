import contactsEmail from '../src/assets/img/icons/contactsEmail.svg';
import contactsLocation from '../src/assets/img/icons/contactsLocation.svg';
import contactsPhone from '../src/assets/img/icons/contactsPhone.svg';
import tgIconSqure from '../src/assets/img/icons/tgIconSqure.svg';
import tgIconSqureRed from '../src/assets/img/icons/tgIconSqureRed.svg';
import vkIconSqure from '../src/assets/img/icons/vkIconSqure.svg';
import vkIconSqureRed from '../src/assets/img/icons/vkIconSqureRed.svg';
import companylogoOne from '../src/assets/img/icons/companylogoOne.svg';
import companylogoTwo from '../src/assets/img/icons/companylogoTwo.svg';
import companylogoThree from '../src/assets/img/icons/companylogoThree.svg';
import companylogoFour from '../src/assets/img/icons/companylogoFour.svg';
import companylogoFive from '../src/assets/img/icons/companylogoFive.svg';
import aboutCentreLib from '../src/assets/img/icons/aboutCentreLibIcon.svg';
import aboutCentreLibColor from '../src/assets/img/icons/aboutCentreLibIconColor.svg';
import aboutCentrePlatform from '../src/assets/img/icons/aboutCentrePlanform.svg';
import aboutCentrePlatformColor from '../src/assets/img/icons/aboutCentrePlanformColor.svg';
import aboutCentrePartners from '../src/assets/img/icons/aboutCentrePartnersIcon.svg';
import aboutCentrePartnersColor from '../src/assets/img/icons/aboutCentrePartnersIconColor.svg';
import solutionsImageOne from "../src/assets/img/solutionsImageOne.png";
import solutionsImageTwo from "../src/assets/img/solutionsImageTwo.png";
import solutionsImageThree from "../src/assets/img/solutionsImageThree.png";
import solutionsImageFour from "../src/assets/img/solutionsImageFour.png";
import solutionsImageFive from "../src/assets/img/solutionsImageFive.png";
import blogImageOne from "../src/assets/img/blogImageOne.png";
import blogImageTwo from "../src/assets/img/blogImageTwo.png";
import blogImageThree from "../src/assets/img/blogImageThree.png";
import teamImageOne from "../src/assets/img/teamImageOne.png";
import teamColorImageOne from "../src/assets/img/teamColorImageOne.png"; 
import teamImageTwo from "../src/assets/img/teamImageTwo.png";
import teamColorImageTwo from "../src/assets/img/teamColorImageTwo.png";
import technologiesImageOne from "../src/assets/img/technologiesImageOne.png";
import technologiesImageTwo from "../src/assets/img/technologiesImageTwo.png";
import technologiesImageThree from "../src/assets/img/technologiesImageThree.png";

export const config = {}

export  const urlPage = {
    home: '/',
    partners: 'partners',
    contactWithUs: 'contact-with-us'
}

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
        name: 'ВСЕ'
    },
    {
        name: 'ПАРТНЕРАМ'
    },
    {
        name: 'НАУКА'
    },
    {
        name: 'ОБУЧЕНИЕ'
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

export const listCompanyData = [
    {
        logo: companylogoOne
    },
    {
        logo: companylogoTwo
    },
    {
        logo: companylogoThree
    },
    {
        logo: companylogoFour
    },
    {
        logo: companylogoFive
    }
]

export const aboutCentreItemsTextIcon = [
    {
        icon: aboutCentreLib,
        iconHover: aboutCentreLibColor,
        text: 'Фреймворки, библиотеки и алгоритмы промышленного ИИ'
    },
    {
        icon: aboutCentrePlatform,
        iconHover: aboutCentrePlatformColor,
        text: 'Платформы для сопровождения и испытания систем на основе ИИ'
    },
    {
        icon: aboutCentrePartners,
        iconHover: aboutCentrePartnersColor,
        text: 'Прикладные решения в интересах конкретных индустриальных партнеров'
    }
]

export const applicationSolutionsDataCard = [
    {
        id: 0,
        bgImage: solutionsImageOne,
        textCard: 'Комплекс полуавтоматического сброса GPS маячка на ледник для мониторинга их передвижения',
        bgColorCard: 'solutions-card-white'
    },
    {
        id: 1,
        bgImage: solutionsImageTwo, 
        textCard: 'Программный комплекс для моделирования ВАХ двигателей  DC буровых установок для скважин с использованием методов ИИ',
        bgColorCard: 'solutions-card-black'
    },
    {
        id: 2,
        bgImage: solutionsImageThree,
        textCard: 'Программный комплекс методов искусственного интеллекта для интернета вещей с малым количеством обучающих данных',
        bgColorCard: 'solutions-card-black'
    },
    {
        id: 3,
        bgImage: solutionsImageFour,
        textCard: 'БПЛА Комплекс для уменьшения времени поиска человека в лесу',
        bgColorCard: 'solutions-card-red'
    },
    {
        id: 4,
        bgImage: solutionsImageFive,
        textCard: 'Программный комплекс для моделирования и автоматического управления процессами нефтепереработки на основе методов ИИ',
        bgColorCard: 'solutions-card-white'
    }
]

export const blogCardData = [
    {
        id: 0,
        imgCard: blogImageOne,
        titleCard: 'Product Mail is taking on Gmail by betting on privacy',
        textCard: 'Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.',
        date: '5 декабря 2024',
        link: 'https://mail.ru/'
    },
    {
        id: 1,
        imgCard: blogImageTwo,
        titleCard: 'Product Mail is taking on Gmail by betting on privacy',
        textCard: 'Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.',
        date: '10 декабря 2024',
        link: ''
    },
    {
        id: 2,
        imgCard: blogImageThree,
        titleCard: 'Product Mail is taking on Gmail by betting on privacy',
        textCard: 'Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.',
        date: '8 декабря 2024',
        link: ''
    }
]

export const teamPersonCardsData = [
    {
        id: 0,
        name: 'Амелин Константин Сергеевич',
        position: 'И.о. директора Центра ИИ',
        imgPerson: teamImageOne,
        imgPersonHover: teamColorImageOne 
    },
    {
        id: 1,
        name: 'Архипов Владислав Владимирович',
        position: 'Руководитель юридического направления',
        imgPerson: teamImageTwo,
        imgPersonHover: teamColorImageTwo
    },
    {
        id: 2,
        name: '',
        position: '',
        imgPerson: null,
        imgPersonHover: null
    },
    {
        id: 3,
        name: '',
        position: '',
        imgPerson: null,
        imgPersonHover: null
    },
]

export const technologiesCardData = [
    {
        id: 0,
        title: 'Платформа AIoT',
        bgImage: technologiesImageOne
    },
    {
        id: 1,
        title: 'Виброаналитика',
        bgImage: technologiesImageTwo
    },
    {
        id: 2,
        title: 'Кибериммунитет',
        bgImage: technologiesImageThree
    }
]
