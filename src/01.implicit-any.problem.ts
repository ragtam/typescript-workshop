// 1. Update add type annotations to greet function. ( strict: true setting in tsconfig )
// 2. Update unit test with correct params.

function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}!`);
}

it('should be called with name and date', () => {
    greet("Tom");
})