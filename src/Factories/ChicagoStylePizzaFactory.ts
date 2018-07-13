import { PizzaFactory } from './PizzaFactory';
import { Pizza } from '../Pizzas/Pizza';
import { ChicagoStyleCheesePizza } from '../Pizzas/ChicagoStyle/ChicagoStyleCheesePizza';
import { ChicagoStyleClamPizza } from '../Pizzas/ChicagoStyle/ChicagoStyleClamPizza';
import { ChicagoStylePepperoniPizza } from '../Pizzas/ChicagoStyle/ChicagoStylePepperoniPizza';
import { ChicagoStyleVeggiePizza } from '../Pizzas/ChicagoStyle/ChicagoStyleVeggiePizza';

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
