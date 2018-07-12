import { PizzaFactory } from './PizzaFactory';
import { Pizza } from '../Models/Pizza';
import { ChicagoStyleCheesePizza } from '../Models/ChicagoStyle/ChicagoStyleCheesePizza';
import { ChicagoStyleClamPizza } from '../Models/ChicagoStyle/ChicagoStyleClamPizza';
import { ChicagoStylePepperoniPizza } from '../Models/ChicagoStyle/ChicagoStylePepperoniPizza';
import { ChicagoStyleVeggiePizza } from '../Models/ChicagoStyle/ChicagoStyleVeggiePizza';

class ChicagoStylePizzaFactory extends PizzaFactory {

    createPizza(type: string): Pizza {
        let pizza: Pizza;

        switch (type) {
            case 'Cheese':
            pizza = new ChicagoStyleCheesePizza();
            break;
            case 'Clam':
            pizza = new ChicagoStyleClamPizza();
            break;
            case 'Pepperoni':
            pizza = new ChicagoStylePepperoniPizza();
            break;
            case 'Veggie':
            pizza = new ChicagoStyleVeggiePizza();
            break;
        }

        return pizza;
    }
}

export { ChicagoStylePizzaFactory };
