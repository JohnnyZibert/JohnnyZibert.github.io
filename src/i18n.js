import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'My name': 'Zgirdan Eugeniu',
      'Hello it`s me':
        'Hello, on this page you can get acquainted with the stack of technologies that I use in development, some works, as well as information on how to contact me.',
      //about me section

      'about me section': 'About me',
      'i inquisitive': 'inquisitive',
      'medical education': 'I have a higher medical education',
      'I want to be useful':
        'I want to be useful and contribute to the common cause',
      'writing code':
        'I am constantly striving to improve the quality of writing code.',
      'i is sociable and tactful':
        'i is sociable and tactful enough to build friendly relations with colleagues',
      'new technologies': 'I like to master new technologies',

      //nav section

      'title stack': 'My stack',
      'title work': 'My works',
      'title contact': 'Contact me',
      'about me title': 'About me',
      'my speciality': 'Frontend developer',
      'my age': 'years',
      'photo agency': 'Photo agency',
      'rating games': 'Rating of games',
      'audio player': 'Audio player',
      'telegram title': 'Telegram',
      'vk title': 'VK.COM',
      'gmail title': 'zgirdan.evg@gmail.com',
    },
  },
  ru: {
    translation: {
      'My name': 'Згирдан Евгений',
      'Hello it`s me':
        'Здравствуй, на данный странице вы можете ознакомиться со стеком технологий, который я использую при разработке, некоторыми работами, а так же с информацией о том, как со мной связаться.',
      //about me section
      'about me section': 'Обо мне',
      'i inquisitive': 'Любознательный',
      'medical education': 'Имею высшее медицинское образование',
      'I want to be useful': 'Хочу быть полезен и вносить вклад в общее дело',
      'writing code': 'Постоянно стремлюсь к улучшению качества написания кода',
      'i is sociable and tactful':
        'Достаточно коммуникабелен и тактичен для выстраивания дружеских отношений с коллегами',
      //nav
      'title stack': 'Мой стек',
      'title work': 'Мои работы',
      'about me title': 'Обо мне',
      'title contact': 'Связаться со мной',
      'my speciality': 'Фронтенд разработчик',
      'my age': 'лет',
      'photo agency': 'Сайт фотоагенства',
      'rating games': 'Рейтинг игр',
      'audio player': 'Аудиоплеер',
      'telegram title': 'Телеграм',
      'vk title': 'Вконтакте',
      'gmail title': 'zgirdan.evg@gmail.com',
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'ru',
    lng: 'ru', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
