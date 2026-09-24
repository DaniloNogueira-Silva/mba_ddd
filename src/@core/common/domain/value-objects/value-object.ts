import isEqual from 'lodash/isEqual';

export abstract class ValueObject<Value = any> {
  protected readonly _value: Value;

  constructor(value: Value) {
    this._value = deepFreeze(value);
  }

  public get value(): Value {
    return this._value;
  }

  public equals(obj: this): boolean {
    if (obj === null || obj === undefined) return false;

    if (obj.value === undefined) return false;

    if (obj.constructor.name !== this.constructor.name) return false;

    return isEqual(this._value, obj._value);
  }
}

function deepFreeze<T>(obj: T): T {
  try {
    const propNames = Object.getOwnPropertyNames(obj);

    for (const name of propNames) {
      const value = (obj as any)[name];

      if (value && typeof value === 'object') {
        deepFreeze(value);
      }
    }

    return Object.freeze(obj);
  } catch (error) {
    return obj;
  }
}
