export default {
    area: 'Areas',
    products: 'Products',
    vinculos: [
        { id: 1, title: 'Home', url: 'https://www.estelio.com/en' },
        { id: 2, title: 'About us', url: 'https://www.estelio.com/en/about' },
        {
            id: 3, title: 'Products and Services', url: '',
            consultoria: {
                title: 'Consultancy',
                url: "https://www.estelio.com/en/consultancy",
                subtitles: [
                    // { id: 1, subtitle: 'BI y Analytics', url: '/construccion', },
                    // { id: 2, subtitle: 'Procesos y flujos de trabajo', url: '/construccion', },
                    // { id: 3, subtitle: 'Gestión de Proyectos', url: '/construccion', },
                    // { id: 4, subtitle: 'Evaluación de Productos', url: '/construccion', },
                    { id: 0, subtitle: 'Digital Transformation', url: 'https://www.estelio.com/en/consultancy/digital-transformation', }
                ],
            },
            empresariales: {
                title: 'Business Systems',
                url: 'https://www.estelio.com/en/businessSystems',
                subtitles: [
                    // { id: 1, subtitle: 'POS', url: '/construccion', },
                    // { id: 2, subtitle: 'CRM', url: '/construccion', },
                    // { id: 3, subtitle: 'Proyectos: Remote Agility', url: '/construccion', },
                    { id: 0, subtitle: 'ERP 360', url: '/', }
                ],
            },

            sistit: {
                title: 'IT Systems',
                url: 'https://www.estelio.com/en/it-systems',
                subtitles: [
                    // { id: 0, subtitle: 'Hosting Odoo', url: '/construccion', },
                    // { id: 2, subtitle: 'Hosting Moodle', url: '/construccion', },
                    // { id: 3, subtitle: 'Monitoreo de IT', url: '/construccion', },
                    // { id: 4, subtitle: 'Migraciones a la Nube', url: '/construccion', },
                    // { id: 5, subtitle: 'Arquitecturas de nube privada', url: '/construccion', },
                ],
            },
            sistiot: {
                title: 'IoT Systems',
                url: 'https://www.estelio.com/en/iot-systems',
                subtitles: [
                    { id: 0, subtitle: 'CoolTrack', url: 'https://www.estelio.com/en/cooltrack', },
                    { id: 1, subtitle: 'Monitor 360 - Data Center', url: 'https://www.estelio.com/en/data-center', },
                    // { id: 3, subtitle: 'Monitor 360 - Smart Retail', url: '/smart-retail', },
                ],
            },
            learning: {
                title: 'Training and Knowledge Management',
                url: 'https://www.estelio.com/en/learning',
                subtitles: [
                    // { id: 1, subtitle: 'eAcademy', url: '/construccion', },
                    // { id: 2, subtitle: 'Creación de Módulos y Contenido', url: '/construccion', },
                    // { id: 3, subtitle: 'Programas Onboarding', url: '/construccion', },
                    // { id: 4, subtitle: 'Catálogo Formativo', url: '/construccion', },
                    // { id: 5, subtitle: 'Learning Analytics', url: '/construccion', },
                    { id: 0, subtitle: 'Transformate.ai', url: 'https://www.transformate.ai/login/index.php', },
                ],
            }
        },
        { id: 4, title: 'Blog', url: 'https://www.estelio.com/en/blog'},
        { id: 5, title: 'Contact us', url: '#vinculoContact' }
    ],
}