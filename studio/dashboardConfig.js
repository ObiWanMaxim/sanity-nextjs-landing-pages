export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5dab24005aa1feefde5a6684',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-u6k1xh97',
                  apiId: '6836d667-b2d2-40d8-b151-76c61424aee8'
                },
                {
                  buildHookId: '5dab24005aa1fe19d15a666d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7b4b4uox',
                  apiId: '280d8ace-bd3f-4fcb-a402-4c8471dcbd02'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ObiWanMaxim/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7b4b4uox.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
