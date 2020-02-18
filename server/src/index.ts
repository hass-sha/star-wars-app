import express from 'express';
import logger from 'morgan';
import personRouter from './routes/person.route';

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));

app.use('/person', personRouter);

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
