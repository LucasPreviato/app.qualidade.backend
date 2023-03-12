import { ILaboratory } from '../interfaces/laboratory.interface';

export class Laboratory implements ILaboratory {
  id?: number;
  name: string;
  nickname?: string;
  cgc?: string;
  IE?: string;
  IM?: string;
  email?: string;
  phone?: string;
  website?: string;
}
