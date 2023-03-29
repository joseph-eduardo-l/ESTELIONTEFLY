export default {
    vinculos: [
        { id: 1, title: 'Home', url: '/' },
        { id: 2, title: 'About us', url: '/about' },
        {
            id: 3, title: 'Products and Services', url: '',
            consultoria: [
                { id: 0, subtitle: 'Consultancy', url: '/consultancy' },
                { id: 1, title: 'BI and Analytics', url: '/construccion', },
                { id: 2, title: 'Processes and workflows', url: '/construccion', },
                { id: 3, title: 'Projects management', url: '/construccion', },
                { id: 4, title: 'Products Evaluation', url: '/construccion', },
                { id: 5, title: 'Digital Transformation', url: '/construccion', }
            ],
            empresariales: [
                { id: 0, subtitle: 'Business Systems', url: '/businessSystems' },
                { id: 1, title: 'POS', url: '/construccion', },
                { id: 2, title: 'CRM', url: '/construccion', },
                { id: 3, title: 'Projects: Remote Agility', url: '/construccion', },
                { id: 4, title: 'ERP', url: '/construccion', }
            ],
            sistit: [
                { id: 0, subtitle: 'IT Systems', url: '/it-systems' },
                { id: 1, title: 'Odoo Hosting', url: '/construccion', },
                { id: 2, title: 'Moodle Hosting', url: '/construccion', },
                { id: 3, title: 'IT Monitoring', url: '/construccion', },
                { id: 4, title: 'Cloud Migrations', url: '/construccion', },
                { id: 5, title: 'Private Cloud Architectures', url: '/construccion', },
            ],
            sistiot: [
                { id: 0, subtitle: 'IoT systems', url: '/iot-systems' },
                { id: 1, title: 'CoolTrack - Cold chain', url: '/cooltrack', },
                { id: 2, title: 'Monitor 360 - Data Center', url: '/data-center', },
                { id: 3, title: 'Monitor 360 - Smart Retail', url: '/smart-retail', },
            ],
            learning: [
                { id: 0, subtitle: 'Training and Knowledge Management', url: '/learning' },
                { id: 1, title: 'eAcademy', url: '/construccion', },
                { id: 2, title: 'Create modules and content', url: '/construccion', },
                { id: 3, title: 'Onboarding Programs', url: '/construccion', },
                { id: 4, title: 'Training Catalogue', url: '/construccion', },
                { id: 5, title: 'Learning Analytics', url: '/construccion', },
                { id: 6, title: 'Training SaaS - Transformate.ai', url: '/construccion', },
            ],
        },
        {
            id: 4, title: 'Insights', url: '',
            noticias: [
                { id: 0, title: 'Blog', url: '/blog' },
                // {id: 1, title: 'Research', url: '/construccion'}
            ]
        },
        { id: 5, title: 'Contact us', url: '/contact' }
    ],
}