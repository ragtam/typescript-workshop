// 1. Update add type annotations to greet function. ( strict: true setting in tsconfig )
// 2. Update unit test with correct params.

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date}!`);
}

greet('Tom', new Date());
