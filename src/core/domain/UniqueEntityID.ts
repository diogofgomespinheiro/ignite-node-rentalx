import { nanoid } from 'nanoid';

import { Identifier } from './Identifier';

export class UniqueEntityID extends Identifier<string> {
  constructor(id?: string) {
    super(id || nanoid());
  }
}
