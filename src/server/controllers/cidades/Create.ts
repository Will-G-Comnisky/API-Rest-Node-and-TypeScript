import { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middlewares';


interface ICidade {
  nome: string;
  estado: string;
}
interface IFilter {
  filter?: string;
}
export const createValidation = validation((getSchema) => ({
  body: getSchema<ICidade>(yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3),
  })),
  query: getSchema<IFilter>(yup.object().shape({
    filter: yup.string().optional().min(3),
  })),
}));

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  console.log(req.body);


  return res.send('Create!');
};