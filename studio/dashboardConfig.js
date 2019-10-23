export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5db06050a027cf0180763e54',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wa34b1d1',
                  apiId: '481f1efd-d38d-4036-a2bc-1bdd2bf652c4'
                },
                {
                  buildHookId: '5db060508f0d4a018b80419e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-riyprwyd',
                  apiId: '18917625-ecd7-4b2c-8c8b-f3283e6c17a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ijunaid8989/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-riyprwyd.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
