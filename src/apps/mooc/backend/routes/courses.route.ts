import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { body } from 'express-validator';
import { validateReqSchema } from '.';


export const register = (router: Router) => {

  const reqSchema = [
    body('id').exists().isString().isUUID('4'),
    body('name').exists().isString(),
    body('duration').exists().isNumeric(),
  ]

  const coursePutController = container.get('Apps.mooc.controllers.CoursePutController');
  router.put('/courses/:id',reqSchema,validateReqSchema, (req: Request, res: Response) => coursePutController.run(req, res));
};
