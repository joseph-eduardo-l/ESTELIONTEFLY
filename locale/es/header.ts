export default {
    area: 'Áreas',
    products: 'Productos',
    vinculos: [
        { id: 1, title: 'Home', url: 'https://www.estelio.com/' },
        { id: 2, title: '¿Quiénes somos?', url: 'https://www.estelio.com/about' },
        {
            id: 3, title: 'Productos y Servicios', url: '',
            
            consultoria: {
                title: 'Consultoría',
                url: 'https://www.estelio.com/consultancy',
                subtitles: [
                    // { id: 1, subtitle: 'BI y Analytics', url: '/construccion', },
                    // { id: 2, subtitle: 'Procesos y flujos de trabajo', url: '/construccion', },
                    // { id: 3, subtitle: 'Gestión de Proyectos', url: '/construccion', },
                    // { id: 4, subtitle: 'Evaluación de Productos', url: '/construccion', },
                    { id: 0, subtitle: 'Transformación Digital', url: 'https://www.estelio.com/construccion', }
                ],
            },
            empresariales: {
                title: 'Sistemas Empresariales',
                url: 'https://www.estelio.com/businessSystems',
                subtitles: [
                    // { id: 1, subtitle: 'POS', url: '/construccion', },
                    // { id: 2, subtitle: 'CRM', url: '/construccion', },
                    // { id: 3, subtitle: 'Proyectos: Remote Agility', url: '/construccion', },
                    { id: 0, subtitle: 'ERP 360', url: '/', }
                ],
            },

            sistit: {
                title: 'Sistemas IT',
                url: 'https://www.estelio.com/it-systems',
                subtitles: [
                    // { id: 0, subtitle: 'Hosting Odoo', url: '/construccion', },
                    // { id: 2, subtitle: 'Hosting Moodle', url: '/construccion', },
                    // { id: 3, subtitle: 'Monitoreo de IT', url: '/construccion', },
                    // { id: 4, subtitle: 'Migraciones a la Nube', url: '/construccion', },
                    // { id: 5, subtitle: 'Arquitecturas de nube privada', url: '/construccion', },
                ],
            },
            sistiot: {
                title: 'Sistemas IoT',
                url: 'https://www.estelio.com/iot-systems',
                subtitles: [
                    { id: 0, subtitle: 'CoolTrack', url: 'https://www.estelio.com/cooltrack', },
                    { id: 1, subtitle: 'Monitor 360 - Data Center', url: 'https://www.estelio.com/data-center', },
                    // { id: 3, subtitle: 'Monitor 360 - Smart Retail', url: '/smart-retail', },
                ],
            },
            learning: {
                title: 'Formación y Gestión del Conocimiento',
                url: 'https://www.estelio.com/learning',
                subtitles: [
                    // { id: 1, subtitle: 'eAcademy', url: '/construccion', },
                    // { id: 2, subtitle: 'Creación de Módulos y Contenido', url: '/construccion', },
                    // { id: 3, subtitle: 'Programas Onboarding', url: '/construccion', },
                    // { id: 4, subtitle: 'Catálogo Formativo', url: '/construccion', },
                    // { id: 5, subtitle: 'Learning Analytics', url: '/construccion', },
                    { id: 0, subtitle: 'Transfórmate.ai', url: 'https://www.estelio.com/construccion', },
                ],
            }
        },
        {
            id: 4, title: 'Insights', url: '',
            noticias: [
                { id: 0, title: 'Blog', url: 'https://www.estelio.com/blog' },
                // {id: 1, title: 'Research', url: '/construccion'}
            ]
        },
        { id: 5, title: 'Contáctanos', url: '#vinculoContact' }
    ],
}