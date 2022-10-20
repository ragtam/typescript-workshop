interface Animal {
    name: string;
}

interface Dog extends Animal {
    bark: () => void;
}

interface Cat {
    meow: () => void;
}

const animal: Animal = { name: 'Triceratops' };
const dog: Dog = { name: 'Chase', bark: () => console.log('I am barking!') };

type IsDogAnAnimal = Dog extends Animal ? number : string;
type IsCatAnimal = Cat extends Animal ? number : string;

export {};
