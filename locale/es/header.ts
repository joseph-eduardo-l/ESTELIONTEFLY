export default {
    vinculos: [
        { id: 1, title: 'Home', url: 'https://www.estelio.com/' },
        { id: 2, title: '¿Quiénes somos?', url: 'https://www.estelio.com/about' },
        {
            id: 3, title: 'Productos y Servicios', url: '',
            consultoria: [
                { id: 0, subtitle: 'Consultoría', url: 'https://www.estelio.com/consultancy' },
                { id: 1, title: 'BI y Analytics', url: '/construccion', },
                { id: 2, title: 'Procesos y flujos de trabajo', url: '/construccion', },
                { id: 3, title: 'Gestión de Proyectos', url: '/construccion', },
                { id: 4, title: 'Evaluación de Productos', url: '/construccion', },
                { id: 5, title: 'Transformación Digital', url: '/construccion', }
            ],
            empresariales: [
                { id: 0, subtitle: 'Sistemas Empresariales', url: 'https://www.estelio.com/businessSystems' },
                { id: 1, title: 'POS', url: '/construccion', },
                { id: 2, title: 'CRM', url: '/construccion', },
                { id: 3, title: 'Proyectos: Remote Agility', url: '/construccion', },
                { id: 4, title: 'ERP', url: '/construccion', }
            ],
            sistit: [
                { id: 0, subtitle: 'Sistemas IT', url: 'https://www.estelio.com/it-systems' },
                { id: 1, title: 'Hosting Odoo', url: '/construccion', },
                { id: 2, title: 'Hosting Moodle', url: '/construccion', },
                { id: 3, title: 'Monitoreo de IT', url: '/construccion', },
                { id: 4, title: 'Migraciones a la Nube', url: '/construccion', },
                { id: 5, title: 'Arquitecturas de nube privada', url: '/construccion', },
            ],
            sistiot: [
                { id: 0, subtitle: 'Sistemas IoT', url: 'https://www.estelio.com/iot-systems' },
                { id: 1, title: 'CoolTrack - Cadena de frío', url: 'https://www.estelio.com/cooltrack', },
                { id: 2, title: 'Monitor 360 - Data Center', url: 'https://www.estelio.com/data-center', },
                { id: 3, title: 'Monitor 360 - Smart Retail', url: 'https://www.estelio.com/smart-retail', },
            ],
            learning: [
                { id: 0, subtitle: 'Formación y Gestión del Conocimiento', url: 'https://www.estelio.com/learning' },
                { id: 1, title: 'eAcademy', url: '/construccion', },
                { id: 2, title: 'Creación de Módulos y Contenido', url: '/construccion', },
                { id: 3, title: 'Programas Onboarding', url: '/construccion', },
                { id: 4, title: 'Catálogo Formativo', url: '/construccion', },
                { id: 5, title: 'Learning Analytics', url: '/construccion', },
                { id: 6, title: 'SaaS formativo - Transformate.ai', url: '/construccion', },
            ],
        },
        {
            id: 4, title: 'Insights', url: '',
            noticias: [
                { id: 0, title: 'Blog', url: 'https://www.estelio.com/blog' },
                // {id: 1, title: 'Research', url: '/construccion'}
            ]
        },
        { id: 5, title: 'Contáctanos', url: 'https://www.estelio.com/contact' }
    ],
}