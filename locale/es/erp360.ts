/* eslint-disable import/no-anonymous-default-export */
// import CuadroModulo from 'public/images/CuadroModulo.svg';
import { FeaturesPremium } from '@/components/plans';
import { PaypalPayment } from '@/components/plans/PaypalPayment';
import { useColorMode } from '@chakra-ui/react';
import { title } from 'process';

export default {
  banner: {
    heading01: "Simplifica la gestión empresarial de tu negocio con ERP 360 ",
    heading02: "Un producto basado en Odoo",
  },
  solution: {
    heading: "ERP 360",
    subHeading01: "La solución de software de ",
    subHeading02: "gestión empresarial todo en uno",
    text: "Permite a las empresas de todos los tamaños optimizar sus operaciones, ahorrar tiempo y aumentar la productividad.",
  },
  
  pricesAndPlans: {
    heading: "Planes y Servicios",
    cards: [
      {
        id: 1,
        title: "ERP 360 Iniciativa",
        advantagesList: [
          { id: 1, text: "Primeros 3 meses paga 29$ mensuales" },
          { id: 2, text: "Incluye 5 usuarios" },
          { id: 3, text: "Rapidez en la instalación de los módulos (Máx 4 horas)" },
          { id: 4, text: "Servicio de hosting con AWS" },
          { id: 5, text: "Hasta un máximo de 5 usuarios"},
          { id: 6,  text: "2 horas gratuitas de inducción al inicio del contrato"},
        ],
        // selection: "Seleccione la cantidad de usuarios:",
        // text1:"asdasdada",
        price: "Desde",
        plan: "Mensuales",
        iconCard: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardHover: "/images/erp360/icono-emprendedor-morado.svg",
      },
      {
        id: 2,
        title: "ERP 360 Evolución",
        advantagesList: [
          { id: 1, text: "36 módulos estándar basados ​​en la comunidad Odoo" },
          { id: 2, text: "1 módulo Premium: -	Localización Contable Venezolana" },
          { id: 3, text: "Incluye 7 usuarios" },
          { id: 4, text: "Servicio de hosting con AWS" },
          { id: 5, text: "Rapidez en la instalación de los módulos (Máx 4 horas)"},
          { id: 6, text: "7 horas gratuitas de inducción inicial" },
          { id: 7, text: "2 horas mensuales de soporte en la implementación x 3 meses " },
          { id: 0, text: "No incluye horas de desarrollo"},          
        ],
        // selection: "Seleccione la cantidad de usuarios:",
        text1:"No incluye horas de desarrollo",
        price: "Desde",
        plan: "Mensuales",
         iconCard: "/images/erp360/icono-profesional-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-profesional-azul.svg",
        iconCardHover: "/images/erp360/icono-profesional-morado.svg",
      },
      {
        id: 3,
        title: "ERP 360 Servicios",
        advantagesList: [
          { id: 1, text: "36 módulos estándar basados ​​en la comunidad Odoo" },
          { id: 2, text: "2 módulos Premium: *Localización Contable Venezolana *Proyecto Pro/Helpdesk Pro"},
          { id: 3, text: "Incluye 7 usuarios"},
          { id: 4, text: "Servicio de hosting con AWS" },
          { id: 5, text: "Rapidez en la instalación de los módulos (Máx 4 horas)"},
          { id: 6, text: "10 horas gratuitas de inducción al inicio del contrato"},          
          { id: 7, text: "2 horas mensuales de soporte en la implementación x 3 meses"},          
          { id: 0, text: "No incluye horas de desarrollo"},          
        ],
        text1:"No incluye horas de desarrollo",
        // selection: "Seleccione la cantidad de usuarios:",
        price: "Desde",
        plan: "Mensuales",
        iconCard: "/images/erp360/icono-empresarial-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-empresarial-azul.svg",
        iconCardHover: "/images/erp360/icono-empresarial-morado.svg",
      },
      
    ],
    learMoreText: "Conocer más",
    // defaultFunctionalities: {
    //   heading: "Funcionalidades Premium",//"Funcionalidades Predeterminadas",
    //   concept:
    //     "Estas funcionalidades vienen incluidas con los pagos disponibles",
    // },   
    // learnMoreList: [
    //   { id: 1, text: "Integración Biometrico" },
    //   { id: 2, text: "Integración Impresora Fiscal" },
    //   { id: 3, text: "Localizacion Contable Venezolana" },
    //   { id: 4, text: "HelpDesk Pro" },
    //   { id: 5, text: "POS restaurantes" },
    //   { id: 6, text: "Integración WhatsApp" },
    //   { id: 7, text: "Comisiones" },
    //   { id: 8, text: "Gestion de suscripciones" },
    //   { id: 9, text: "Parte de Horas" },
    // ],
    knowmore: "",
    // titles: [
    //   // { id: 1, heading: "Iniciativa" },
    //   { id: 2, heading: "Único" },
    //   { id: 3, heading: "Mensual" },
    // ],
  },
  extraFeatures: {
    heading: "Funcionalidades Extra",
    concept:
      "Consulta con nuestro equipo de ventas si te interesa implementar alguna de estas funcionalidades extra",
    context: [
      {
        title: "Integraciones",
        item1: "Impresora Fiscal HKA80",
        item2: "Impresora de Comanda",
        item3: "Integración WhatsApp",
        item4: "Facturación Digital HKA",
        item5: "Biométrico HIKvision",
        item6: "Facturación Electrónica Panamá",
        item7: "Lector de Código de Barras",
        item8: "APIs",
        
      },
      {
        title: "Módulos",
        item1: "Helpdesk Pro",
        item2: "Dashboard",
        item3: "Localización Panameña",
        item4: "Nóminas y Recursos Humanos",
        item5: "Remote Agility (Gestor de Proyectos)",
        item6: "Comisiones",
        item7: "Marketing por Email",
        item8: "Comercio Electrónico",
      },
      {
        title: "Extras",
        item1: "Parametrización",
        item2: "Consultoría",
        item3: "Reuniones",
        item4: "Inducciones Presenciales",
        item5: "Induciones Remotas",
        item6: "Desarrollo",
        item7: "Customizaciones",
        item8: "Plataforma e-Learning Odoo",
      },
    ],
    text: "Estos servicios tienen cargos adicionales.",
  },
  
  manage: {
    heading: "Administra tu negocio con ",
    headingSpan: "eficiencia y facilidad",
    subHeading:
      "Controla todos los aspectos de tu negocio desde una plataforma centralizada",
    cards: [
      {
        id: 0,
        text: "Integra módulos adaptados a las necesidades específicas de tu organización.",
        icon: "/images/erp360/integraModulos.svg",
        iconDark: "/images/erp360/integraModulosDark.svg",
        iconHover: "/images/erp360/integraModulosHover.svg",
        alt: "modulos",
      },
      {
        id: 1,
        text: "Cubre todas las áreas de gestión empresarial, incluidas: compras, inventario,ventas, facturación, proyectos y más.",
        icon: "/images/erp360/areasGestion.svg",
        iconDark: "/images/erp360/areasGestionDark.svg",
        iconHover: "/images/erp360/areasGestionHover.svg",
        alt: "gestion",
      },
      {
        id: 2,
        text: "Accede a tu información desde cualquier lugar y en cualquier momento, ¡ERP 360 se aloja en la nube!",
        icon: "/images/erp360/accedeInfo.svg",
        iconDark: "/images/erp360/accedeInfoDark.svg",
        iconHover: "/images/erp360/accedeInfoHover.svg",
        alt: "accede",
      },
    ],
    alt: "",
  },

  PaypalPayment:{
    heading: "Paga con PayPal",
    subHeading:
      "Realiza tu pago de forma segura y rápida con PayPal",
      headingSpan:" Pago Mensual",
  },

  featuresPremium: {
    heading: "Funcionalidades por tipos de pago",
    subHeading:
      "Estas funcionalidades vienen incluidas con el",
      headingSpan:" Pago Mensual",
    cards: [
      {
        id: 1,
        title: "Localizacion Venezolana",
        advantagesList: [
          { id: 1, text: "Nuestro módulo de localización venezolana en Odoo te permite generar automáticamente los reportes del SENIAT en doble moneda. Genera retenciones de IVA e ISRL, cálculos automáticos de la U.T establecida por ley para determinar bases imponibles. Así como tambén la conversión de monedas al facturar y al generar los libros de ventas/compras." },
        ],
        // selection: "Seleccione la cantidad de usuarios:",
        price: "Desde",
        plan: "Mensuales",
        iconCard: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardHover: "/images/erp360/icono-emprendedor-morado.svg",
      },
      {   
        id: 2,
        title: "HelpDesk Pro",
        advantagesList: [
          { id: 9, text: "Simplifica la gestión de tus tickets de soporte. Permite:" },     
          { id: 2, text: "Organizar por equipos: Asigna tickets de manera eficiente a los equipos adecuados." },     
          { id: 3, text: "Personalizar flujos de trabajo: Define etapas y tipos de tickets para cada proceso." },     
          { id: 3, text: "Gestionar equipos de soporte: Monitorea el desempeño de tu equipo y asigna tareas de forma efectiva." },     
          { id: 3, text: "Controlar paquetes de horas: Realiza un seguimiento preciso del tiempo invertido en cada ticket y garantiza la satisfacción del cliente." },     
        ],
        // selection: "Seleccione la cantidad de usuarios:",
        price: "Desde",
        plan: "Mensuales",
        iconCard: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardHover: "/images/erp360/icono-emprendedor-morado.svg",
      },
      
      {
        id: 3,
        title: "POS restaurantes",
        advantagesList: [
          { id: 1, text: "Automatiza tus ventas con nuestro POS. Gestiona productos, pagos, clientes y genera reportes detallados. Integración con HKA para cumplimiento fiscal. Personalización de impresión de comandas por categoría de productos. " },   
        ],
        // selection: "Seleccione la cantidad de usuarios:",
        price: "Desde",
        plan: "Mensuales",
        iconCard: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardHover: "/images/erp360/icono-emprendedor-morado.svg",
      },
      {
        id: 4,
        title: "Integración WhatsApp",
        advantagesList: [
          { id: 1, text: "En un mundo donde el arte es a menudo un espejo de las complejidades de la sociedad, Carl Cozier, más conocido como Holy Moly, utiliza su arte para crear algo profundamente diferente: una explosión de optimismo y un llamado a la acción. " },      
        ],
        // selection: "Seleccione la cantidad de usuarios:",
        price: "Desde",
        plan: "Mensuales",
        iconCard: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardHover: "/images/erp360/icono-emprendedor-morado.svg",
      },
      {
        id: 6,
        title: "Parte de Horas",
        advantagesList: [
          { id: 9, text: "Nuestro módulo permite:" },      
          { id: 2, text: "Generar reportes personalizados: Obtén informes detallados por usuario, proyecto, mes o tarea." },      
          { id: 3, text: "Gestionar paquetes de horas contratados: Realiza un seguimiento preciso del consumo de horas de tus clientes." },      
        ],
        // selection: "Seleccione la cantidad de usuarios:",
        price: "Desde",
        plan: "Mensuales",
        iconCard: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardHover: "/images/erp360/icono-emprendedor-morado.svg",
      },
      {
        id: 5,
        title: "Gestion de suscripciones",
        advantagesList: [
          { id: 9, text: "Simplifica la gestión de tus suscripciones. Nuestro módulo te permite:" },  
          { id: 2, text: "Gestionar el estado de las suscripciones: Realiza un seguimiento detallado de las suscripciones activas, suspendidas y canceladas." },  
          { id: 3, text: "Enviar notificaciones personalizadas: Envía recordatorios de renovación, avisos de vencimiento y ofertas especiales a tus suscriptores." },  
          { id: 3, text: "Registrar pagos: Lleva un control preciso de los pagos realizados por tus clientes." },  
        ],
        // selection: "Seleccione la cantidad de usuarios:",
        price: "Desde",
        plan: "Mensuales",
        iconCard: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardHover: "/images/erp360/icono-emprendedor-morado.svg",
      },
      
      
    ],
    headingSpan1:" Pago Único",
    cards1: [
      {
        id: 3,
        title: "Integración de Biometrico ",
        advantagesList: [
          { id: 9, text: "Simplifica la gestión de asistencia con la integración de Odoo y Hikvision. Nuestra solución te permite:" },
          { id: 3, text: "Sincronización automática: Las marcaciones registradas en los dispositivos biométricos Hikvision se transfieren automáticamente a Odoo, eliminando la necesidad de introducir datos manualmente." },
          { id: 3, text: "Reportes personalizados: Genera reportes detallados sobre la asistencia de tus empleados, incluyendo horas extras, faltas, permisos y más." },
          { id: 4, text: "Flexibilidad: Configura la integración para que se adapte a tus necesidades específicas, definiendo horarios de trabajo, permisos y reglas de cálculo de horas" },
          
        ],
        selection: "Select the number of users:",
        price: "From",
        plan: "Monthly",
        iconCard: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-emprendedor-darkMode.svg",
        iconCardHover: "/images/erp360/icono-emprendedor-morado.svg",
      },
      {
        id: 2,
        title: "Integración Impresora Fiscal ",
        advantagesList: [
          { id: 9, text: "Integra tu sistema contable con tu impresora fiscal. Nuestra integración te permite:" },
          { id: 2, text: "Emitir facturas fiscales directamente desde Odoo: Genera facturas y otros documentos fiscales con un solo clic." },
          { id: 3, text: "Imprimir tickets en la HKA80: Imprime tickets y facturas de manera rápida y precisa." },
          { id: 4, text: "Cumplir con las normativas fiscales: Asegúrate de que todos tus documentos cumplan con los requisitos legales." },
          
        ],
        selection: "Select the number of users:",
        price: "From",
        plan: "Monthly",
        iconCard: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-emprendedor-darkMode.svg",
        iconCardHover: "/images/erp360/icono-emprendedor-morado.svg",
      },
    ],
  },

  WhyimplementERP360: {
    heading: "¿Por qué implementar ",
    headingSpan: "ERP 360",
    subHeading:
      "No solo mejora la eficiencia y la productividad del negocio, también:",
    cards: [
      {
        id: 0,
        heading: "Eficiente",
        text: "Olvídate de invertir en hardware, software y costos altos de mantenimiento.",
        icon: "/images/erp360/eficiente.svg",
      },
      {
        id: 1,
        heading: "Flexible",
        text: "Adapta la plataforma a las necesidades de tu negocio.",
        icon: "/images/erp360/flexible.svg",
      },
      {
        id: 2,
        heading: "Accesible",
        text: "Accede desde cualquier lugar con una conexión a internet y disfruta de servicios en la nube que soportan múltiples usuarios.",
        icon: "/images/erp360/accesible.svg",
      },
      {
        id: 3,
        heading: "Fácil",
        text: "Una plataforma intuitiva y fácil de usar; no es necesario tener amplio conocimiento técnico.",
        icon: "/images/erp360/facil.svg",
      },
      {
        id: 4,
        heading: "Escalable",
        text: "Comienza con un plan gratuito hoy y actualiza según tus necesidades a planes profesionales o empresariales",
        icon: "/images/erp360/escalable.svg",
      },
    ],
  },

  
  testimonials: {
    heading: "Ellos Creyeron en Nuestra Visión",
    testimonialsMap: [
 // {
      //   id: 0,
      //     testimony:
      //     "One of the most notable characteristics of Estelio is its high execution capacity, quick understanding of our needs and requirements, they have provided us with a response in a very short time and have resolved the situation effectively.",
      //   nameAuthor: "La Wawa Venezuela 2021 C. A.",
      //   image:
      //     "https://website-estelio.s3.amazonaws.com/images/logos/lawawa.webp",
      //   imageDark: "/images/casosdeExito/laWawaDark.webp",
      // },
      {
        id: 1,
        // testimony:
        //   "We are pleased to express our complete satisfaction with the business relationship we have maintained with Corporación Estelio. It has impressed us with its ability to adapt to our needs and requirements, offering us fast and effective solutions.",
        nameAuthor: "Kanji Sushi, C.A.",
        image:
          "https://website-estelio.s3.amazonaws.com/images/logos/kanji.webp",
        imageDark: "/images/casosdeExito/kanjiDark.webp",
      },
      {
        id: 2,
        // testimony:
        //   "We are pleased to express our complete satisfaction with the business relationship we have maintained with Corporación Estelio. It has impressed us with its ability to adapt to our needs and requirements, offering us fast and effective solutions.",
        nameAuthor: "Atlantic Reposteria",
        image:
          "/images/casosdeExito/Atlanticw.webp",
        imageDark: "/images/casosdeExito/Atlanticw.webp",
      },
      {
        id: 3,
        // testimony:
        //   "We are pleased to express our complete satisfaction with the business relationship we have maintained with Corporación Estelio. It has impressed us with its ability to adapt to our needs and requirements, offering us fast and effective solutions.",
        nameAuthor: "   Blue   Medical  ",
        image:
          "/images/casosdeExito/Blue-Medicalw.webp",
        imageDark: "/images/casosdeExito/Blue-Medicalw.webp",
      },
      {
        id: 4,
        // testimony:
        //   "We are pleased to express our complete satisfaction with the business relationship we have maintained with Corporación Estelio. It has impressed us with its ability to adapt to our needs and requirements, offering us fast and effective solutions.",
        nameAuthor: "La WaWa",
        image:
          "https://website-estelio.s3.amazonaws.com/images/logos/lawawa.webp",
        imageDark: "/images/casosdeExito/laWawaDark.webp",
      },
      {
        id: 5,
        // testimony:
        //   "We are pleased to express our complete satisfaction with the business relationship we have maintained with Corporación Estelio. It has impressed us with its ability to adapt to our needs and requirements, offering us fast and effective solutions.",
        nameAuthor: "Mallorca",
        image:
          "/images/casosdeExito/Mallorcaw.webp",
        imageDark: "/images/casosdeExito/Mallorcaw.webp",
      },

    ],
  },
  
  questions: {
    heading: "Preguntas Frecuentes",
    accordion: [
      {
        id: 0,
        heading: "¿Cuál es la diferencia entre ERP 360 y Odoo Enterprise?",
        content: {
          title01: "ERP 360",
          title02: "Odoo Enterprise",
          title03: "Resumen",
          text01erp:
            "Contiene 36 módulos estándar, con algunos planes premium, esto según el plan de elección.",
          text02erp:
            "Contiene un máximo de 36 módulos estándar, esto según el plan de elección",
          text03erp:             
           "ERP 360 se presenta como una solución integral que incluye un servicio de hosting y permite un número variable de usuarios, según las necesidades específicas de cada empresa. Esta flexibilidad es ideal para adaptarse al crecimiento y cambios en la organización. Además, ERP 360 ofrece hasta 36 módulos estándar incluidos en cada plan, lo que facilita una implementación rápida y efectiva, sin costos adicionales por el hosting.",
          text01odooEnterprise:
            "El modelo de licenciamiento se basa en el número de usuarios",
          text02odooEnterprise:
            "El servicio de hosting tiene un costo adicional",
            text03odooEnterprise: 
            "Odoo Enterprise opera con un modelo de licenciamiento basado en el número de usuarios, lo que puede incrementar significativamente los costos, a medida que la empresa crece. Además, el servicio de hosting no está incluido en la licencia básica y tiene un costo adicional, lo que puede complicar la planificación financiera.",  
            // text04odooEnterprise: "Ofrece beneficios adicionales",
            text04odooEnterprise: "En resumen, ERP 360 no sólo simplifica la implementación con su estructura de precios clara y módulos incluidos, sino que también ofrece un soporte integral desde el inicio, permitiendo a las empresas concentrarse en su crecimiento, sin preocuparse por costos ocultos o complicaciones adicionales.",
           
        },
      },
      {
        id: 1,
        heading: "¿Cuáles son los módulos que abarca ERP 360?",
        content: {
          ModuleTitle: true,
          title2:  "La solución ERP 360 abarca los siguientes 36 módulos estándar:",
          // text01: "Fabricación",
          // text02: "Contabilidad y facturación",
          // text03: "Puntos de venta",
          // text04: "Inventario",
          // text05: "Compras",
          // text06: "Ventas",
          // text07: "CRM",
          // text07: "CRM",
          // imageModule: "https://website-estelio.s3.amazonaws.com/images/logos/kanji.webp", // URL de la imagen
          // imageDark: "/images/casosdeExito/kanjiDark.webp",
          Module1: "Finanzas: Contabilidad, Facturación, Gastos, Documentos, Firma electrónica",
          Module2: "Ventas: CRM, Ventas, Punto de tienda, Punto de venta restaurante, (Nuestra versión de suscriptores)",
          Module3: "Sitios Web: Creador de sitios web, Comercio electrónico, Blog, Foro, Chat en vivo, E-learning ",
          Module4: "Cadena de suministros: Inventario, Fabricación, Compra, Mantenimiento ",
          Module5: "Recursos Humanos: Empleados, Reclutamiento, Tiempo personal, Evaluación, Referencias, Flota",
          Module6: "Marketing: Marketing por correo electrónico, Marketing por msm, Eventos, Encuestas ",
          Module7: "Servicios: Proyecto, Hojas de horas, Servicio de asistencia",
          Module8: "Productividad: conversaciones, Aprobaciones, Información ",
          
        },
      },
      {
        id: 2,
        heading:
          "¿Qué datos debo suministrar para configurar mi instancia en ERP 360?",
        content: {
          isTitle: true,
          title: "Los datos a suministrar son los siguientes:",
          text01: "Nombre de la empresa",
          text02: "RIF",
          text03: "Número de teléfono",
          text04: "Correo electrónico",
          text05: "Nombre de usuarios",
          // text06: "Centros de producción",
          text07: "Plan de cuentas",
        },
      },
      {
        id: 3,
        heading: "¿Qué pasa si quiero algún módulo adicional?",
        content: {
          text: "Cada uno de nuestros planes incluyen los 36 módulos estándar, que forman parte de nuestra solución ERP 360. Para aquellos interesados en incorporar módulos premium adicionales, les recomendamos contactar a nuestro equipo de ejecutivos de ventas; tenga en cuenta que estos módulos premium, conllevan costos adicionales.",
        },
      },
      {
        id: 4,
        heading:
          "¿Qué es la localización Contable Venezolana en Odoo?",
        content: {
          text:
            "La localización contable venezolana, son módulos específicos que instalan impuestos, posiciones fiscales, plan de cuentas y declaraciones legales, preconfiguradas en su base de datos.",
        },
      },
      {
        id: 5,
        heading:
          "¿Puedo integrar ERP 360 con otras herramientas y sistemas que utilizo en mi empresa?",
        content: {
          text:
            "ERP 360 admite una variedad de integraciones y API. Puede integrarse con herramientas de terceros empleando conectores de integración disponibles en la tienda de aplicaciones de Odoo o utilizando una API personalizada.\n\n" +
            "Para información más detallada,  se recomienda contactar a nuestro equipo técnico de ERP 360.",
        },
      },      
      {
        id: 6,
        heading:
          "¿Cómo puedo asegurarme de que mis datos estén seguros y protegidos en ERP 360?",
        content: {
          text:
            "ERP 360 utiliza medidas de seguridad avanzadas, como el cifrado de datos, la autenticación de dos factores y el control de acceso basado en roles, para proteger sus datos. Además, en Corporación Estelio implementamos medidas de seguridad física y lógica para garantizar que los servidores y los datos estén protegidos.\n\n" +
            "*Corporación Estelio se compromete a NO hacer uso de los datos de terceros para beneficio propio.",
        },
      },
        {
          id: 7,
          heading:
            "¿Dónde estará alojada mi data?",
          content: {
            text:
              "Su información está alojada en Amazon Web Services (AWS), una de las plataformas de nube más seguras y confiables del mundo. AWS implementa rigurosas medidas de seguridad para proteger sus datos, incluyendo cifrado, gestión de acceso y monitoreo constante para prevenir accesos no autorizados. Al elegir AWS, garantizamos que su información esté resguardada en centros de datos de alta seguridad, cumpliendo con los estándares más exigentes de protección y privacidad. Esto no solo asegura la integridad de sus datos, sino que también le brinda la tranquilidad de saber que su información está en manos seguras.\n\n" +
              "*Corporación Estelio se compromete a NO hacer uso de los datos de terceros para beneficio propio.",
          },
        },
      {
        id: 8,
        heading:
          "¿Cómo puedo importar mis datos desde mi sistema anterior a ERP 360?",
        content: {
          text: "ERP 360 ofrece varias opciones para importar datos desde sistemas anteriores, incluidos archivos CSV, Excel y XML. Puede usar la herramienta de importación de Odoo para mapear e importar datos desde estos formatos. También puede utilizar una herramienta de migración de terceros para ayudarlo con la importación de datos.",
        },
      },
      {
        id: 9,
        heading: "¿Puedo obtener un respaldo de mi data en cualquier momento?",
        content: {
          text: "Si, la data de la base de datos de tu instancia, puede ser exportada, para propósitos de respaldo, la puedes solicitar 1 vez al mes, en caso de que desees conservar periódicamente un respaldo.",
        },
      },
      {
        id: 10,
        heading: "¿Si cancelo mi suscripción de ERP 360, puedo obtener mi data?",
        content: {
          text: "Si, si cancelas tu suscripción de ERP 360, se te entrega la base de datos, para que el equipo técnico que manejará el nuevo servicio, la pueda migrar.",
        },
      },      
    ],
  },
};
