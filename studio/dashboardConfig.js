export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e0cdb9cf46ea3e6216637bf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vfqed15w',
                  apiId: 'aa2a370a-623b-492f-988d-e99902d1af6b'
                },
                {
                  buildHookId: '5e0cdb9c86b5db26feea1cef',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7erdk4yy',
                  apiId: 'cce42170-9f51-496f-9a72-3b2fec297ae9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/khalim/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7erdk4yy.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
