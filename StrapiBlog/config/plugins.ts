const pluginsConfig = ({ env }) => ({
    'netlify-deployments': {
      enabled: true,
      config: {
        accessToken: env('NETLIFY_ACCESS_TOKEN'),
        sites: [
          {
            name: 'strapi360',
            buildHook: env('NETLIFY_BUILD_HOOK'),
            branch: 'QA',
          },
        ],
      },
    },
  });
  
  export default pluginsConfig;
  