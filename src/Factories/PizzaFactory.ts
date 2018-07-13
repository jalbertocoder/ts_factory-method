import { Pizza } from '../Pizzas/Pizza';

abstract class PizzaFactory {

    OrderPizza(type: string): Pizza {
        let pizza: Pizza;

        pizza = this.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }

    abstract createPizza(type: string): Pizza;
}

export { PizzaFactory };
