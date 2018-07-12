import { Pizza } from '../Pizza';

class ChicagoStyleCheesePizza extends Pizza {

    prepare(): void {
        console.log('This is how we prepare a ChicagoStyleCheesePizza');
    }

    bake(): void {
        console.log('This is how we bake a ChicagoStyleCheesePizza');
    }

    cut(): void {
        console.log('This is how we cut a ChicagoStyleCheesePizza');
    }

    box(): void {
        console.log('This is how we box a ChicagoStyleCheesePizza');
    }
}

export { ChicagoStyleCheesePizza };
