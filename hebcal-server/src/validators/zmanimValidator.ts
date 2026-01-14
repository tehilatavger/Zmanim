import { z } from 'zod';

export const zmanimQuerySchema = z.object({
  lat: z.string()
    .refine((val) => !isNaN(Number(val)), { message: 'Latitude must be a number' })
    .refine((val) => {
      const num = Number(val);
      return num >= -90 && num <= 90;
    }, { message: 'Latitude must be between -90 and 90' }),
  
  lng: z.string()
    .refine((val) => !isNaN(Number(val)), { message: 'Longitude must be a number' })
    .refine((val) => {
      const num = Number(val);
      return num >= -180 && num <= 180;
    }, { message: 'Longitude must be between -180 and 180' }),
});

export type ZmanimQuery = z.infer<typeof zmanimQuerySchema>;
