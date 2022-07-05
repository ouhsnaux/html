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
      '/head',
      {
        title: '主体',
        path: '/body',
        children: [
          {
            title: '标签',
            path: '/tags',
            children: [
              'base',
              'link',
              'image',
              'table',
              'form',
              'media',
              'iframe',
            ]
          },
          'attributes',
          'events',
        ]
      },
      '/standard',
      '/other',
    ]
  }
}