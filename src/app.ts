/* -------------------------------------------------------------------------- */
/*                              External imports                              */
/* -------------------------------------------------------------------------- */

import createError from 'http-errors'
import express, { Request, Response} from 'express';
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

/* -------------------------------------------------------------------------- */
/*                              Internal imports                              */
/* -------------------------------------------------------------------------- */

import indexRouter from './routes/index'
import usersRouter from './routes/users'

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err: any, req: Request, res: Response) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

export default app;
