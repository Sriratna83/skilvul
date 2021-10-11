function getObjectValue(obj, path ) { 

    let PathSplit = path.split('.')
    let pathSpredd = [].concat(...PathSplit)
    let result = obj[pathSpredd[0]][pathSpredd[1]][pathSpredd[2]];
    if (result === undefined) {
      return null
      
    }
    return result
        
    }
    
    const milkBasedCoffee = {
      name: "latte",
      ingredients: {
        espresso: {
          origin: "lampung",
          roastProfile: "medium to dark",
          ratio: 1
        },
        milk: {
          brand: "susu murni",
          isVegan: false,
          ratio: 5
        }
      },
    }
    
    const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
    const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
    const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");
    
    console.log(espresso);
    console.log(coffeeBrand);
    console.log(isMilkVegan)