import { v4 as uuidv4 } from 'uuid';

export const generatedId = () => {
  const id = uuidv4();
  return id;
};