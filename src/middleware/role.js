import controller from '../controllers/orderController';

export default {
  salesperson:['/orders', controller.getAllOrders],
  admin:['/orders', controller.addOrder]
}
