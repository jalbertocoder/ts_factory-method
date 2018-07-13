import { Pizza } from '../Pizza';

class NYStylePepperoniPizza extends Pizza {

    prepare(): void {
        console.log('This is how we prepare a NYStylePepperoniPizza');
    }

    bake(): void {
        console.log('This is how we bake a NYStylePepperoniPizza');
    }

    cut(): void {
        console.log('This is how we cut a NYStylePepperoniPizza');
    }

    box(): void {
        console.log('This is how we box a NYStylePepperoniPizza');
    }
}

export { NYStylePepperoniPizza };
