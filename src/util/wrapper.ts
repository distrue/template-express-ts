import express from 'express';

export default (location: string, asyncFn: express.RequestHandler) => {
  return (async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<any> => {
    try {
      return await asyncFn(req, res, next);
    } catch (error) {
      console.error(location, String(error));
    }
  });
};
