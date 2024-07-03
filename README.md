# rn-assignment6-11210904

### App Design
The application is a straightforward e-commerce app featuring two main screens: HomeScreen and CartScreen. It offers a modern and clean design for an intuitive shopping experience.


### HomeScreen Design
Header: Contains a logo and icons for menu and search.
Product List: Displays products in a grid format with image, title, subtitle, price, and an add-to-cart button.
Minimized Space Above Product Container: Reduced padding and margins to show more products on the screen.
"View your Items" Button: Allows navigation to the CartScreen to review selected items.


### CartScreen Design
Header: Includes a logo, optional search icon, and a title "CHECKOUT".
Cart Items: Lists items in the cart with image, title, subtitle, price, and a remove button.
Total Calculation: Displays the estimated total cost of items in the cart.
Checkout Button: Prominently displayed with a shopping bag icon for proceeding with the purchase.


### Data Storage Implementation
AsyncStorage: Used for persisting cart data locally on the device.
Add to Cart: Updates and saves the cart state in AsyncStorage whenever a new product is added.
Remove from Cart: Updates and saves the cart state in AsyncStorage when items are removed.
Load Cart on Startup: Loads cart data from AsyncStorage when the app starts.

### Screenshots

### Screenshot 1
![Screenshot 1](my-app\Screenshots\ss1.jpg)

### Screenshot 2
![Screenshot 2](my-app\Screenshots\ss2.jpg)

### Screenshot 3
![Screenshot 3](my-app\Screenshots\ss3.jpg)





