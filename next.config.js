module.exports = {
  // All the other config options you may have...
  async redirects() {
    return [
      {
        // What the user typed in the browser
        source: '/haircut-now-biz-barber-app',
        // Where the user will be redirected to
        destination: '/',
        // If the destination is a permanent redirect (308)
        permanent: true,
      },
      {
        // What the user typed in the browser
        source: '/our-blog',
        // Where the user will be redirected to
        destination: '/',
        // If the destination is a permanent redirect (308)
        permanent: true,
      },
      {
        // What the user typed in the browser
        source: '/barber-blog',
        // Where the user will be redirected to
        destination: '/',
        // If the destination is a permanent redirect (308)
        permanent: true,
      },
      {
        // What the user typed in the browser
        source: '/barbershop-chair-rentals-jobs',
        // Where the user will be redirected to
        destination: '/',
        // If the destination is a permanent redirect (308)
        permanent: true,
      },
      {
        // What the user typed in the browser
        source: '/post-a-job',
        // Where the user will be redirected to
        destination: '/',
        // If the destination is a permanent redirect (308)
        permanent: true,
      },
    ];
  },
};
