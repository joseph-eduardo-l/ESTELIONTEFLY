/* eslint-disable import/no-anonymous-default-export */
import { FeaturesPremium } from '@/components/plans';
import { useColorMode } from '@chakra-ui/react';

export default {
  banner: {
    heading01:
      "Simplify the business management of your business with ERP 360 ",
    heading02: "A product based on Odoo",
    buttonText01: "Request demo",
  },
  solution: {
    heading: "ERP 360",
    subHeading01: "The software solution of ",
    subHeading02: "all-in-one business management",
    text: "It enables businesses of all sizes to streamline their operations, save time, and increase productivity.",
  },
  pricesAndPlans: {
    heading: "Plans and prices",
    cards: [
      {
        id: 1,
        title: "ERP 360 Initiative",
        advantagesList: [
          { id: 1, text: "First 3 months pay $29 per month" },
          { id: 2, text: "Includes 5 users" },
          { id: 3, text: "Fast installation of modules (Max 4 hours)" },
          { id: 4, text: "Hosting service with AWS" },
          { id: 5, text: "Up to a maximum of 5 users" },
          { id: 6, text: "2 free hours of induction at the start of the contract" },
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
        title: "ERP 360 Evolution",
        advantagesList: [
          { id: 1, text: "36 standard modules based on Odoo Community" },
          { id: 2, text: "1 Premium module: *Venezuelan Accounting Localization" },
          { id: 3, text: "Includes 7 users" },
          { id: 4, text: "Hosting service with AWS" },
          { id: 5, text: "Speed ​​in the installation of the modules (Max 4 hours)" },
          { id: 6, text: "7 free hours of initial induction" },
          { id: 7, text: "2 monthly hours of support in the implementation x 3 months" },
        ],
        selection: "Select the number of users:",
        price: "From",
        plan: "Monthly",
        iconCard: "/images/erp360/icono-profesional-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-profesional-darkMode.svg",
        iconCardHover: "/images/erp360/icono-profesional-morado.svg",
      },
      {
        id: 3,
        title: "ERP 360 Services",
        advantagesList: [
          { id: 1, text: "36 standard modules based on Odoo Community" },
          { id: 2, text: "2 Premium modules: *Venezuelan Accounting Localization *Pro Project/Helpdesk Pro" },
          { id: 3, text: "Includes 7 users" },
          { id: 4, text: "Hosting service with AWS" },
          { id: 5, text: "Fast installation of modules (Max 4 hours)" },
          { id: 6, text: "10 free hours of induction at the start of the contract" },
          { id: 7, text: "2 monthly hours of support in the implementation x 3 months" },
        ],
        selection: "Select the number of users:",
        price: "From",
        plan: "Monthly",
        iconCard: "/images/erp360/icono-empresarial-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-empresarial-darkMode.svg",
        iconCardHover: "/images/erp360/icono-empresarial-morado.svg",
      },
      
    ],
    learMoreText: "Know more",
    defaultFunctionalities: {
      heading: "Premium Features",//"Default Functionalities",
      concept: "These features are included with the available payments",
    },
    learnMoreList: [
      { id: 1, text: "Shopping Module" },
      { id: 2, text: "Inventory Module" },
      { id: 3, text: "Sales Module" },
      { id: 4, text: "Point of Sale (POS) and Invoicing Module" },
      { id: 5, text: "CRM Module" },
      { id: 6, text: "Manufacturing Module" },
      { id: 7, text: "Accounting Module" },
    ],
    knowmore: "", //Know more
    titles: [
      // { id: 1, heading: " Initiative" },
      { id: "2", heading: "One-time " },
      { id: 3, heading: "Monthly " },
    ],titleP: [],
  },
  
  extraFeatures: {
    heading: "Extra Features",
    concept:
      "Consult our sales team if you are interested in implementing any of these extra functionalities",
    context: [
      {
        id: 1,
        title: "Integrations",
        item1: "HKA80 Tax Printer",
        item2: "Command Printer",
        item3: "WhatsApp Integration",
        item4: "HKA Digital Billing",
        item5: "HIKvision Biometric",
        item6: "Electronic Invoicing Panama",
        item7: "Barcode Reader",
        item8: "APIs",

      },
      {
        id: 2,
        title: "Modules",
        item1: "Helpdesk Pro",
        item2: "Dashboard",
        item3: "Panamanian Location",
        item4: "Payroll and Human Resources",
        item5: "Remote Agility (Project Manager)",
        item6: "Commissions",
        item7: "Email Marketing",
        item8: "Electronic Commerce",
      },
      {
        id: 3,
        title: "Additional features",
        item1: "Parametrization",
        item2: "Consulting",
        item3: "Meetings",
        item4: "In-person inductions",
        item5: "Remote Inductions",
        item6: "Development",
        item7: "Customizations",
        item8: "Odoo e-Learning Platform",
      },
    ],
    cards: [
      {
        id: 1,
        title: "ERP 360 Initiative",
        advantagesList: [
          { id: 1, text: "First 3 months pay $29 per month" },
          { id: 2, text: "Includes 5 users" },
          { id: 3, text: "Fast installation of modules (Max 4 hours)" },
          { id: 4, text: "Hosting service with AWS" },
          { id: 5, text: "Up to a maximum of 5 users" },
          { id: 6, text: "2 free hours of induction at the start of the contract" },
        ],
     }
    ],
    text: "These services have additional charges.",
  }, 
  manage: {
    heading: "Manage your business with ",
    headingSpan: "efficiency and ease",
    subHeading:
      "Control all aspects of your business from a centralized platform",
    cards: [
      {
        id: 0,
        text: "Integrate modules tailored to the specific needs of your organization.",
        icon: "/images/erp360/integraModulos.svg",
        iconDark: "/images/erp360/integraModulosDark.svg",
        iconHover: "/images/erp360/integraModulosHover.svg",
        alt: "modules",
      },
      {
        id: 1,
        text: "Covers all areas of business management including: purchasing, inventory, sales, billing, projects and more.",
        icon: "/images/erp360/areasGestion.svg",
        iconDark: "/images/erp360/integraModulosDark.svg",
        iconHover: "/images/erp360/areasGestionHover.svg",
        alt: "management",
      },
      {
        id: 2,
        text: "Access your information from anywhere and at any time, ERP 360 is hosted in the cloud!",
        icon: "/images/erp360/accedeInfo.svg",
        iconDark: "/images/erp360/accedeInfoDark.svg",
        iconHover: "/images/erp360/accedeInfoHover.svg",
        alt: "access",
      },
    ],
  },

  featuresPremium: {
    heading: "Payment Features",
    subHeading:
    "These features are included with the",
    headingSpan:" Monthly Payment",
    headingSpan1:" one-time payment.",
    cards: [
      {
        id: 1,
        title: "Venezuelan Location",
        advantagesList: [
          { id: 1, text: "Our Venezuelan localization module in Odoo allows you to automatically generate SENIAT reports in dual currency. It generates VAT and ISRL withholdings, automatic calculations of the U.T established by law to determine taxable bases. As well as the conversion of currencies when invoicing and when generating sales/purchase books." },
          
        ],
        selection: "Select the number of users:",
        price: "From",
        plan: "Monthly",
        iconCard: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-emprendedor-darkMode.svg",
        iconCardHover: "/images/erp360/icono-emprendedor-morado.svg",
      },
      {
        id: 3,
        title: "HelpDesk Pro",
        advantagesList: [
          { id: 9, text: "Simplify your support ticket management. Allows you to:" },
          { id: 2, text: "Organize by teams: Efficiently assign tickets to the right teams." },
          { id: 3, text: "Customize workflows: Define stages and ticket types for each process." },
          { id: 3, text: "Manage support teams: Monitor your team's performance and assign tasks effectively." },
          { id: 3, text: "Control time bundles: Accurately track the time spent on each ticket and ensure customer satisfaction." },
       
        ],
        selection: "Select the number of users:",
        price: "From",
        plan: "Monthly",
        iconCard: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-emprendedor-darkMode.svg",
        iconCardHover: "/images/erp360/icono-emprendedor-morado.svg",
      },
      {
        id: 3,
        title: "POS restaurants",
        advantagesList: [
          { id: 1, text: "Automate your sales with our POS. Manage products, payments, customers and generate detailed reports. Integration with HKA for tax compliance. Customize order printing by product category. " },

          
        ],
        selection: "Select the number of users:",
        price: "From",
        plan: "Monthly",
        iconCard: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-emprendedor-darkMode.svg",
        iconCardHover: "/images/erp360/icono-emprendedor-morado.svg",
      },
      {
        id: 4,
        title: "WhatsApp Integration",
        advantagesList: [
          { id: 1, text: "In a world where art is often a mirror of society’s complexities, Carl Cozier—better known as Holy Moly—uses his craft to create something profoundly different: a burst of optimism and a call to action" },
     
          
        ],
        selection: "Select the number of users:",
        price: "From",
        plan: "Monthly",
        iconCard: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-emprendedor-darkMode.svg",
        iconCardHover: "/images/erp360/icono-emprendedor-morado.svg",
      },
      {
        id: 6,
        title: "Time Sheet",
        advantagesList: [
          { id: 9, text: "Our module allows:" },
          { id: 2, text: "Generate customized reports: Get detailed reports by user, project, month or task." },
          { id: 3, text: "Manage contracted hour packages: Keep accurate track of your clients' hour consumption." },
          ],
        selection: "Select the number of users:",
        price: "From",
        plan: "Monthly",
        iconCard: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-emprendedor-darkMode.svg",
        iconCardHover: "/images/erp360/icono-emprendedor-morado.svg",
      },
      {
        id: 5,
        title: "Subscription Management",
        advantagesList: [
          { id: 9, text: "Simplify your subscription management. Our module allows you to:" },
          { id: 2, text: "Manage subscription status: Keep detailed track of active, suspended, and canceled subscriptions." },
          { id: 3, text: "Send personalized notifications: Send renewal reminders, expiration notices, and special offers to your subscribers." },
          { id: 3, text: "Record payments: Keep accurate track of payments made by your customers." },
          ],
        selection: "Select the number of users:",
        price: "From",
        plan: "Monthly",
        iconCard: "/images/erp360/icono-emprendedor-azul.svg",
        iconCardDarkMode: "/images/erp360/icono-emprendedor-darkMode.svg",
        iconCardHover: "/images/erp360/icono-emprendedor-morado.svg",
      },
      
      
    ],
    cards1: [
      {
        id: 1,
        title: "Biometric integration",
        advantagesList: [
          { id: 9, text: "Simplify attendance management with Odoo and Hikvision integration. Our solution allows you to:" },
          { id: 3, text: "Automatic synchronization: Time clocks recorded on Hikvision biometric devices are automatically transferred to Odoo, eliminating the need for manual data entry." },
          { id: 5, text: "Custom reports: Generate detailed reports on your employees' attendance, including overtime, absences, leaves, and more." },
          { id: 4, text: "Flexibility: Configure the integration to suit your specific needs, defining work schedules, leaves, and time calculation rules" },
          
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
        title: "Fiscal Printer Integration",
        advantagesList: [
          { id: 9, text: "Integrate your accounting system with your fiscal printer. Our integration allows you to:" },
          { id: 2, text: "Issue fiscal invoices directly from Odoo: Generate invoices and other fiscal documents with a single click." },
          { id: 3, text: "Print tickets on the HKA80: Print tickets and invoices quickly and accurately." },
          { id: 4, text: "Comply with tax regulations: Make sure all your documents comply with legal requirements." },
          
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
    heading: "Why implement ",
    headingSpan: "ERP 360",
    subHeading:
      "It not only improves business efficiency and productivity, but also:",
    cards: [
      {
        id: 0,
        heading: "Efficient",
        text: "Forget investing in hardware, software and high maintenance costs.",
        icon: "/images/erp360/eficiente.svg",
      },
      {
        id: 1,
        heading: "Flexible",
        text: "Adapt the platform to the needs of your business.",
        icon: "/images/erp360/flexible.svg",
      },
      {
        id: 2,
        heading: "Accessible",
        text: "Login from anywhere with an internet connection.",
        icon: "/images/erp360/accesible.svg",
      },
      {
        id: 3,
        heading: "Easy",
        text: "Intuitive and easy-to-use platform; extensive technical knowledge is not necessary.",
        icon: "/images/erp360/facil.svg",
      },
      {
        id: 4,
        heading: "Scalable",
        text: "Start with a free plan today and upgrade to professional or enterprise plans as needed",
        icon: "/images/erp360/escalable.svg",
      },
    ],
  },
  testimonials: {
    heading: "They Believed in Our Vision",
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
    heading: " Frequently Asked Questions",
    accordion: [
      {
        id: 0,
        heading: "What is the difference between ERP 360 and Odoo Enterprise?",
        content: {
          title01: "ERP 360",
          title02: "Odoo Enterprise",
          title03: "Summary",
          text01erp:
            "Comprehensive solution that includes hosting service along with a variable number of users depending on the company's needs",
          text02erp:
            "It contains a maximum of 7 standard modules, depending on the plan of choice",
          text03erp: "ERP 360 is presented as a comprehensive solution that includes a hosting service and allows for a variable number of users, depending on the specific needs of each company. This flexibility is ideal for adapting to growth and changes in the organization. In addition, ERP 360 offers up to 36 standard modules included in each plan, facilitating a quick and effective implementation, without additional costs for hosting.",
          text01odooEnterprise:
            "The licensing model is based on the number of users",
          text02odooEnterprise: "The hosting service has an additional cost",
          text03odooEnterprise:
            "Odoo Enterprise operates on a user-based licensing model, which can significantly increase costs as your business grows. In addition, hosting is not included in the base license and is an additional cost, which can complicate financial planning.",
          // text04odooEnterprise: "Offers additional benefits",
          text04odooEnterprise: "In short, ERP 360 not only simplifies implementation with its clear pricing structure and included modules, but also offers comprehensive support from the start, allowing companies to focus on their growth, without worrying about hidden costs or additional complications.",
        },
      },
      {
        id: 1,
        heading: "What are the modules covered by ERP 360?",
        content: {
          ModuleTitle: true,
          title2: "The ERP 360 solution covers the following 36 standard modules:",
          // text01: "Manufacturing",
          // text02: "Accounting and billing",
          // text03: "Points of sale",
          // text04: "Inventory",
          // text05: "Shopping",
          // text06: "Sales",
          // text07: "CRM",
          // imageModule: "https://website-estelio.s3.amazonaws.com/images/logos/kanji.webp", // URL de la imagen
          // imageDark: "/images/casosdeExito/kanjiDark.webp",
          Module1: "Finance: Accounting, Invoicing, Expenses, Documents, E-Signature",
          Module2: "Sales: CRM, Sales, Point of Store, Restaurant Point of Sale, (Our Subscriber Version)",
          Module3: "Websites: Website Builder, E-Commerce, Blog, Forum, Live Chat, E-Learning",
          Module4: "Supply Chain: Inventory, Manufacturing, Purchasing, Maintenance",
          Module5: "Human Resources: Employees, Recruiting, Personal Time, Evaluation, Referrals, Fleet",
          Module6: "Marketing: Email Marketing, Msm Marketing, Events, Surveys",
          Module7: "Services: Project, Timesheets, Help Desk",
          Module8: "Productivity: Conversations, Attunements, Information",
        },
      },
      {
        id: 2,
        heading:
          "What data do I need to provide to configure my instance in ERP 360?",
        content: {
          isTitle: true,
          title: "The data to be provided is the following:",
          text01: "Company name",
          text02: "RIF",
          text03: "Phone number",
          text04: "Email",
          text05: "Users name",
          // text06: "Production centers",
          text07: "Chart of accounts",
        },
      },
      {
        id: 3,
        heading: "What if I want some additional module?",
        content: {
          text: "Each of our plans includes the 36 standard modules that are part of our ERP 360 solution. For those interested in incorporating additional premium modules, we recommend contacting our sales executive team; please note that these premium modules carry additional costs.",
        },
      },
      {
        id: 4,
        heading: "What is the Venezuelan Accounting localization in Odoo?",
        content: {
          text: "Each of our plans includes the 36 standard modules that are part of our ERP 360 solution. For those interested in incorporating additional premium modules, we recommend contacting our sales executive team; please note that these premium modules carry additional costs.",
        },
      },
      {
        id: 5,
        heading:
          "Can I integrate ERP 360 with other tools and systems that I use in my company?",
        content: {
          text:
            "Venezuelan accounting localization consists of specific modules that install taxes, fiscal positions, chart of accounts and legal declarations, preconfigured in your database.",
        },
      },
      {
        id: 6,
        heading: "How can I ensure my data is safe and secure in ERP 360?",
        content: {
          text:
            "ERP 360 uses advanced security measures, such as data encryption, two-factor authentication, and role-based access control, to protect your data. In addition, at Corporación Estelio we implement physical and logical security measures to guarantee that servers and data are protected.\n\n" +
            "*Corporación Estelio undertakes NOT to use third party data for its own benefit.",
        },
      },
      {
        id:7,
        heading: "Where will my data be stored?",
        content: {
          text:
            "Your information is hosted on Amazon Web Services (AWS), one of the most secure and trusted cloud platforms in the world. AWS implements rigorous security measures to protect your data, including encryption, access management, and constant monitoring to prevent unauthorized access. By choosing AWS, we guarantee that your information is safeguarded in highly secure data centers, meeting the highest standards of protection and privacy. This not only ensures the integrity of your data, but also gives you the peace of mind of knowing that your information is in safe hands.\n\n" +
            "*Corporación Estelio undertakes NOT to use third party data for its own benefit.",
        },
      },
      {
        id: 8,
        heading: "How can I import my data from my previous system to ERP 360?",
        content: {
          text: "ERP 360 offers several options for importing data from legacy systems, including CSV, Excel, and XML files. You can use the Odoo import tool to map and import data from these formats. You can also use a third-party migration tool to help you import data.",
        },
      },
      {
        id: 9,
        heading: "Can I get a backup of my data at any time?",
        content: {
          text: "Yes, your instance's database data can be exported for backup purposes. You can request it once a month, in case you want to periodically keep a backup.",
        },
      },
      {
        id: 10,
        heading: "If I cancel my ERP 360 subscription, can I get my data back?",
        content: {
          text: "Yes, if you cancel your ERP 360 subscription, the database will be delivered to you so that the technical team that will manage the new service can migrate it.",
        },
      },
    ],
  },

  // defaultFunctionalities: {
  //   heading: "Premium Features",//"Default Functionalities",
  //   concept: "These features are included with the available payments",
  // },
  FormDemo:{
    heading: "Request a demo",
   
  }
};
