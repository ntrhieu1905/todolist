import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

export const generatedId = () => {
  const id = uuidv4();
  return id;
};