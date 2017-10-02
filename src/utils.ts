function isFunction(x: any): x is () => any {
    return typeof x === 'function';
}

function isString(x: any): x is string {
    return typeof x === 'string';
}

function isObject(x: any): x is object {
    return x === Object(x);
}

function isPromise(x: any): x is Promise<object> {
    return !!x && (typeof x === 'object' || typeof x === 'function') && typeof x.then === 'function';
  }

function nextId() {
    // TODO: implement
    return 'd';
}

export {
    isFunction,
    isString,
    isObject,
    isPromise,

    nextId
};