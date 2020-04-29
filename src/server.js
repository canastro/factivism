import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

import facts from './data/facts';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express();
app.get('/fact', function (req, res, next) {
  const newIndex = Math.floor(Math.random() * facts.length);
  res.redirect(`/fact/${facts[newIndex].slug}`);
});

app.use(compression({ threshold: 0 }), sirv('static', { dev }), sapper.middleware());
app.listen(PORT, (err) => {
  if (err) console.log('error', err);
});

export default app;
