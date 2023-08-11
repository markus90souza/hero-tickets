import { NextFunction, Request, Response } from 'express'
import { HttpException } from '../interfaces/httpException'

interface ErrorMiddlewareProps {
  error: HttpException
  request: Request
  response: Response
  next: NextFunction
}

export const errorMiddleware = ({
  error,
  next,
  request,
  response,
}: ErrorMiddlewareProps) => {
  const status: number = error.status ?? 500
  const message: string = error.message ?? 'Internal server error'

  response.status(status).json({
    status,
    message,
  })
}
