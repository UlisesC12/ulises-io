/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ulises.io',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://ulises.io/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Prioridades personalizadas
    const priority =
      path === '/' ? 1.0 :
        path === '/cv' ? 0.9 :
          path.startsWith('/blog') ? 0.8 : 0.7;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};