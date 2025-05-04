import { MenuItem, MenuSection } from '../types';

// Food menu items
const appetizers: MenuItem[] = [
  {
    id: 'app1',
    name: 'Toast Bread/Grill Bread ',
    description: 'Butter/Jam',
    price: 149,
    image: '../src/images/Food/AllDayBreakfast/grilled bread.jpg',
    category: 'All Day Breakfast',
    section: 'food'
  },
  {
    id: 'app2',
    name: 'Omelets',
    description: 'Plain/Cheese/Spanish',
    price: 169,
    image: '../src/images/Food/AllDayBreakfast/Omelette.jpg',
    category: 'All Day Breakfast',
    section: 'food'
  },
  {
    id: 'app3',
    name: 'Types of Eggs',
    description: 'Sunnyside/Fried/Scrambled',
    price: 169,
    image: '../src/images/Food/AllDayBreakfast/Types of eggs.jpg',
    category: 'All Day Breakfast',
    section: 'food'
  },
  {
    id: 'app4',
    name: 'Jonny English',
    description: 'Grilled Tomato, Chicken Sausage, Potato Wedges, Bread Toast',
    price: 299,
    image: '../src/images/Food/AllDayBreakfast/jhonnyenglish.jpg',
    category: 'All Day Breakfast',
    section: 'food'
  }
];

const meatAndPoultry: MenuItem[] = [
  {
    id: 'meat1',
    name: 'Potato Hash Brown',
    description: 'Crispy golden potato hash browns, Crunchy on the outside, Soft inside',
    price: 289,
    image: '../src/images/Food/QuickBites/potato hash.jpg',
    category: 'Quick Bites',
    section: 'food'
  },
  {
    id: 'meat2',
    name: 'French Fries',
    description: 'Classic Cripy Fries, Lightly salted and served hot',
    price: 199,
    image: '../src/images/Food/QuickBites/frenchfries.jpg',
    category: 'Quick Bites',
    section: 'food'
  },
  {
    id: 'meat3',
    name: 'Potato Wedges',
    description: 'Thick-cut potato wedges with a crispy crust and soft inside',
    price: 199,
    image: '../src/images/Food/QuickBites/potatowedges.jpg',
    category: 'Quick Bites',
    section: 'food'
  },
  {
    id: 'meat3',
    name: 'Veg Nuggets',
    description: 'Crunchy vegetable nuggets with a flavorful filling',
    price: 209,
    image: '../src/images/Food/QuickBites/vegetablenuggets.jpg',
    category: 'Quick Bites',
    section: 'food'
  },
  {
    id: 'meat3',
    name: 'Paneer Cheese Balls',
    description: 'Crispy panner bites with a chessy center',
    price: 199,
    image: '../src/images/Food/QuickBites/paneerchesseballs.jpg' ,
    category: 'Quick Bites',
    section: 'food'
  },
  {
    id: 'meat3',
    name: 'Chicken Nuggets',
    description: 'Juicy chicken nuggets with a crispy golden crust',
    price: 299,
    image: '../src/images/Food/QuickBites/chicken nuggets.jpg',
    category: 'Quick Bites',
    section: 'food'
  },
  {
    id: 'meat3',
    name: 'Chicken Fingers',
    description: 'Tender Chicken Strips Coated in Crispy Breadcrumbs',
    price: 299,
    image: '../src/images/Food/QuickBites/chickenfingers.jpg',
    category: 'Quick Bites',
    section: 'food'
  },
  {
    id: 'meat3',
    name: 'Chicken Cheese Balls',
    description: 'Bite-Sized Chicken Balls Stuffed with gooey Cheese',
    price: 319,
    image:  '../src/images/Food/QuickBites/Chickencheeseballs.jpg' ,
    category: 'Quick Bites',
    section: 'food'
  },
  {
    id: 'meat3',
    name: 'Chicken Lollipop',
    description: 'Spicy, deep-fried chicken drumettes, served with sauce',
    price: 349,
    image: '../src/images/Food/QuickBites/chickenlollipops.jpg',
    category: 'Quick Bites',
    section: 'food'
  },
  {
    id: 'meat3',
    name: 'Chicken Wings',
    description: 'Crispy and juicy chicken wings coated in flavorful sauce',
    price: 349,
    image: '../src/images/Food/QuickBites/chickenwings.jpg',
    category: 'Quick Bites',
    section: 'food'
  },
];

const seafood: MenuItem[] = [
  {
    id: 'sea1',
    name: 'Veg Sandwich',
    description: 'A simple yet flavorful sandwich with fresh veggies and creamy spread',
    price: 219,
    image: '../src/images/Food/Sandwiches/vegsandwich.jpg',
    category: 'Seafood',
    section: 'food'
  },
  {
    id: 'sea2',
    name: 'Veg Cheese Sandwich',
    description: 'A delicious combination of fresh vegetables and melted cheese',
    price: 239,
    image: '../src/images/Food/Sandwiches/vegcheesesand.jpg',
    category: 'Seafood',
    section: 'food'
  },
  {
    id: 'sea1',
    name: 'Veg Club Sandwich',
    description: 'A triple-layered sandwich filled with veggies, cheese, and tangy sauces',
    price: 250,
    image: '../src/images/Food/Sandwiches/vegclubsand.jpg',
    category: 'Seafood',
    section: 'food'
  },
  {
    id: 'sea2',
    name: 'Classic Chicken Sandwich',
    description: 'A delicious combination of fresh vegetables and melted cheese',
    price: 289,
    image: '../src/images/Food/Sandwiches/chickensand.jpg',
    category: 'Seafood',
    section: 'food'
  },
  {
    id: 'sea2',
    name: 'Chicken Club Sandwich',
    description: 'A delicious combination of fresh vegetables and melted cheese',
    price: 299,
    image: '../src/images/Food/Sandwiches/chickclubsand.jpg',
    category: 'Seafood',
    section: 'food'
  }
];

