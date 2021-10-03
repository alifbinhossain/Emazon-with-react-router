const getDb = () => localStorage.getItem("shopping_cart");
const updateDb = (cart) =>
  localStorage.setItem("shopping_cart", JSON.stringify(cart));
const getStoredCart = () => {
  const exist = getDb();
  return exist ? JSON.parse(exist) : {};
};
const clearTheCart = () => {
  const exist = getDb();
  if (exist) {
    localStorage.removeItem("shopping_cart");
  }
};

const addToCart = (id, isTrue) => {
  const exist = getDb();
  let shoppingCart = {};
  if (!exist && isTrue) {
    shoppingCart[id] = 1;
  } else {
    shoppingCart = JSON.parse(exist);
    if (shoppingCart[id]) {
      if (isTrue) {
        const newCount = shoppingCart[id] + 1;
        shoppingCart[id] = newCount;
      } else {
        const newCount = shoppingCart[id] - 1;
        shoppingCart[id] = newCount;
      }
    } else {
      shoppingCart[id] = 1;
    }
  }
  updateDb(shoppingCart);
};

const deleteFromCart = (id) => {
  const exist = getDb();
  if (exist) {
    const cart = JSON.parse(exist);
    delete cart[id];
    updateDb(cart);
  }
};

export { addToCart, deleteFromCart, getStoredCart, clearTheCart, updateDb };

// use local storage as your db for now
/* const addToDb = id => {
  const exists = getDb();
  let shopping_cart = {};
  if (!exists) {
    shopping_cart[id] = 1;
  }
  else {
    shopping_cart = JSON.parse(exists);
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    }
    else {
      shopping_cart[id] = 1;
    }
  }
  updateDb(shopping_cart);
}

const getDb = () => localStorage.getItem('shopping_cart');
const updateDb = cart => {
  localStorage.setItem('shopping_cart', JSON.stringify(cart));
}

const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const shopping_cart = JSON.parse(exists);
    delete shopping_cart[id];
    updateDb(shopping_cart);
  }
}

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
  localStorage.removeItem('shopping_cart');
}

export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart } */
