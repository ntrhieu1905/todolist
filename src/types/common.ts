export enum DelFlg {
  undeleted = 0,
  deleted = 1,
}

export interface commonField {
  id: string;
  delFlg?: DelFlg;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
