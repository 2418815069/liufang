module.exports = {
    title: 'My Documentation',
    description: 'Document information for site',

    themeConfig: {
        nav: [
            { text: 'Home', link: '/'},
            { text: 'Guides', link: '/guides/'},
            { text: 'Info', link: '/info/'},
        ],
        sidebar: ['/', '/guides/', '/info/']
    }
};