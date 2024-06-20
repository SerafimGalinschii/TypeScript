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

// http://mywebsite.com/users
// http://mywebsite.com/prosducts

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  product: string;
}

let result = fetch<Product>("url");
result.data?.product;
