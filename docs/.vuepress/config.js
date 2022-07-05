module.exports = {
  title: 'HTML',
  description: 'HTML 语法',
  themeConfig: {
    searchMaxSuggestions: 5,
    nextLinks: true,
    prevLinks: true,
    sidebar: [
      '/',
      '/grammar',
      {
        title: '标签',
        // path: '/tags',
        children: [
          '/tags/head',
          '/tags/base',
          '/tags/link',
          '/tags/image',
          '/tags/media',
          '/tags/table',
          '/tags/form',
          '/tags/iframe',
        ]
      },
      '/attributes',
      '/events',
      '/standard',
    ]
  }
}