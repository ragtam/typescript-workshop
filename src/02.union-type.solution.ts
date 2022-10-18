// 1. write a function that appends value type suffix to its value.

function getValueWithDescription(value: number | string | boolean): string {
    return `${ value } (${ typeof value })`
}

describe('union type', () => {
    it('should return "1 (number)" for 1', () => {
        expect(getValueWithDescription(1)).toEqual('1 (number)')
    })

    it('should return "1 (number)" for "1"', () => {
        expect(getValueWithDescription("1")).toEqual('1 (string)')
    })

    it('should return "true (number)" for true', () => {
        expect(getValueWithDescription(true)).toEqual('true (boolean)')
    })
})

export {}