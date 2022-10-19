// 1. write a function that:
// - if provided with number, adds value from config to it
// - if provided with string, makes it uppercase and adds a suffix from config
// - if provided with boolean, returns its negation

interface ConfigForNumber {
    valueToAdd: number;
}

interface ConfigForString {
    suffix: string
}

type Config = ConfigForNumber | ConfigForString;
type ReturnType<T extends number | string> = T extends number ? number : string

function foo<TValue extends number | string>(value: TValue, config: TValue extends number ? ConfigForNumber : ConfigForString): ReturnType<TValue> {
    if( typeof value === 'number' && config && 'valueToAdd' in config ) {
        return value + config.valueToAdd as ReturnType<TValue>;
    } else if ( typeof value === 'string' && config && 'suffix' in config ){
        return `${value}${config.suffix}` as ReturnType<TValue>;
    }

    throw new Error('invalid value');
}

describe('union type, different actions', () => {
    it('should add value from config if value is a number', () => {
        expect(foo(1, { valueToAdd: 2 })).toEqual(3);
    })

    it('should make a string uppercase', () => {
        expect(foo("Hello World", { suffix: '!!!' })).toEqual('HELLO WORLD!!!');
    })
})

export {}
