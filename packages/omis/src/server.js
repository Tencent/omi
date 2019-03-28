import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import PrettyError from 'pretty-error';
import './my-html';
import router from './router';
//import assets from './asset-manifest.json'; // eslint-disable-line import/no-unresolved
import chunks from './chunk-manifest.json'; // eslint-disable-line import/no-unresolved
import config from './config';
import Omi from 'omio'

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
  // send entire app down. Process manager will restart it
  process.exit(1);
});

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

const app = express();

//
// If you are using proxy from external machine, you can set TRUST_PROXY env
// Default is to trust proxy headers only from loopback interface.
// -----------------------------------------------------------------------------
app.set('trust proxy', config.trustProxy);

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    const css = new Set();
    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
    const insertCss = (...styles) => {
      // eslint-disable-next-line no-underscore-dangle
      styles.forEach(style => css.add(style._getCss()));
    };

    const context = {
      insertCss,
      //fetch,
      // The twins below are wild, be careful!
      pathname: req.path,
      query: req.query,
      //mock
      fetch() {
        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            resolve({
              json: function () {
                return {
                  data: {
                    name: 'Like'
                  }
                }
              }
            })
          }, 1000)
        })
      }
    };

    const route = await router.resolve(context);

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect);
      return;
    }

    const data = { ...route };

    const obj = Omi.renderToString(route.component, {}, route.data)


    const scripts = new Set();
    const addChunk = chunk => {
      if (chunks[chunk]) {
        chunks[chunk].forEach(asset => scripts.add(asset));
      } else if (__DEV__) {
        throw new Error(`Chunk with name '${chunk}' cannot be found`);
      }
    };
    addChunk('client');
    if (route.chunk) addChunk(route.chunk);
    if (route.chunks) route.chunks.forEach(addChunk);

    data.scripts = Array.from(scripts);
    data.app = {
      apiUrl: config.api.clientUrl,
    };

    if (route.data) {
      data.scriptData = 'var __data = ' + JSON.stringify(route.data)
    }

    data.children = obj.html
    data.css = obj.css
    //const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    //const html = ReactDOM.renderToStaticMarkup(<div {...data} />);
    const resutl = Omi.renderToString(<my-html {...data}></my-html>)
    res.status(route.status || 200);

    res.send(`<!doctype html>${resutl.html}`);
  } catch (err) {
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(pe.render(err));
  res.status(err.status || 500);
  res.send(`<!doctype html>${'error!'}`);
});

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (module.hot) {
  app.hot = module.hot;
  //module.hot.accept();
  module.hot.accept();
}

export default app;