const vegetarian: MenuItem[] = [
  {
    id: 'veg1',
    name: 'Veg Cheese Burger',
    description: 'A crispy veggie patty topped with melted cheese in a soft bun',
    price: 249,
    image: '../src/images/Food/Burgers/vegcheesebur.jpg',
    category: 'Vegetarian/Vegan',
    section: 'food'
  },
  {
    id: 'veg2',
    name: 'Paneer Burger',
    description: 'Spiced panned patty with fresh veggies and creamy dressing',
    price: 299,
    image: '../src/images/Food/Burgers/paneerbur.jpg',
    category: 'Vegetarian/Vegan',
    section: 'food'
  },
  {
    id: 'veg3',
    name: 'Chicken Cheese Burger',
    description: 'A grilled chicken patty with melted cheese and special sauce',
    price: 359,
    image: '../src/images/Food/Burgers/chickencheesebur.jpg',
    category: 'Vegetarian/Vegan',
    section: 'food'
  },
  {
    id: 'veg3',
    name: 'Lamb Burger',
    description: 'Juicy lamb patty infused with spices, served with fresh lettuce and sauce',
    price: 399,
    image: '../src/images/Food/Burgers/lambbur.jpg',
    category: 'Vegetarian/Vegan',
    section: 'food'
  },
  {
    id: 'veg3',
    name: 'Lamb Cheese Burger',
    description: 'Arich and flavorful lamb burger with melted cheese',
    price: 419,
    image: '../src/images/Food/Burgers/lambcheesebur.jpg',
    category: 'Vegetarian/Vegan',
    section: 'food'
  },
  {
    id: 'veg3',
    name: 'Egg Peggy',
    description: 'Seasoned egg with fresh veggies',
    price: 299,
    image: '../src/images/Food/Burgers/eggpeggy.jpg',
    category: 'Vegetarian/Vegan',
    section: 'food'
  },
];

const sides: MenuItem[] = [
  {
    id: 'side1',
    name: 'Veg Hawaiian Pizza',
    description: 'A tropical delight with pineapple, bell peppers, and cheese',
    price: 310,
    image: '../src/images/Food/Pizzas/Vegpinapizza.jpg',
    category: 'Sides',
    section: 'food'
  },
  {
    id: 'side2',
    name: 'Veg Italian Pizza',
    description: 'Authentic Italian-style pizza with fresh basil and mozzarella',
    price: 349,
    image: '../src/images/Food/Pizzas/vegittalianpizza.jpg',
    category: 'Sides',
    section: 'food'
  },
  {
    id: 'side1',
    name: 'Veg Mexican Pizza',
    description: 'A spicy twist with jalapeños, beans, and tangy sauce',
    price: 329,
    image: '../src/images/Food/Pizzas/vegmexicanpizza.jpg',
    category: 'Sides',
    section: 'food'
  },
  {
    id: 'side1',
    name: 'Classic Margherita Pizza',
    description: 'A simple yet delicious pizza with tomato, basil, and cheese',
    price: 299,
    image: '../src/images/Food/Pizzas/pizzamargherita.jpg',
    category: 'Sides',
    section: 'food'
  },
  {
    id: 'side1',
    name: 'Cheese Corn Delight Pizza',
    description: 'A cheesy treat loaded with sweet corn and melted cheese',
    price: 299,
    image: '../src/images/Food/Pizzas/cheesecornpizza.jpg',
    category: 'Sides',
    section: 'food'
  },
  {
    id: 'side1',
    name: 'Paneer Pizza',
    description: 'A rich and flavorful pizza with spiced paneer toppings',
    price: 339,
    image: '../src/images/Food/Pizzas/paneerpizza.jpg',
    category: 'Sides',
    section: 'food'
  },
  {
    id: 'side1',
    name: 'Hawaiian Chicken Pizza',
    description: 'A combination of chicken, pineapple, and tangy sauce',
    price: 369,
    image:  '../src/images/Food/Pizzas/Hawailan chick pizza.jpg',
    category: 'Sides',
    section: 'food'
  },
  {
    id: 'side1',
    name: 'Spicy Chicken Pizza',
    description: 'A fiery pizza with spiced chicken and a hot sauce drizzle.',
    price: 369,
    image: '../src/images/Food/Pizzas/chickspicepizza.jpg',
    category: 'Sides',
    section: 'food'
  },
  {
    id: 'side1',
    name: 'Chicken Overloaded Pizza',
    description: 'Packed with different chicken toppings for meat lovers',
    price: 399,
    image: '../src/images/Food/Pizzas/chickenoverloadpizza.jpg',
    category: 'Sides',
    section: 'food'
  },
];

const pastas: MenuItem[] = [

  {
    id: 'croissant1',
    name: 'Macaroni Cheese Pasta',
    description: 'A fusion of macaroni pasta , loaded with cheesy goodness.',
    price: 289,
    image: '../src/images/Food/Pasta&Mains/macoroni_cheese.jpg',
    category: 'pastas',
    section: 'food'
  },
  {
    id: 'croissant1',
    name: 'Veg Pasta',
    description: 'Creamy,rich pasta loaded with veggies and herbs.',
    price: 349,
    image: '../src/images/Food/Pasta&Mains/vegpasta.jpg',
    category: 'pastas',
    section: 'food'
  },
  {
    id: 'croissant1',
    name: 'Non-Veg Pasta',
    description: 'A flavorful pasta with tender chicken and seafood.',
    price: 399,
    image: '../src/images/Food/Pasta&Mains/non-veg pasta.jpg',
    category: 'pastas',
    section: 'food'
  },
  {
    id: 'croissant1',
    name: 'Peaky Panner',
    description: 'Paneer steak grilled to perfection with mash potato/fries and sauteed vegetables.',
    price: 399,
    image: '../src/images/Food/Pasta&Mains/peaky panner.jpg',
    category: 'pastas',
    section: 'food'
  },
  {
    id: 'croissant1',
    name: 'Garlic Butter Chicken',
    description: 'Tender chicken cooked in rich garlic butter sauce.',
    price: 549,
    image: '../src/images/Food/Pasta&Mains/garlic butter chicken pasta.jpg',
    category: 'pastas',
    section: 'food'
  },
  {
    id: 'croissant1',
    name: 'Grilled Fish with Kippers Sauce',
    description: 'Perfectly grilled fish with a tangy kippers sauce.',
    price: 699,
    image: '../src/images/Food/Pasta&Mains/grill fish Kippers.jpg',
    category: 'pastas',
    section: 'food'
  },
  {
    id: 'croissant1',
    name: 'Chilli Prawns',
    description: 'Spicy stir-fried prawns tossed with flavorful sauces.',
    price: 699,
    image: '../src/images/Food/Pasta&Mains/chilli prawn.jpg',
    category: 'pastas',
    section: 'food'
  },
];

