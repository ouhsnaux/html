module.exports = {
  base: '/html/',
  title: 'HTML',
  description: 'HTML 笔记',
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