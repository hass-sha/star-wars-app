import express from 'express';
import logger from 'morgan';
import personRouter from './routes/person.route';
import clientAssets from './routes/serve-assets';
import clientCore from './routes/serve-client-core';

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));

app.use('/assets/*', clientAssets);
app.use('/person', personRouter);
app.use('/', clientCore);

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
