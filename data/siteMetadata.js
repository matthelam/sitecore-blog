/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Matt Lam | Agentic Sitecore Development',
  author: 'Matt Lam',
  headerTitle: 'matthelam',
  description:
    'Field notes on agentic Sitecore development by Matt Lam: Sitecore Agentic Studio, SitecoreAI and agent context engineering. Technical Architect at Aceik.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://matthelam.com',
  // RSS guids stay on the host the feed was first published from, so moving the site to
  // matthelam.com doesn't make feed readers show every post again as new.
  feedGuidBase: 'https://blog.matthelam.com',
  siteRepo: 'https://github.com/matthelam/sitecore-blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  // Optional explicit logo dimensions used by the Header component
  // Adjust these to scale the logo proportionally (original was 40x40)
  siteLogoWidth: 85,
  siteLogoHeight: 85,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/matthelam_lighthouse_background.png`,
  //mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'matthewlam@aceik.com.au',
  github: 'https://github.com/matthelam',
  //facebook: 'https://facebook.com',
  //youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/matthew-lam-47184416',
  //threads: 'https://www.threads.net',
  //instagram: 'https://www.instagram.com',
  //medium: 'https://medium.com',
  //bluesky: 'https://bsky.app/',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  // Analytics: Vercel Web Analytics, wired in app/layout.tsx (no config or env var needed here).
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
