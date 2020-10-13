export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f85f02e4faec86e847e6986',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ox2on2me',
                  apiId: 'a09bb018-11f5-4a77-9712-f9a0e9b02931'
                },
                {
                  buildHookId: '5f85f02e19d328590adc79bb',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-e121t3cw',
                  apiId: '84e50879-2031-494d-bbc4-5f43b6726a70'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HeleneGrini/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-e121t3cw.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
