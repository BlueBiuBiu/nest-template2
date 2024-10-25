import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/** 类中间件件 */
// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log('Request...');
//     next();
//   }
// }

/** 函数中间件 */
export function LoggerMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
   console.log(`Request URL: ${req.url}`);
   console.log(`Request Method: ${req.method}`);
   console.log(`Request Time: ${new Date().toISOString()}`);
   console.log(`Request authorization: ${req.headers['authorization']}`);
   console.log(`Request ip: ${req.ip}`);
  next();
};