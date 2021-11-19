import { Request, Response } from 'express'
import { users } from '../data'
import { BaseHandler } from '../interfaces/handler'


class Subjects extends BaseHandler {
  static getAllSubjects(req: Request, res: Response) {
    return res.status(200).send({ users })
  }
}

export default Subjects