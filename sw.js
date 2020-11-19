importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox)
    console.log(`Workbox berhasil dimuat`);
else
    console.log(`Workbox gagal dimuat`);

workbox.precaching.precacheAndRoute([
    {url:'/', revision:'2'},
    {url:'/components/nav.html', revision:'2'},
    {url:'/css/materialize.min.css', revision:'2'},
    {url:'/css/style.css', revision:'2'},
    {url:'/img/Fifa.svg', revision:'2'},
    {url:'/img/logo.png', revision:'2'},
    {url:'/js/api.js', revision:'2'},
    {url:'/js/competitions.js', revision:'7'},
    {url:'/js/db.js', revision:'2'},
    {url:'/js/idb.js', revision:'2'},
    {url:'/js/main.js', revision:'2'},
    {url:'/js/matches.js', revision:'2'},
    {url:'/js/materialize.min.js', revision:'2'},
    {url:'/js/nav.js', revision:'2'},
    {url:'/pages/competitions/html', revision:'2'},
    {url:'/pages/last-matches.html', revision:'2'},
    {url:'/pages/matches.html', revision:'2'},
    {url:'/pages/saved.html', revision:'2'},
    {url:'/.eslintrc.json', revision:'2'},
    {url:'/detail-competitions.html', revision:'2'},
    {url:'/manifest.json', revision:'2'},
    {url:'/push.js', revision:'2'},
    {url:'/sw.js', revision:'8'}
]);

workbox.routing.registerRoute(
    new RegExp('/pages/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'pages'
    })
);

workbox.routing.registerRoute(
    new RegExp('/js/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'js'
    })
);

workbox.routing.registerRoute(
    new RegExp('/img/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'img'
    })
);

workbox.routing.registerRoute(
    new RegExp('/components/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'components'
    })
);

workbox.routing.registerRoute(
    new RegExp('/css/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'css'
    })
);

workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets'
    })
);

workbox.routing.registerRoute(
    new RegExp("https://api.football-data.org/v2/"),
    workbox.strategies.networkFirst({
        networkTimeoutSeconds: 5, 
        cacheName: 'data-api'
    })
);