const fs = require('fs');
const {createBundleRenderer} = require('vue-server-renderer');
const serverBundle = require('../dist/vue-ssr-server-bundle.json');
const clientManifest = require('../dist/vue-ssr-client-manifest.json');

const template = fs.readFileSync('renderer/index.template.html', 'utf-8');

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // рекомендуется
    template,
    clientManifest // (опционально) манифест клиентской сборки
});

const context = {
    title: 'привет',
    meta: `
    <meta charset="utf-8">
  `
};

// с версии 2.5.0+, возвращает Promise если коллбэк не указан:
renderer.renderToString(context).then(html => {
    console.log(html);

    fs.writeFile('dist/index.html', html, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}).catch(err => {
    console.error(err)
});
