import { Router, Request, Response } from 'express';
import { fetchZmanim } from '../services/hebcalService';
import { zmanimQuerySchema } from '../validators/zmanimValidator';
import { asyncHandler, AppError } from '../middleware/errorHandler';

const router = Router();

router.get('/', asyncHandler(async (req: Request, res: Response) => {
  const result = zmanimQuerySchema.safeParse(req.query);
  
  if (!result.success) {
    const errors = result.error.issues.map((e) => e.message).join(', ');
    throw new AppError(errors, 400);
  }

  const { lat, lng } = result.data;
  const date = req.query.date as string | undefined;
  const data = await fetchZmanim(lat, lng, date);
  
  res.json({
    status: 'success',
    data,
  });
}));

export default router;