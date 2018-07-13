import { Pizza } from '../Pizza';

class ChicagoStyleClamPizza extends Pizza {

    prepare(): void {
        console.log('This is how we prepare a ChicagoStyleClamPizza');
    }

    bake(): void {
        console.log('This is how we bake a ChicagoStyleClamPizza');
    }

    cut(): void {
        console.log('This is how we cut a ChicagoStyleClamPizza');
    }

    box(): void {
        console.log('This is how we box a ChicagoStyleClamPizza');
    }
}

export { ChicagoStyleClamPizza };
