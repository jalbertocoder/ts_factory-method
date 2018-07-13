import { Pizza } from '../Pizza';

class NYStyleCheesePizza extends Pizza {

    prepare(): void {
        console.log('This is how we prepare a NYStyleCheesePizza');
    }

    bake(): void {
        console.log('This is how we bake a NYStyleCheesePizza');
    }

    cut(): void {
        console.log('This is how we cut a NYStyleCheesePizza');
    }

    box(): void {
        console.log('This is how we box a NYStyleCheesePizza');
    }
}

export { NYStyleCheesePizza };
