import { Pizza } from '../Pizza';

class ChicagoStylePepperoniPizza extends Pizza {

    prepare(): void {
        console.log('This is how we prepare a ChicagoStylePepperoniPizza');
    }

    bake(): void {
        console.log('This is how we bake a ChicagoStylePepperoniPizza');
    }

    cut(): void {
        console.log('This is how we cut a ChicagoStylePepperoniPizza');
    }

    box(): void {
        console.log('This is how we box a ChicagoStylePepperoniPizza');
    }
}

export { ChicagoStylePepperoniPizza };
