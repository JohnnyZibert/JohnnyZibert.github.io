import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
const resources = {
  en: {
    translation: {
      'My name': 'Zgirdan Eugeniu',
      'Hello it`s me':
        'Hello, on this page you can get acquainted with the stack of technologies that I use in development, some works, as well as information on how to contact me.',
      'About me':
        'About me: inquisitive, I like to master new technologies. I have a higher medical education. I want to be useful and contribute to the common cause. I am constantly striving to improve the quality of writing code. He is sociable and tactful enough to build friendly relations with colleagues.',
      'title stack': 'My stack',
      'title work': 'My works',
      'title contact': 'Contact me',
      'about me title': 'About me',
    },
    'project-name': {
      'photo agency': 'Photo agency',
      'rating games': 'Rating of games',
      'audio player': 'Audio player',
    },
    'contact name': {
      'telegram title': 'Telegram',
      'vk title': 'Vkontakte',
      'instagram title': 'Instagram',
    },
  },
  ru: {
    translation: {
      'My name': 'Згирдан Евгений',
      'Hello it`s me':
        'Здравствуй, на данный странице вы можете ознакомиться со стэком технологий который я использую при разработке, некоторыми работами, а так же с информацией о том, как со мной связаться.',
      'about me large':
        'Обо мне: любознательный, люблю осваивать новые технологии. Имею высшее медицинское образование. Хочу быть полезен и вносить вклад в общее дело. Постоянно стремлюсь к улучшения качества написания кода. Достаточно коммуникабельный и тактичен для выстраивания дружеских отношений с коллегами.',
      'title stack': 'Мой стэк',
      'title work': 'Мои работы',
      'about me title': 'Обо мне',
      'title contact': 'Связаться со мной',
    },

    'project name': {
      'photo agency': 'Сайт фотоагенства',
      'rating games': 'Рейтинг игр',
      'audio player': 'Аудиоплеер',
    },
    'contact name': {
      'telegram title': 'Телеграм',
      'vk title': 'Вконтакте',
      'instagram title': 'Инстаграм',
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'ru',
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
