import { Router, Request, Response, NextFunction} from 'express';
import * as types from '../types';
const router = Router();

router.get('/', async (req:Request, res:Response, next:NextFunction) => {
  try {
    res.send();
  } catch (error: unknown) {
    return next(error);
  }
})

export default router;