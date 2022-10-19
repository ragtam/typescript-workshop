// 1. refactor an overloaded function with a conditional type

interface ConfigForNumber {
    valueToAdd: number;
}

interface ConfigForString {
    suffix: string
}

type Config = ConfigForNumber | ConfigForString;

function foo(value: number, config: ConfigForNumber): number
function foo(value: string, config: ConfigForString): string
function foo(value: number | string, config: Config): number | string {
    if( typeof value === 'number' && config && 'valueToAdd' in config ) {
        return value + config.valueToAdd;
    } else if (typeof value === 'string' && config && 'suffix' in config) {
        return `${value}${config.suffix}`;
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
