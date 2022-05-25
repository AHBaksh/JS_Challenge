let recipe =[
    {
        recipeTitle:'Sesame ramen',
        servings: 1,
        ingredients: [
        "80g pack instant noodles (look for an Asian brand with a flavour like sesame)",
        "2 spring onions , finely chopped",
        "½ head pak choi",
        "1 egg",
        "1 tsp sesame seeds",
        "chilli sauce , to serve"
        ],
        description: "Rustle up this warming veggie ramen in just 15 minutes. Think of it as healthy fast food – it's low-fat, low-calorie and low-cost as well",
        directions:['Cook the noodles with the sachet of flavouring provided (or use stock instead of the sachet, if you have it). Add the spring onions and pak choi for the final min.',
                    'Meanwhile, simmer the egg for 6 mins from boiling, run it under cold water to stop it cooking, then peel it. Toast the sesame seeds in a frying pan.',
                    'Tip the noodles and greens into a deep bowl, halve the boiled egg and place on top. Sprinkle with sesame seeds, then drizzle with the sauce or sesame oil provided with the noodles, and chilli sauce, if using.'],
        imgUrl:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/quick-chicken-and-hummus-bowl-3863168.jpg'
    },
    {
        recipeTitle:'Chicken hummus bowl',
        servings: 2,
        ingredients: [
            "200g hummus",
            "1 small lemon , zested and juiced",
            "200g pouch cooked mixed grains",
            "150g baby spinach , roughly chopped",
            "1 small avocado , halved and sliced",
            "1cooked chicken breast , sliced at an angle",
            "100g pomegranate seeds",
            "½ red onion , finely sliced",
            "2 tbsp toasted almonds"
        ],
        description:'Make our healthy chicken and hummus salad bowl for a delicious budget lunch option. It can be thrown together in just 10 minutes and delivers three of your 5-a-day',
        directions:['Mix 2 tbsp of the hummus with half the lemon juice, the lemon zest and enough water to make a drizzly dressing. Squeeze the grain pouch to separate the grains, then divide between two shallow bowls and toss through the dressing. Top each bowl with a handful of the spinach.',
                    'Squeeze the remaining lemon juice over the avocado halves, then add one half to each bowl. Divide the chicken, pomegranate seeds, onion, almonds and remaining hummus between the two bowls and gently mix everything together just before eating.',
                    ],
        imgUrl:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/quick-chicken-and-hummus-bowl-3863168.jpg'
    },
    {
        recipeTitle:'Banana ice cream sandwiches',
        servings: 4,
        ingredients: [
            "200g peanut butter (crunchy or smooth is fine)",
            "175g golden caster sugar",
            "75g dark chocolate , chopped into chunks",
            "1 large egg",
            "For the ice cream:",
            "3 bananas , peeled, chopped and frozen in advance",
            "2 tbsp double cream",
            "1 tsp vanilla essence"
        ],
        description:"Bake peanut butter cookies and blitz frozen bananas with cream and vanilla to make this impressive speedy dessert. Kids will think they've hit the jackpot",
        directions:['Heat oven to 180C/fan 160C/gas 4 and line two large baking sheets with baking parchment. Put the peanut butter, sugar, ¼ tsp fine table salt and chocolate chunks in a bowl and mix well with a wooden spoon. Crack in the egg and mix again until the mixture clumps together and forms a dough.',
                    'Break off chunks of dough (about the size of a cherry tomato) and arrange them, spaced apart, on the sheets. Press the cookies down with the back of a fork to squash them a little. (The cookies can be frozen for up to two months – to cook from frozen, add an extra 1-2 mins to the cooking time.) Bake for about 12 mins until golden around the edges and paler in the centre. Leave to cool on the trays for 5 mins.',
                    'Meanwhile, put the bananas, cream and vanilla in a food processor and blend until they make a thick ice cream. Scoop into balls with an ice cream scoop, and sandwich between the cookies. Serve immediately.'
                ],
        imgUrl:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/quick-banana-ice-cream-sandwiches-c605d27.jpg'
    },
    {
        recipeTitle:'Fried rice',
        servings: 2,
        ingredients: [
            "2 tsp oil",
            "1 egg , beaten",
            "2 rashers bacon , chopped",
            "175g mushrooms , sliced",
            "200g frozen peas",
            "1 garlic clove , crushed",
            "small knob of ginger , grated",
            "2 tsp dark soy sauce , plus extra to serve",
            "1 tsp sugar",
            "250g cooked basmati rice"
        ],
        description:"Egg-fried rice recipe with peas, bacon and mushrooms is a great way to use leftovers. Ready in under 15 minutes, it makes a super-speedy one-pan supper",
        directions:['Heat the oil in a frying pan, then tip in the egg. Leave to set for 30 secs-1 min, swirling every now and again, then tip it out and finely slice. Add the bacon and mushrooms to pan, then fry until golden, about 3 mins. Add the peas, garlic and ginger, then cook for 1 min.',
                    'Mix the soy sauce and sugar together. Turn up the heat, add the cooked rice to the pan, heat through, then splash in the sweet soy sauce. Stir through the egg and serve straight away, with more soy sauce if you like.'
                ],
        imgUrl:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-163516_12-c3ee307.jpg'
    }
]
let modalToggle = document.getElementById('modal')
let img = document.getElementById('img')
let title = document.getElementById('title')
let description = document.getElementById('description')
let ingredients = document.getElementById('ingredients')
let serving = document.getElementById('serving')
let directions= document.getElementById('directions')
let ranNum =0
function randomise(){
    ranNum = Math.floor(Math.random()* recipe.length)
    console.log(ranNum)
}


function letsCook(){
    randomise()
    
    modalToggle.style.display = 'block'
    img.src= recipe[ranNum].imgUrl
    title.innerHTML = 'I’m hungry! Let’s cook... '+ recipe[ranNum].recipeTitle
    description.innerHTML =recipe[ranNum].description
    serving.innerHTML= `Servings: ${recipe[ranNum].servings}`

    recipe[ranNum].ingredients.forEach( data =>{
        let content = document.createElement('h5')
        content.innerHTML=data;
        ingredients.appendChild(content)
    })

    recipe[ranNum].directions.forEach(data =>{
     
        let content = document.createElement('li');
        content.innerHTML =  data;
        directions.appendChild(content)
    })
}

function closeButton(){
    modalToggle.style.display ='none'
    ingredients.innerHTML=""
    directions.innerHTML=""
}


document.getElementById('cook').addEventListener('click', letsCook)
document.getElementById('close').addEventListener('click', closeButton)