const pastries: MenuItem[] = [
  {
    id: 'dess1',
    name: 'Butter Cinnamon Rolls',
    description: 'Soft, buttery rolls with cinnamon spice',
    price: 99,
    image: '../src/images/Food/Pastries&Quinches/cardamomcinnamon.jpg',
    category: 'Pastries&Quinches',
    section: 'food'
  },
  {
    id: 'dess2',
    name: 'Spinach Corn Quiche',
    description: 'A savoury quiche filled with spinach, corn, and cheese',
    price: 149,
    image: '../src/images/Food/Pastries&Quinches/spinachcornquiche.jpg',
    category: 'Pastries&Quinches',
    section: 'food'
  },
  {
    id: 'dess3',
    name: 'Chicken Quiche',
    description: 'A delicious, flaky pastry filled with creamy chicken',
    price: 199,
    image: '../src/images/Food/Pastries&Quinches/chickenquiche.jpg',
    category: 'Pastries&Quinches',
    section: 'food'
  }
];
const croissants: MenuItem[] = [
  {
    id: 'croissant1',
    name: 'Butter Croissant',
    description: 'A light, buttery and flaky croissant.',
    price: 99,
    image: '../src/images/Food/Croissants/buttercroissant.jpg',
    category: 'Croissants',
    section: 'food'
  },
  {
    id: 'croissant2',
    name: 'Chocolate Croissant',
    description: 'A rich croissant filled with chocolate.',
    price: 109,
    image: '../src/images/Food/Croissants/ChocolateCroissants.jpg',
    category: 'Croissants',
    section: 'food'
  },
  {
    id: 'croissant3',
    name: 'Cheese Croissant',
    description: 'A crispy croissant filled with a cheesy center.',
    price: 119,
    image: '../src/images/Food/Croissants/french cheese croi.jpg',
    category: 'Croissants',
    section: 'food'
  },
  {
    id: 'croissant4',
    name: 'Chicken Croissant',
    description: 'A croissant filled with seasoned chicken.',
    price: 149,
    image: '../src/images/Food/Croissants/Chickencroissant.jpg' ,
    category: 'Croissants',
    section: 'food'
  }
]; // Placeholder for croissants items
const muffins: MenuItem[] = [
  {
    id: 'muffin1',
    name: 'Vanilla Muffin',
    description: 'A soft, fluffy muffin with a classic vanilla falvour.',
    price: 69,
    image: '../src/images/Food/Muffins/vanillamuffins.jpg',
    category: 'Muffins',
    section: 'food'
  },
  {
    id: 'muffin2',
    name: 'Blueberry Muffin',
    description: 'A moist muffin packed with fresh blueberries.',
    price: 89,
    image: '../src/images/Food/Muffins/BlueberryMuffin.jpg',
    category: 'Muffins',
    section: 'food'
  },
  {
    id: 'muffin3',
    name: 'Strawberry Muffin',
    description: 'A sweet and tangy strawberry-flavored muffin.',
    price: 69,
    image: '../src/images/Food/Muffins/strawberrymuffins.jpg',
    category: 'Muffins',
    section: 'food'
  },
  {
    id: 'muffin4',
    name: 'Choco Chunk Muffin',
    description: 'A rich chocolate muffin loaded with chocolate chunks.',
    price: 99,
    image: '../src/images/Food/Muffins/chocolatemuffin.jpg',
    category: 'Muffins',
    section: 'food'
  }
]; // Placeholder for muffins items
const cupcakes: MenuItem[] = [
  {
    id: 'cupcake1',
    name: 'Vanilla Cupcake',
    description: 'A soft and fluffy vanilla-flavored cupcake.',
    price: 69,
    image: '../src/images/Food/Cupcakes&Cakes/Vanilla.jpg',
    category: 'Cupcakes&Cakes',
    section: 'food'
  },
  {
    id: 'cupcake2',
    name: 'Chocolate Cupcake',
    description: 'A rich and moist chocolate cupcake.',
    price: 69,
    image: '../src/images/Food/Cupcakes&Cakes/chocolate.jpg',
    category: 'Cupcakes&Cakes',
    section: 'food'
  },
  {
    id: 'cupcake3',
    name: 'Red Velvet Cupcake',
    description: 'A luxurious, velvety cupcake with cream cheese frosting.',
    price: 69,
    image: '../src/images/Food/Cupcakes&Cakes/red_velvet.jpg',
    category: 'Cupcakes&Cakes',
    section: 'food'
  },
  {
    id: 'cupcake4',
    name: 'Russian Medovik',
    description: 'A traditional Russian honey cake with layered cream.',
    price: 149,
    image: '../src/images/Food/Cupcakes&Cakes/russian.jpg',
    category: 'Cupcakes&Cakes',
    section: 'food'
  },
  {
    id: 'cupcake5',
    name: 'Opera',
    description: 'A sophisticated French cake with coffe and chocolate layers.',
    price: 149,
    image: '../src/images/Food/Cupcakes&Cakes/opera.jpg',
    category: 'Cupcakes&Cakes',
    section: 'food'
  },
  {
    id: 'cupcake6',
    name: 'Chocolate Mousse Jar',
    description: 'A rich, creamy chocolate mousse served in a jar.',
    price: 179,
    image: '../src/images/Food/Cupcakes&Cakes/chocomousse.jpg',
    category: 'Cupcakes&Cakes',
    section: 'food'
  },
  {
    id: 'cupcake7',
    name: 'Passion Fruit Jar',
    description: 'A tangy and refreshing passion fruit dessert.',
    price: 149,
    image: '../src/images/Food/Cupcakes&Cakes/passionjar.jpg',
    category: 'Cupcakes&Cakes',
    section: 'food'
  },
  {
    id: 'cupcake8',
    name: 'Strawberry Jar',
    description: 'A layered strawberry dessert in a jar.',
    price: 179,
    image: '../src/images/Food/Cupcakes&Cakes/strawberryjar.jpg',
    category: 'Cupcakes&Cakes',
    section: 'food'
  },
]; // Placeholder for cupcakes items
const cheesecakes: MenuItem[] = [
  {
    id: 'cheesecake1',
    name: 'Blueberry Cheesecake Slice',
    description: 'A smooth and creamy cheesecake with blueberry topping.',
    price: 219,
    image: '../src/images/Food/Cheesecakes/Blueberry.jpg',
    category: 'Cheesecakes',
    section: 'food'
  },
  {
    id: 'cheesecake2',
    name: 'Raspberry Cheesecake Slice',
    description: 'A classic cheesecake topped with fresh raspberries.',
    price: 219,
    image: '../src/images/Food/Cheesecakes/Raspberry.jpg',
    category: 'Cheesecakes',
    section: 'food'
  },
  {
    id: 'cheesecake3',
    name: 'Salted Caramel Slice',
    description: 'A rich cheesecake with a salted caramel drizzle.',
    price: 699,
    image: '../src/images/Food/Cheesecakes/SaltedCaramel.jpg',
    category: 'Cheesecakes',
    section: 'food'
  },
  {
    id: 'cheesecake1',
    name: 'Blueberry Cheesecake Full',
    description: 'A smooth and creamy cheesecake with blueberry topping.',
    price: 699,
    image: '../src/images/Food/Cheesecakes/Blueberry.jpg',
    category: 'Cheesecakes',
    section: 'food'
  },
  {
    id: 'cheesecake2',
    name: 'Raspberry Cheesecake Full',
    description: 'A classic cheesecake topped with fresh raspberries.',
    price: 699,
    image: '../src/images/Food/Cheesecakes/Raspberry.jpg',
    category: 'Cheesecakes',
    section: 'food'
  },
  {
    id: 'cheesecake3',
    name: 'Salted Caramel Full',
    description: 'A rich cheesecake with a salted caramel drizzle.',
    price: 699,
    image: '../src/images/Food/Cheesecakes/SaltedCaramel.jpg',
    category: 'Cheesecakes',
    section: 'food'
  }
  
]; // Placeholder for cheesecakes items
const wholecakes: MenuItem[] = [
  {
    id: 'wholecake1',
    name: 'Vanilla Cake(500g)',
    description: 'A light and fluffy vanilla-flavored cake.',
    price: 599,
    image: '../src/images/Food/WholeCakes/Vanilla-Cake.jpg',
    category: 'Whole Cakes',
    section: 'food'
  },
  {
    id: 'wholecake2',
    name: 'Vanilla Cake(750g)',
    description: 'A light and fluffy vanilla-flavored cake.',
    price: 999,
    image: '../src/images/Food/WholeCakes/Vanilla-Cake.jpg',
    category: 'Whole Cakes',
    section: 'food'
  },
  {
    id: 'wholecake3',
    name: 'Vanilla Cake(1000g)',
    description: 'A light and fluffy vanilla-flavored cake.',
    price: 1499,
    image: '../src/images/Food/WholeCakes/Vanilla-Cake.jpg',
    category: 'Whole Cakes',
    section: 'food'
  },
  {
    id: 'wholecake4',
    name: 'Chocolate Truffle Cake(500g)',
    description: 'A decadent chocolate cake with a rich truffle layer.',
    price: 799,
    image: '../src/images/Food/WholeCakes/choco truffle coke.jpg',
    category: 'Whole Cakes',
    section: 'food'
  },
  {
    id: 'wholecake5',
    name: 'Chocolate Truffle Cake(750g)',
    description: 'A decadent chocolate cake with a rich truffle layer.',
    price: 1199,
    image: '../src/images/Food/WholeCakes/choco truffle coke.jpg',
    category: 'Whole Cakes',
    section: 'food'
  },
  {
    id: 'wholecake6',
    name: 'Chocolate Truffle Cake(1000g)',
    description: 'A decadent chocolate cake with a rich truffle layer.',
    price: 1899,
    image: '../src/images/Food/WholeCakes/choco truffle coke.jpg',
    category: 'Whole Cakes',
    section: 'food'
  },
  {
    id: 'wholecake7',
    name: 'Coffee Chiffon Cake(500g)',
    description: 'A light and airy coffee-flavored cake.',
    price: 799,
    image: '../src/images/Food/WholeCakes/coffee chiffon cake.jpg',
    category: 'Whole Cakes',
    section: 'food'
  },
  {
    id: 'wholecake8',
    name: 'Coffee Chiffon Cake(750g)',
    description: 'A light and airy coffee-flavored cake.',
    price: 1199,
    image: '../src/images/Food/WholeCakes/coffee chiffon cake.jpg',
    category: 'Whole Cakes',
    section: 'food'
  },
  {
    id: 'wholecake9',
    name: 'Coffee Chiffon Cake(1000g)',
    description: 'A light and airy coffee-flavored cake.',
    price: 1899,
    image: '../src/images/Food/WholeCakes/coffee chiffon cake.jpg',
    category: 'Whole Cakes',
    section: 'food'
  },
  {
    id: 'wholecake10',
    name: 'Valentine Velvet Cake(500g)',
    description: 'A special red velvet cake for celebrations.',
    price: 799,
    image: '../src/images/Food/WholeCakes/redvelvet.jpg',
    category: 'Whole Cakes',
    section: 'food'
  },
  {
    id: 'wholecake11',
    name: 'Valentine Velvet Cake(750g)',
    description: 'A special red velvet cake for celebrations.',
    price: 1199,
    image: '../src/images/Food/WholeCakes/redvelvet.jpg',
    category: 'Whole Cakes',
    section: 'food'
  },
  {
    id: 'wholecake12',
    name: 'Valentine Velvet Cake(1000g)',
    description: 'A special red velvet cake for celebrations.',
    price: 1899,
    image: '../src/images/Food/WholeCakes/redvelvet.jpg',
    category: 'Whole Cakes',
    section: 'food'
  },
  {
    id: 'wholecake13',
    name: 'Tiramisu(500g)',
    description: 'A classic Italian dessert with layers of coffee-soaked sponge and mascarpone.',
    price: 899,
    image: '../src/images/Food/WholeCakes/Tiramisu.jpg',
    category: 'Whole Cakes',
    section: 'food'
  },
  {
    id: 'wholecake14',
    name: 'Tiramisu(750g)',
    description: 'A classic Italian dessert with layers of coffee-soaked sponge and mascarpone.',
    price: 1499,
    image: '../src/images/Food/WholeCakes/Tiramisu.jpg',
    category: 'Whole Cakes',
    section: 'food'
  },
  {
    id: 'wholecake15',
    name: 'Tiramisu(1000g)',
    description: 'A classic Italian dessert with layers of coffee-soaked sponge and mascarpone.',
    price: 2499,
    image: '../src/images/Food/WholeCakes/Tiramisu.jpg',
    category: 'Whole Cakes',
    section: 'food'
  }
]; // Placeholder for wholecakes items

