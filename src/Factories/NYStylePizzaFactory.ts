import { PizzaFactory } from './PizzaFactory';
import { Pizza } from '../Models/Pizza';
import { NYStyleCheesePizza } from '../Models/NYStyle/NYStyleCheesePizza';
import { NYStyleClamPizza } from '../Models/NYStyle/NYStyleClamPizza';
import { NYStylePepperoniPizza } from '../Models/NYStyle/NYStylePepperoniPizza';
import { NYStyleVeggiePizza } from '../Models/NYStyle/NYStyleVeggiePizza';

class NYStylePizzaFactory extends PizzaFactory {

    createPizza(type: string): Pizza {
        let pizza: Pizza;

        switch (type) {
            case 'Cheese':
            pizza = new NYStyleCheesePizza();
            break;
            case 'Clam':
            pizza = new NYStyleClamPizza();
            break;
            case 'Pepperoni':
            pizza = new NYStylePepperoniPizza();
            break;
            case 'Veggie':
            pizza = new NYStyleVeggiePizza();
            break;
        }

        return pizza;
    }
}

export { NYStylePizzaFactory };
