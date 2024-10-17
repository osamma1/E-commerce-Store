// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  
  // Simple form validation
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return;
    }
  
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
  
    alert("Form submitted successfully!");
    this.reset();
  });
  
  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
   function addToCart(id, name, price) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const newItem = { id, name, price };
    cartItems.push(newItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${name} has been added to the cart!`);
  }
  // document.querySelectorAll('.add-to-cart').forEach(button => {
  //   button.addEventListener('click', function() {
  //       const productId = this.getAttribute('data-product-id');
  //       const productName = this.getAttribute('data-product-name');
  //       const productPrice = this.getAttribute('data-product-price');
        
       
  //       let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
       
  //       cart.push({
  //           id: productId,
  //           name: productName,
  //           price: productPrice
  //       });
        
  //        localStorage.setItem('cart', JSON.stringify(cart));
        
       
  //       document.getElementById('cart-count').innerText = cart.length;
        
  //       alert(`${productName} has been added to your cart!`);
  //   });
  // });
  
  
  
  
  // Initialize an empty cart array
  let cart = [];
  
  // Function to add a product to the cart
  function addToCart(product) {
      cart.push(product);
      updateCartDisplay();
  }
  
  // Function to update the cart display
  function updateCartDisplay() {
      const cartItemsContainer = document.getElementById("cart-items");
      const cartTotal = document.getElementById("cart-total");
  
      // Clear the current cart items display
      cartItemsContainer.innerHTML = '';
      
      // Calculate total price
      let total = 0;
  
      // Add each item in the cart to the display
      cart.forEach(item => {
          const row = document.createElement("tr");
          row.innerHTML = `<td>${item.name}</td><td>$${item.price.toFixed(2)}</td>`;
          cartItemsContainer.appendChild(row);
          total += item.price; // Add item price to total
      });
  
      // Update the total price in the cart
      cartTotal.textContent = total.toFixed(2);
  }
  
  // Event listener for the Add to Cart buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
          const product = {
              id: button.getAttribute('data-product-id'),
              name: button.getAttribute('data-product-name'),
              price: parseFloat(button.getAttribute('data-product-price'))
          };
          addToCart(product); // Add product to cart
      });
  });