const puffs: MenuItem[] = [
  {
    id: 'puff1',
    name: 'Veg Puff',
    description: 'A crispy, falky puff stuffed with spiced veggies.',
    price: 69,
    image: '../src/images/Food/Puffs/veg_puff.jpg',
    category: 'Puffs',
    section: 'food'
  },
  {
    id: 'puff2',
    name: 'Egg Puff',
    description: 'A golden puff filled with seasoned egg.',
    price: 79,
    image: '../src/images/Food/Puffs/egg-puff.jpg',
    category: 'Puffs',
    section: 'food'
  },
  {
    id: 'puff3',
    name: 'Chicken Puff',
    description: 'A buttery puff pastry filled with flavorful chicken.',
    price: 99,
    image: '../src/images/Food/Puffs/chicken_puff.jpg',
    category: 'Puffs',
    section: 'food'
  }
];

const cookies: MenuItem[] = [
  {
    id: 'cookie1',
    name: 'Cashew Cardamom Cookie',
    description: 'A delightful blend of cashew and aromatic cardamom.',
    price: 79,
    image: '../src/images/Food/Cookies/cashew cardamom cookies.jpg',
    category: 'Cookies',
    section: 'food'
  },
  {
    id: 'cookie2',
    name: 'Choco Chip Cookie',
    description: 'Classic cookies loaded with chocolate chips.',
    price: 79,
    image: '../src/images/Food/Cookies/choco chip cookie.jpg',
    category: 'Cookies',
    section: 'food'
  },
  {
    id: 'cookie3',
    name: 'Butter Cookie',
    description: 'Buttery, melt-in-your-mouth cookies.',
    price: 45,
    image: '../src/images/Food/Cookies/Buttercookies.jpg',
    category: 'Cookies',
    section: 'food'
  }
];

