import express from 'express';
import * as person from '../controllers/person.controller';
import {Person} from '../models/core.model';

const router = express.Router();

router.get('/:id', (req, res) => {
  const id = req.params.id;
  if (person.validateId(id)) {
    person.getPerson(id).subscribe((response: Partial<Person>) => {
      res.send(response);
    });
  } else {
    res.send({
      error: '403',
      message: 'Invalid Person Id'
    });
  }
});

export = router;
