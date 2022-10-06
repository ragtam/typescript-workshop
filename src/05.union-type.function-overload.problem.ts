// 1. write a function that:
// - if provided with number, adds +1 to it
// - if provided with string, makes it uppercase
// - if provided with boolean, returns its negation

// make sure return type is typed correctly based on its input value.

// implementation goes here
function doMoreCleverMagic(value: number | string | boolean): number | string | boolean
{
    return 'implementation goes here';
}

describe('union type, different actions', () => {
    it('should add +1 if value is a number', () => {
        const res: number = doMoreCleverMagic(1);
        expect(res).toEqual(2);
    })

    it('should make a string uppercase', () => {
        const res: string = doMoreCleverMagic("Hello World");
        expect(res).toEqual('HELLO WORLD');
    })

    it('should negate if boolean', () => {
        const res: boolean = doMoreCleverMagic(true);
        expect(res).toEqual(false);
    })
})