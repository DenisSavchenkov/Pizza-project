const calkTotalPrice = () => {
  state.totalItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
};
