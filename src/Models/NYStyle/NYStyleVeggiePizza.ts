import { Pizza } from '../Pizza';

class NYStyleVeggiePizza extends Pizza {

    prepare(): void {
        console.log('This is how we prepare a NYStyleVeggiePizza');
    }

    bake(): void {
        console.log('This is how we bake a NYStyleVeggiePizza');
    }

    cut(): void {
        console.log('This is how we cut a NYStyleVeggiePizza');
    }

    box(): void {
        console.log('This is how we box a NYStyleVeggiePizza');
    }
}

export { NYStyleVeggiePizza };