const brownies: MenuItem[] = [
  {
    id: 'brownie1',
    name: 'Choco Chunk Brownie',
    description: 'A rich, fudgy brownie with chunks of chocolate.',
    price: 99,
    image: '../src/images/Food/Brownies/choco chunk brownie.jpg',
    category: 'Brownies',
    section: 'food'
  },
  {
    id: 'brownie2',
    name: 'Salted Caramel Brownie',
    description: 'A perfect mix of chocolate and caramel with a hint of salt.',
    price: 109,
    image: '../src/images/Food/Brownies/Caramel brownie.jpg',
    category: 'Brownies',
    section: 'food'
  },
  {
    id: 'brownie3',
    name: 'Walnut Brownie',
    description: 'A chewy, chocolatey brownie with crunchy walnuts.',
    price: 199,
    image: '../src/images/Food/Brownies/walnutbrownies.jpg',
    category: 'Brownies',
    section: 'food'
  }
];

const breadAndBruschetta: MenuItem[] = [
  {
    id: 'bread1',
    name: 'Garlic Bread with Cheese',
    description: 'Crispy, cheesy, and garlic-infused delight.',
    price: 199,
    image: '../src/images/Food/Bread&Bruschetta/Garlic Bread with Cheese.jpg',
    category: 'Bread&Bruschetta',
    section: 'food'
  },
  {
    id: 'bread2',
    name: 'Bruschetta',
    description: 'Toasted bread with fresh tomato and basil.',
    price: 229,
    image: '../src/images/Food/Bread&Bruschetta/Bruschetta.jpg',
    category: 'Bread&Bruschetta',
    section: 'food'
  },
  {
    id: 'bread3',
    name: 'Chicken Bruschetta',
    description: 'Crispy bread topped with chicken and tomatoes.',
    price: 259,
    image: '../src/images/Food/Bread&Bruschetta/Chicken Bruschetta.jpg',
    category: 'Bread&Bruschetta',
    section: 'food'
  }
];

const berliner: MenuItem[] = [
  {
    id: 'berliner1',
    name: 'Dark Chocolate Truffle Berliner',
    description: 'A chocolate-filled Berliner with a truffle center.',
    price: 89,
    image: '../src/images/Food/Berliner/Dark Chocolate Truffle Berliner.jpg',
    category: 'Berliner',
    section: 'food'
  },
  {
    id: 'berliner2',
    name: 'Boston Cream Berliner',
    description: 'A soft Berliner filled with smooth vanilla cream.',
    price: 99,
    image: '../src/images/Food/Berliner/Boston Cream Berliner.jpg',
    category: 'Berliner',
    section: 'food'
  },
  {
    id: 'berliner3',
    name: 'Blueberry Berliner',
    description: 'A fruit-filed Berliner with blueberry flavors.',
    price: 99,
    image: '../src/images/Food/Berliner/Blueberry Berliner.jpg',
    category: 'Berliner',
    section: 'food'
  }
];

const doughnuts: MenuItem[] = [
  {
    id: 'doughnut1',
    name: 'Sugar-Glazed Doughnut',
    description: 'A soft doughnut coated with a sweet sugar glaze.',
    price: 69,
    image: '../src/images/Food/Doughnuts/Sugar-Glazed Doughnut.jpg',
    category: 'Doughnuts',
    section: 'food'
  },
  {
    id: 'doughnut2',
    name: 'White Chocolate Doughnut',
    description: 'A doughnut topped with creamy white chocolate icing.',
    price: 79,
    image: '../src/images/Food/Doughnuts/White Chocolate Doughnut.jpg',
    category: 'Doughnuts',
    section: 'food'
  },
  {
    id: 'doughnut3',
    name: 'Dark Chocolate Doughnut',
    description: 'A rich, dark chocolate covered doughnut.',
    price: 79,
    image: '../src/images/Food/Doughnuts/Dark Chocolate Doughnut.jpg',
    category: 'Doughnuts',
    section: 'food'
  }
];

