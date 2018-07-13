import { PizzaFactory } from './Factories/PizzaFactory';
import { ChicagoStylePizzaFactory } from './Factories/ChicagoStylePizzaFactory';
import { NYStylePizzaFactory } from './Factories/NYStylePizzaFactory';

import { Pizza } from './Pizzas/Pizza';

function main() {
    let pizzaFactory: PizzaFactory;
    let pizza: Pizza;

    // ==================================================== Chicago Style Pizzas
    console.log('======================================= Chicago Style Pizzas');
    pizzaFactory = new ChicagoStylePizzaFactory();
    pizza = pizzaFactory.OrderPizza('Cheese');
    pizza = pizzaFactory.OrderPizza('Clam');
    pizza = pizzaFactory.OrderPizza('Pepperoni');
    pizza = pizzaFactory.OrderPizza('Veggie');

    // ========================================================= NY Style Pizzas
    console.log('============================================ NY Style Pizzas');
    pizzaFactory = new NYStylePizzaFactory();
    pizza = pizzaFactory.OrderPizza('Cheese');
    pizza = pizzaFactory.OrderPizza('Clam');
    pizza = pizzaFactory.OrderPizza('Pepperoni');
    pizza = pizzaFactory.OrderPizza('Veggie');
}

main();
