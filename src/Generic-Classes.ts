class KeyValuePair<T, B> {
  constructor(public key: T, public value: B) {}
}

let pair = new KeyValuePair<number, string>(1, "hello");

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let number = ArrayUtils.wrapInArray(1);