// Menu categories
export const foodCategories = [
  {
    id: 'breakfast',
    name: 'All Day Breakfast',
    items: appetizers
  },
  {
    id: 'quickbites',
    name: 'Quick Bites',
    items: meatAndPoultry
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    items: seafood
  },
  {
    id: 'bugers',
    name: 'Burgers',
    items: vegetarian
  },
  {
    id: 'pizzas',
    name: 'Pizzas',
    items: sides
  },
  {
    id: 'pasta',
    name: 'Pasta&Mains',
    items: pastas
  },
  {
    id: 'pastries',
    name: 'Pastries&Quinches',
    items: pastries
  },
  {
    id: 'croissants',
    name: 'Croissants',
    items: croissants
  },
  {
    id: 'Muffins',
    name: 'Muffins',
    items: muffins
  },
  {
    id: 'cupcakes',
    name: 'Cupcakes&Cakes',
    items: cupcakes
  },
  {
    id: 'Cheese Cakes',
    name: 'Cheesecakes',
    items: cheesecakes
  },
  {
    id: 'Whole Cakes',
    name: 'Whole Cakes',
    items: wholecakes
  },
  { id: 'puffs', name: 'Puffs', items: puffs },
  { id: 'cookies', name: 'Cookies', items: cookies },
  { id: 'brownies', name: 'Brownies', items: brownies },
  { id: 'bread-bruschetta', name: 'Bread&Bruschetta', items: breadAndBruschetta },
  { id: 'berliner', name: 'Berliner', items: berliner },
  { id: 'doughnuts', name: 'Doughnuts', items: doughnuts }
];

