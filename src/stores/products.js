import { observable, action, computed, set, get } from 'mobx';
import { products } from '../Data/products';

class Products {
  @observable allProducts = products;
  @observable searchedProducts = products;

  @action searchItems(search) {
    this.searchedProducts = products.filter(product => {
      const searchItem = search.toLowerCase();
      const productName = product.name.toLowerCase();
      const productDescription = product.description.toLowerCase();
      return (
        productName.includes(searchItem) ||
        productDescription.includes(searchItem)
      );
    });
  }
}

const productsStore = new Products();

export default productsStore;
