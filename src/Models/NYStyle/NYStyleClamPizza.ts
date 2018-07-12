import { Pizza } from '../Pizza';

class NYStyleClamPizza extends Pizza {

    prepare(): void {
        console.log('This is how we prepare a NYStyleClamPizza');
    }

    bake(): void {
        console.log('This is how we bake a NYStyleClamPizza');
    }

    cut(): void {
        console.log('This is how we cut a NYStyleClamPizza');
    }

    box(): void {
        console.log('This is how we box a NYStyleClamPizza');
    }
}

export { NYStyleClamPizza };
