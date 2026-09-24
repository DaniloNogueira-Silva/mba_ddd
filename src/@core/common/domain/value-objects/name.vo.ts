import { ValueObject } from './value-object';

export class Name extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }

  isValid(): boolean {
    return this.value.length >= 3;
  }
}