export const beverageCategories = [
  {
    id: 'hot-coffee',
    name: 'Hot Coffee',
    items: [
      {
        id: 'hotcoffee1',
        name: 'Espresso',
        description: 'Strong, bold coffee shot.',
        price: 169,
        image: '../src/images/Beverages/Hot Coffee/espresso-coffee.jpg',
        category: 'Hot Coffee',
        section: 'beverages'
      },
      {
        id: 'hotcoffee2',
        name: 'Americano',
        description: 'Espresso + hot water.',
        price: 180,
        image: '../src/images/Beverages/Hot Coffee/americano.jpg',
        category: 'Hot Coffee',
        section: 'beverages'
      },
      {
        id: 'hotcoffee3',
        name: 'Long Black',
        description: 'Intense long black coffee.',
        price: 180,
        image: '../src/images/Beverages/Hot Coffee/long black.jpg',
        category: 'Hot Coffee',
        section: 'beverages'
      },
      {
        id: 'hotcoffee4',
        name: 'Macchiato',
        description: 'Espresso + Milk foam.',
        price: 180,
        image: '../src/images/Beverages/Hot Coffee/Macchiato.jpg',
        category: 'Hot Coffee',
        section: 'beverages'
      },
      {
        id: 'hotcoffee5',
        name: 'Falt White',
        description: 'Espresso + milk.',
        price: 210,
        image: '../src/images/Beverages/Hot Coffee/flat-white.jpg',
        category: 'Hot Coffee',
        section: 'beverages'
      },
      {
        id: 'hotcoffee6',
        name: 'Cappuccino',
        description: 'Espresso + steamed milk + thick foam.',
        price: 229,
        image: '../src/images/Beverages/Hot Coffee/cappucino.jpg',
        category: 'Hot Coffee',
        section: 'beverages'
      },
      {
        id: 'hotcoffee7',
        name: 'Latte',
        description: 'Espresso + more milk, light foam.',
        price: 239,
        image: '../src/images/Beverages/Hot Coffee/Cafe Latte.jpg.jpeg',
        category: 'Hot Coffee',
        section: 'beverages'
      },
      {
        id: 'hotcoffee8',
        name: 'Café Mocha',
        description: 'Espresso +  chocolate + milk.',
        price: 239,
        image: '../src/images/Beverages/Hot Coffee/cafe mocha.jpg',
        category: 'Hot Coffee',
        section: 'beverages'
      },
      {
        id: 'hotcoffee9',
        name: 'Irish Coffee',
        description: 'Coffee + Irish flavor + cream.',
        price: 249,
        image: '../src/images/Beverages/Hot Coffee/irish-coffee.jpg',
        category: 'Hot Coffee',
        section: 'beverages'
      }
    ]
  },
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    items: [
      {
        id: 'coldcoffee1',
        name: 'Cold Brew',
        description: 'Smooth, low-acid iced coffee.',
        price: 109,
        image: '../src/images/Beverages/Cold Coffee/Cold-Brew.jpg',
        category: 'Cold Coffee',
        section: 'beverages'
      },
      {
        id: 'coldcoffee2',
        name: 'Autum Brew',
        description: 'Unique cold brew.',
        price: 149,
        image: '../src/images/Beverages/Cold Coffee/autum brew.jpg',
        category: 'Cold Coffee',
        section: 'beverages'
      },
      {
        id: 'coldcoffee3',
        name: 'Cranberry Cold Brew',
        description: 'Cold brew + cranberry + soda.',
        price: 149,
        image: '../src/images/Beverages/Cold Coffee/canberry_cold_brew.jpg',
        category: 'Cold Coffee',
        section: 'beverages'
      },
      {
        id: 'coldcoffee4',
        name: 'Iced Mocha',
        description: 'Espresso + milk + chocolate + ice.',
        price: 235,
        image: '../src/images/Beverages/Cold Coffee/iced_mocha.jpg',
        category: 'Cold Coffee',
        section: 'beverages'
      },
      {
        id: 'coldcoffee5',
        name: 'Iced Latte',
        description: 'Espresso + milk + ice.',
        price: 249,
        image: '../src/images/Beverages/Cold Coffee/Iced-Latte.jpg',
        category: 'Cold Coffee',
        section: 'beverages'
      },
      {
        id: 'coldcoffee6',
        name: 'Affogato',
        description: 'Espresso over ice cream.',
        price: 250,
        image: '../src/images/Beverages/Cold Coffee/affogato.jpg',
        category: 'Cold Coffee',
        section: 'beverages'
      },
      {
        id: 'coldcoffee7',
        name: 'Classic Cold Coffee',
        description: 'Traditional chilled coffee.',
        price: 310,
        image: '../src/images/Beverages/Cold Coffee/classic_cold.jpg',
        category: 'Cold Coffee',
        section: 'beverages'
      },
      {
        id: 'coldcoffee8',
        name: 'Frappuccino',
        description: 'Blended iced coffee + flavors.',
        price: 329,
        image: '../src/images/Beverages/Cold Coffee/FRAPPUCCINO.jpg',
        category: 'Cold Coffee',
        section: 'beverages'
      }
    ]
  },
  {
    id: 'specialities',
    name: 'Specialities',
    items: [
      {
        id: 'special1',
        name: 'Biscoff Cappuccino',
        description: 'Cappuccino + Biscoff.',
        price: 269,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        category: 'Specialities',
        section: 'beverages'
      },
      {
        id: 'special2',
        name: 'Vietnamese Iced Coffee',
        description: 'Coffee + condensed milk, iced.',
        price: 269,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        category: 'Specialities',
        section: 'beverages'
      },
      {
        id: 'special3',
        name: 'Biscoff Latte',
        description: 'Milk + Biscoff + espresso.',
        price: 289,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        category: 'Specialities',
        section: 'beverages'
      },
      {
        id: 'special4',
        name: 'Nutty Cappuccino',
        description: 'Cappuccino + Nutella.',
        price: 289,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        category: 'Specialities',
        section: 'beverages'
      },
      {
        id: 'special5',
        name: 'Nutty Latte',
        description: 'Milk + Nutella + espresso.',
        price: 299,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        category: 'Specialities',
        section: 'beverages'
      },
      {
        id: 'special6',
        name: 'Cold Brew platter(5 Flavours)',
        description: 'Coconut, Cranberry, Autumn brew, Apple Cinnamon, Vanilla.',
        price: 369,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        category: 'Specialities',
        section: 'beverages'
      },
      {
        id: 'special7',
        name: 'Cranberry Espresso',
        description: 'Espresso + cranberry juice.',
        price: 269,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        category: 'Specialities',
        section: 'beverages'
      },
      {
        id: 'special8',
        name: 'Café Bomb',
        description: 'Espresso + condensed milk + milk foam.',
        price: 229,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        category: 'Specialities',
        section: 'beverages'
      },
      {
        id: 'special9',
        name: 'Espresso Tonic',
        description: 'Espresso + Tonic water.',
        price: 269,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        category: 'Specialities',
        section: 'beverages'
      },
      {
        id: 'special10',
        name: 'Coffee Beer',
        description: '',
        price: 289,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        category: 'Specialities',
        section: 'beverages'
      },
      {
        id: 'special11',
        name: 'Hot Chocolate',
        description: 'Cocoa + milk + chocolate.',
        price: 269,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        category: 'Specialities',
        section: 'beverages'
      }
    ]
  },
  {
    id: 'hot-tea',
    name: 'Hot Tea',
    items: [
      {
        id: 'hottea1',
        name: 'Classic Green Tea',
        description: 'Simple, healthy.',
        price: 109,
        image: '../src/images/Beverages/Hot Tea/Classic Green Tea.jpg',
        category: 'Hot Tea',
        section: 'beverages'
      },
      {
        id: 'hottea2',
        name: 'Lemon Honey Green Tea',
        description: 'Citrus + honey.',
        price: 129,
        image: '../src/images/Beverages/Hot Tea/Lemon Honey Green Tea.jpg',
        category: 'Hot Tea',
        section: 'beverages'
      },
      {
        id: 'hottea3',
        name: 'Chamomile Green Tea',
        description: 'Soothing herbal tea.',
        price: 139,
        image: '../src/images/Beverages/Hot Tea/Chamomile Green Tea.jpg',
        category: 'Hot Tea',
        section: 'beverages'
      },
      {
        id: 'hottea4',
        name: 'Lavender Earl Grey Tea',
        description: 'Floral, aromatic tea.',
        price: 139,
        image: '../src/images/Beverages/Hot Tea/Lavender Earl Grey Tea.jpg',
        category: 'Hot Tea',
        section: 'beverages'
      },
      {
        id: 'hottea5',
        name: 'Hibiscus Green Tea',
        description: 'Tangy floral tea.',
        price: 139,
        image: '../src/images/Beverages/Hot Tea/Hibiscus Green Tea.jpg',
        category: 'Hot Tea',
        section: 'beverages'
      },
      {
        id: 'hottea6',
        name: 'Butterfly Pea Tea',
        description: 'Blue herbal tea.',
        price: 139,
        image: '../src/images/Beverages/Hot Tea/Butterfly Pea Tea.jpg',
        category: 'Hot Tea',
        section: 'beverages'
      }
    ]
  },
  {
    id: 'iced-tea',
    name: 'Iced Tea',
    items: [
      {
        id: 'icedtea1',
        name: 'Lemon Iced Tea',
        description: 'Lemon + black tea.',
        price: 229,
        image: '../src/images/Beverages/Iced Tea/Lemon Iced Tea.jpg',
        category: 'Iced Tea',
        section: 'beverages'
      },
      {
        id: 'icedtea2',
        name: 'Apple Iced Tea',
        description: 'Apple-infused iced tea.',
        price: 259,
        image: '../src/images/Beverages/Iced Tea/Apple Iced Tea.jpg',
        category: 'Iced Tea',
        section: 'beverages'
      },
      {
        id: 'icedtea3',
        name: 'Peach Iced Tea',
        description: 'Peachy, refreshing.',
        price: 279,
        image: '../src/images/Beverages/Iced Tea/Peach Iced Tea.jpg',
        category: 'Iced Tea',
        section: 'beverages'
      },
      {
        id: 'icedtea4',
        name: 'Coconut Iced Tea',
        description: 'Coconut twist.',
        price: 279,
        image: '../src/images/Beverages/Iced Tea/Coconut Iced Tea.jpg',
        category: 'Iced Tea',
        section: 'beverages'
      }
    ]
  },
  {
    id: 'mojitos',
    name: 'Mojitos',
    items: [
      {
        id: 'mojito1',
        name: 'Virgin Mojito',
        description: 'Mint, lime, soda and sugar.',
        price: 209,
        image: '../src/images/Beverages/Mojitos/Virgin Mojito.jpg',
        category: 'Mojitos',
        section: 'beverages'
      },
      {
        id: 'mojito2',
        name: 'Blue Lagoon',
        description: 'Blue curacao, mint, lime, soda.',
        price: 229,
        image: '../src/images/Beverages/Mojitos/Blue Lagoon.jpg',
        category: 'Mojitos',
        section: 'beverages'
      },
      {
        id: 'mojito3',
        name: 'Berry basil',
        description: 'Berries, basil, lime, soda.',
        price: 249,
        image: '../src/images/Beverages/Mojitos/Berry basil.jpg',
        category: 'Mojitos',
        section: 'beverages'
      },
      {
        id: 'mojito4',
        name: 'Cranberry',
        description: 'Cranberry juice, mint, lime, soda.',
        price: 259,
        image: '../src/images/Beverages/Mojitos/Cranberry.jpg',
        category: 'Mojitos',
        section: 'beverages'
      },
      {
        id: 'mojito5',
        name: 'Green Apple',
        description: 'Green apple syrup, mint, lime, soda.',
        price: 259,
        image: '../src/images/Beverages/Mojitos/Green Apple.jpg',
        category: 'Mojitos',
        section: 'beverages'
      },
      {
        id: 'mojito3',
        name: 'Watermelon',
        description: 'Watermelon syrup, lime, soda.',
        price: 259,
        image: '../src/images/Beverages/Mojitos/Watermelon.jpg',
        category: 'Mojitos',
        section: 'beverages'
      }
    ]
  },
  {
    id: 'milkshakes',
    name: 'Milkshakes',
    items: [
      {
        id: 'milkshake1',
        name: 'Vanilla Shake',
        description: 'Vanilla flavor + ice cream + milk.',
        price: 249,
        image: '../src/images/Beverages/Milkshakes/Vanilla Shake.jpg',
        category: 'Milkshakes',
        section: 'beverages'
      },
      {
        id: 'milkshake2',
        name: 'Strawberry Milkshake',
        description: 'Strawberry flavor + milk + ice cream.',
        price: 269,
        image: '../src/images/Beverages/Milkshakes/Strawberry Milkshake.jpg',
        category: 'Milkshakes',
        section: 'beverages'
      },
      {
        id: 'milkshake3',
        name: 'Cookie Crumble Milkshake',
        description: 'Oreo cookie + milk + ice cream.',
        price: 329,
        image: '../src/images/Beverages/Milkshakes/Cookie Crumble Milkshake.jpg',
        category: 'Milkshakes',
        section: 'beverages'
      },
      {
        id: 'milkshake4',
        name: 'Nutella Shake',
        description: 'Nutella + ice cream + milk.',
        price: 339,
        image: '../src/images/Beverages/Milkshakes/Nutella Shake.jpg',
        category: 'Milkshakes',
        section: 'beverages'
      },
      {
        id: 'milkshake5',
        name: 'Brownie Shake',
        description: 'Brownie + chocolate + ice cream + milk.',
        price: 349,
        image: '../src/images/Beverages/Milkshakes/Brownie Shake.jpg',
        category: 'Milkshakes',
        section: 'beverages'
      },
      {
        id: 'milkshake6',
        name: 'Biscoff Shake',
        description: 'Biscoff + ice cream + milk.',
        price: 359,
        image: '../src/images/Beverages/Milkshakes/Biscoff Shake.jpg',
        category: 'Milkshakes',
        section: 'beverages'
      },
      {
        id: 'milkshake7',
        name: 'Berry Biscoff Shake',
        description: 'Berries + Biscoff.',
        price: 369,
        image: '../src/images/Beverages/Milkshakes/Berry Biscoff Shake.jpg',
        category: 'Milkshakes',
        section: 'beverages'
      },
      {
        id: 'milkshake8',
        name: 'Pina colada',
        description: 'Pineapple juice + coconut milk + ice cream.',
        price: 369,
        image: '../src/images/Beverages/Milkshakes/Pina colada.jpg',
        category: 'Milkshakes',
        section: 'beverages'
      },
      {
        id: 'milkshake9',
        name: 'Peanut Butter Shake',
        description: 'Peanut butter + milk + ice cream.',
        price: 299,
        image: '../src/images/Beverages/Milkshakes/Peanut Butter Shake.jpg',
        category: 'Milkshakes',
        section: 'beverages'
      }
    ]
  },
  {
    id: 'fresh-juices',
    name: 'Fresh Juices',
    items: [
      {
        id: 'juice1',
        name: 'Cucumber Juice',
        description: 'Cooling, light.',
        price: 189,
        image: '../src/images/Beverages/Fresh Juices/Cucumber Juice.jpg',
        category: 'Fresh Juices',
        section: 'beverages'
      },
      {
        id: 'juice2',
        name: 'Carrot Juice',
        description: 'Vitamin-rich.',
        price: 199,
        image: '../src/images/Beverages/Fresh Juices/Carrot Juice.jpg',
        category: 'Fresh Juices',
        section: 'beverages'
      },
      {
        id: 'juice3',
        name: 'Beetroot Juice',
        description: 'Nutrient-packed.',
        price: 219,
        image: '../src/images/Beverages/Fresh Juices/Beetroot Juice.jpg',
        category: 'Fresh Juices',
        section: 'beverages'
      },
      {
        id: 'juice4',
        name: 'Sweet Lime',
        description: 'Refreshing & Vitamin C-rich.',
        price: 199,
        image: '../src/images/Beverages/Fresh Juices/Sweet Lime.jpg',
        category: 'Fresh Juices',
        section: 'beverages'
      },
      {
        id: 'juice5',
        name: 'Watermelon',
        description: 'Hyderating, sweet.',
        price: 199,
        image: '../src/images/Beverages/Fresh Juices/Watermelon.jpg',
        category: 'Fresh Juices',
        section: 'beverages'
      },
      {
        id: 'juice6',
        name: 'ABC Juice',
        description: 'Apple, Beetroot, Carrot.',
        price: 229,
        image: '../src/images/Beverages/Fresh Juices/ABC Juice.jpg',
        category: 'Fresh Juices',
        section: 'beverages'
      }
    ]
  },
  {
    id: 'up-your-game',
    name: 'UP YOUR GAME',
    items: [
      {
        id: 'upgame1',
        name: 'French Vanilla',
        description: '',
        price: 40,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        category: 'UP YOUR GAME',
        section: 'beverages'
      },
      {
        id: 'upgame2',
        name: 'Roasted Hazelnut',
        description: '',
        price: 40,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        category: 'UP YOUR GAME',
        section: 'beverages'
      },
      {
        id: 'upgame3',
        name: 'Classic Caramel',
        description: '',
        price: 40,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        category: 'UP YOUR GAME',
        section: 'beverages'
      },
      {
        id: 'upgame4',
        name: 'Coffee Mocha',
        description: '',
        price: 40,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        category: 'UP YOUR GAME',
        section: 'beverages'
      },
      {
        id: 'upgame5',
        name: 'Irish Cream',
        description: '',
        price: 40,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        category: 'UP YOUR GAME',
        section: 'beverages'
      }
    ]
  }
];

// Menu sections
export const menuSections: MenuSection[] = [
  {
    id: 'food',
    name: 'Food',
    categories: foodCategories
  },
  {
    id: 'beverages',
    name: 'Beverages',
    categories: beverageCategories
  }
];

// Get all menu items
export const getAllMenuItems = (): MenuItem[] => {
  return menuSections.flatMap(section => 
    section.categories.flatMap(category => category.items)
  );
};
