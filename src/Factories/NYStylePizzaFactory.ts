import { PizzaFactory } from './PizzaFactory';
import { Pizza } from '../Pizzas/Pizza';
import { NYStyleCheesePizza } from '../Pizzas/NYStyle/NYStyleCheesePizza';
import { NYStyleClamPizza } from '../Pizzas/NYStyle/NYStyleClamPizza';
import { NYStylePepperoniPizza } from '../Pizzas/NYStyle/NYStylePepperoniPizza';
import { NYStyleVeggiePizza } from '../Pizzas/NYStyle/NYStyleVeggiePizza';

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
