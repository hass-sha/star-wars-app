import express from 'express';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import * as person from '../controllers/person.controller';
import {APIError, Person} from '../models/core.model';

const router = express.Router();

router.get('/:id', (req, res) => {
  const id = req.params.id;
  if (person.validateId(id)) {
    person.getPerson(id)
      .pipe(catchError(((err): Observable<APIError> => {
        return of({
          error: err.response.statusCode,
          message: err.response.statusMessage
        });
      })))
      .subscribe((response: Partial<Person> | APIError) => {
        res.send(response);
      });
  } else {
    res.send({
      error: 403,
      message: 'Invalid Person Id'
    });
  }
});

export = router;
