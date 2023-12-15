import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          navbar: {
            home: 'Home',
            appointments: 'Appointments',
            profile: 'Profile',
            about: 'About',
            welcome: 'Welcome back, ',
          },
          home: {
            title: 'Home',
          },
          appointments: {
            title: 'Apointments',
            addButton: 'Add a new appointment',
            id: 'Id',
            attribute11: 'Attribute11',
            date: 'Date and Hour',
            reason: 'Reason',
            person: 'Person',
            diagnosis: 'Diagnosis',
            actions: 'Actions',
          },
          profile: {
            title: 'Profile',
          },
          about: {
            title: 'About',
            slogan: '"Dedicated to discovery. Committed to care"',
            mission: 'Mission',
            missionText:
              'We provide health services while we contribute and improve the comprensive health. Also, we promote research and sharing knowledge with the european health system. Promote the quality, satisfaction and participation of life.',
            vision: 'Vision',
            visionText:
              'To be a reference in the improvement of people´s health and well-being. Giving professional and excellent care.',
            values: 'Values',
            valuesText: {
              security: 'Security',
              securityText:
                'Minimize any unnecessary or potential patient harm associated with medical care.',
              professionalism: 'Professionalism',
              professionalismText:
                'Work with honesty, commitment, effectiveness, efficiency and responsibility.',
              innovation: 'Innovation',
              innovationText:
                'Research, generate and convert ideas into solutions.',
              normative: 'Normative',
              normativeText:
                'Governed by a code of ethics and conduct, always within the legislation and transparency.',
              sustainable: 'Sustainable',
              sustainableText:
                'Committed to the future of Society, according to the environmental, social and economic dimensions, and the Sustainable Development Goals.',
            },
          },
          delete: {
            title: 'Are you sure?',
            text: "This action can't be revert, please be sure before clicking the button.",
          },
          button: {
            see: 'See',
            modify: 'Modify',
            delete: 'Delete',
          },
        },
      },
      es: {
        translation: {
          navbar: {
            home: 'Home',
            appointments: 'Citas',
            profile: 'Perfil',
            about: 'Sobre nosotros',
            welcome: 'Bienvenido, ',
          },
          home: {
            title: 'Home',
          },
          appointments: {
            title: 'Citas',
            addButton: 'Añadir una nueva cita',
            id: 'Id',
            attribute11: 'Attribute11',
            date: 'Día y hora',
            reason: 'Razón',
            person: 'Persona',
            diagnosis: 'Diagnóstico',
            actions: 'Acciones',
          },
          profile: {
            title: 'Perfil',
          },
          about: {
            title: 'Sobre nosotros',
            slogan:
              '"Dedicado al descubrimiento. Comprometidos con la atención"',
            mission: 'Misión',
            missionText:
              'Brindamos servicios de salud mientras contribuimos y mejoramos la salud integral. Además, fomentamos la investigación y el intercambio de conocimiento con el sistema sanitario europeo. Promover la calidad, satisfacción y participación de la vida.',
            vision: 'Visión',
            visionText:
              'Ser referente en la mejora de la salud y el bienestar de las personas. Brindando una atención profesional y de excelencia.',
            values: 'Valores',
            valuesText: {
              security: 'Seguridad',
              securityText:
                'Minimizar cualquier daño innecesario o potencial al paciente asociado con la atención médica.',
              professionalism: 'Profesionalidad',
              professionalismText:
                'Trabajo con honradez, compromiso, eficacia, eficiencia y responsabilidad.',
              innovation: 'Innovación',
              innovationText:
                'Investigar, generar y convertir ideas en soluciones.',
              normative: 'Normativa',
              normativeText:
                'Regidos por un código ético y de conducta, siempre dentro de la legislación y la transparencia.',
              sustainable: 'Sostenibilidad',
              sustainableText:
                'Comprometidos por el futuro de la Sociedad, según las dimensiones medioambiental, social y económica, y los Objetivos de Desarrollo Sostenible.',
            },
          },
          delete: {
            title: '¿Estás seguro?',
            text: ' Esta acción no puede ser revertida, por favor este seguro antes de pinchar el botón.',
          },
          button: {
            see: 'Ver',
            modify: 'Modificar',
            delete: 'Eliminar',
          },
        },
      },
    },
  })

export default i18n
