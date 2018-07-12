import { Pizza } from '../Pizza';

class ChicagoStyleVeggiePizza extends Pizza {

    prepare(): void {
        console.log('This is how we prepare a ChicagoStyleVeggiePizza');
    }

    bake(): void {
        console.log('This is how we bake a ChicagoStyleVeggiePizza');
    }

    cut(): void {
        console.log('This is how we cut a ChicagoStyleVeggiePizza');
    }

    box(): void {
        console.log('This is how we box a ChicagoStyleVeggiePizza');
    }
}

export { ChicagoStyleVeggiePizza };
