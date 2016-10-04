
/*gender:["n",&| "m", 
    || "w"],
    material:[Metal Plastic Wood tortist colorfull],
    */
Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

var products = [
    {
        gender: ["n"],
        material: ["Metal"],
        productName: "Premium Square Sunglasses",
        price: 35.95,
        color: ["Brown", "Black"],
        description: "These handsome square sunglasses provide excellent coverage. The large metal frame comes in two colors: glossy black (shown with 80% gray tint and silver mirror finish) and matte brown (shown with 80% amber tint). Spring hinges, glossy black acetate temple tips, and adjustable nose pads provide a comfortable wear.",
        imgSrc: ["http://static.zennioptical.com/images/product/11/20/1120215_lg.jpg",
            "http://static.zennioptical.com/images/product/11/20/1120221_lg.jpg"
        ],
        popularity: 0
    },
    {
        gender: ["n"],
        material: ["Metal"],
        productName: "Premium Round Sunglasses",
        price: 35.95,
        color: ["Gold"],
        description: "We love these fashionable round glasses with rose gold mirror tint but they pretty much look great with any tint. The medium-wide frame has patterned rims and temple arms in a shiny gold metal finish. Sunglasses are pictured with 80% gray tint with rose gold mirror finish.",
        imgSrc: ["http://static.zennioptical.com/images/product/15/73/157314_lg.jpg"],
        popularity: 0
    },
    {
        gender: ["n"],
        material: ["Metal"],
        productName: "Premium Round Sunglasses",
        price: 35.95,
        color: ["Brown", "Black"],
        description: "These handsome square sunglasses provide excellent coverage. The large metal frame comes in two colors: glossy black (shown with 80% gray tint and silver mirror finish) and matte brown (shown with 80% amber tint). Spring hinges, glossy black acetate temple tips, and adjustable nose pads provide a comfortable wear.",
        imgSrc: ["http://static.zennioptical.com/images/product/11/20/1120215_lg.jpg","http://static.zennioptical.com/images/product/11/20/1120221_lg.jpg"],
        popularity: 0
    },
    {
        gender: ["n"],
        material: ["Metal"],
        productName: "Premium Aviator Sunglasses",
        price: 39.95,
        color: ["Gray", "Gold"],
        description: "Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. The everlastingly cool style of these wide-frame aviator sunglasses is enhanced by a slim metal silhouette and stainless steel temple arms. These frames are available in brushed gunmetal gray (shown with polarized brown tint) or brushed gold (shown with gradient green tint).",
        imgSrc: ["http://static.zennioptical.com/images/product/11/20/1120112_lg.jpg", "http://static.zennioptical.com/images/product/11/20/1120114_lg.jpg"],
        popularity: 0
    },
    {
        gender: ["n"],
        material: ["Plastic"],
        productName: "Mulholland Sunglasses",
        price: 32.95,
        color: ["Blue", "Black", "Tortoiseshell"],
        description: "Mulholland is an oversized geometric frame that radiates glamour. The acetate frame features spring hinges for a comfortable fit and comes in three glossy colors: dark tortoiseshell (shown with gradient green tint), black (shown with gradient gray tint), and aqua blue (shown with gradient gray tint).",
        imgSrc: ["http://static.zennioptical.com/images/product/11/26/112624_lg.jpg", "http://static.zennioptical.com/images/product/11/26/112621_lg.jpg" , "http://static.zennioptical.com/images/product/11/26/112625_lg.jpg"],
        popularity: 0
    },
    {
        gender: ["n"],
        material: ["Plastic"],
        productName: "Premium Square Sunglasses",
        price: 39.95,
        color: ["Black", "Cream"],
        description: "Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. Chic and bold, with touches of classic Hollywood glamour: these sunglasses have no trouble standing out from the crowd. This wide frame comes in two glossy acetate colors: black (shown with gradient gray tint) with shiny gold metal hinge accents, or peaches & cream (shown with gradient amber tint) with shiny pewter metal hinge accents.",
        imgSrc: ["http://static.zennioptical.com/images/product/11/25/112521_lg.jpg","http://static.zennioptical.com/images/product/11/25/112533_lg.jpg"],
        popularity: 0
    },
    {
        gender: ["n"],
        material: ["Plastic"],
        productName: "Sporty Rectangle Eyeglasses",
        price: 27.95,
        color: ["Black", "Blue"],
        description: "With a sporty design and lightweight comfort, these versatile eyeglasses look and feel just as good in the office, on the town, or in the gym. Made with acetate, the medium-wide rectangle frame features spring hinges for a great fit. It comes in two color options: glossy black with black/gray/blue temple arms, and glossy black with black/gray/orange temple arms.",
        imgSrc: ["http://static.zennioptical.com/images/product/44/21/4421421_lg.jpg","http://static.zennioptical.com/images/product/44/21/4421416_lg.jpg"],
        popularity: 0
    },
    {
        gender: ["n"],
        material: ["Plastic"],
        productName: "Rectangle Eyeglasses",
        price: 23.95,
        color: ["Purple","Red","Green"],
        description: "With gorgeous gemstone colors, these rectangle eyeglasses are a fun addition to any outfit. Made with extremely lightweight and flexible TR90 plastic, this medium-wide frame is a great choice for everyday wear. It is available in three glossy colors: amethyst purple, ruby red, and emerald green. . For the same style with a matte finish, see #2015017.",
        imgSrc: ["http://static.zennioptical.com/images/product/20/14/2014917_lg.jpg", "http://static.zennioptical.com/images/product/20/14/2014918_lg.jpg", "http://static.zennioptical.com/images/product/20/14/2014924_lg.jpg"],
        popularity: 0
    },
    {
        gender: ["n"],
        material: ["Wood"],
        productName: "Stainless Steel Half-Rim Frame with Acetate Temples and Spring Hinges",
        price: 25.95,
        color: ["Brown", "Gray"],
        description: "Beautiful tortoiseshell streaks on the spring-hinged temple arms distinguish this half-rim, wide-width, rectangular, mixed-material Men's eyeglasses frame. Silicone nose pads are included for a comfortable fit. A stainless steel rod is embedded in the temple arms to make them easy to adjust. With a slight, racy angle on the bridge, these are the perfect glasses for staying in or going out. To us, the latter is preferable. Since these eyeglasses look so great, wouldn't you want to show them off?",
        imgSrc: ["http://static.zennioptical.com/images/product/14/79/147915_lg.jpg" ,"http://static.zennioptical.com/images/product/14/79/147912_lg.jpg"],
        popularity: 0
    },
    {
        gender: ["n"],
        material: ["Wood"],
        productName: "Acetate Full-Rim Frame",
        price: 27.95,
        color: ["Wood Texture", "Black"],
        description: "Pompadour hair has made a vicious comeback. Accompanied by skinny crop jeans, and oversized tee-shirts, this vintage look is far from aged. The classic Square design has delivered a cool and trendy style for over fifty years. Now, take advantage of these full-rim, unisex glasses, and add a touch of nostalgia to your own style. Each pair features a robust full-rim design that will hold up to years of hairspray and your timeless style. And, they’re constructed of an acetate and plastic blend that is amazingly strong and also lightweight. Each set of eyeglasses comes in your choice of brown, black, and purple – with your choice of black front or wood grain textured rim.",
        imgSrc: ["http://static.zennioptical.com/images/product/10/51/105115_lg.jpg", "http://static.zennioptical.com/images/product/10/51/105121_lg.jpg"],
        popularity: 0
    },
    {
        gender: ["n"],
        material: ["Wood"],
        productName: "Acetate Full-Rim Frame",
        price: 23.95,
        color: ["Brown", "Cream"],
        description: "These full rimmed acetate unisex frames come in an imitation wood grain style, but don't worry! No tree was harmed in the production of these frames. Please note: The patterns on these frames are randomly selected.",
        imgSrc: ["http://static.zennioptical.com/images/product/18/08/180815_lg.jpg", "http://static.zennioptical.com/images/product/18/08/180833_lg.jpg"],
        popularity: 0
    },
    {
        gender: ["n"],
        material: ["Wood"],
        productName: "Acetate Full-Rim Frame",
        price: 29.95,
        color: ["Black", "Wood Textured"],
        description: "If you can't live in a treehouse, you can turn your eyeglasses into your own personal simulated arboretum by getting a faux wood frame. This wide, full-rim, square-style, hypoallergenic acetate Unisex eyeglasses frame will let you practically feel the wind in your hair, with leaves rustling and branches swaying. Whether you get the brown model with simulated wood grain throughout, or the model that's black on the front and faux wood on the temple arms, these glasses will spruce up your look.",
        imgSrc: ["http://static.zennioptical.com/images/product/18/53/185321_lg.jpg","http://static.zennioptical.com/images/product/18/53/185332_lg.jpg"],
        popularity: 0
    },
    {
        gender: ["n"],
        material: ["Tortoise"],
        productName: "Premium Round Sunglasses",
        price: 39.95,
        color: ["Tortoiseshell"],
        description: "Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. These sunglasses offer a refined retro vibe, giving your look an instant update in the process. This boldly designed wide frame features glossy acetate with a shiny gold metal bridge and hinge accents. Opt for classic black (shown with 80% gray tint and gold mirror finish) or tortoiseshell with matching temple arms (shown with 80% gray tint).",
        imgSrc: ["http://static.zennioptical.com/images/product/11/32/1132625_lg.jpg"],
        popularity: 0
    },
    {
        gender: ["n"],
        material: ["Tortoise"],
        productName: "Premium Cat-Eye Sunglasses",
        price: 39.95,
        color: ["Tortoiseshell"],
        description: "Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. Effortlessly elegant, these lightweight, cat-eye style sunglasses add a subtle spot of texture and color to your look. This medium-wide, acetate frame is available in two glossy colors: semi-transparent pearly pink (shown with 80% gray tint and silver mirror finish) or classic tortoiseshell (shown with gradient amber tint). Temple arms are adorned with twisted rose gold metal and pink or tortoise acetate tips.",
        imgSrc: ["http://static.zennioptical.com/images/product/11/32/1132425_lg.jpg"],
        popularity: 0
    },
    {
        gender: ["n"],
        material: ["Tortoise"],
        productName: "Square Eyeglasses",
        price: 29.95,
        color: ["Gold"],
        description: "An angular bridge gives these vintage-inspired square eyeglasses a contemporary edge. The medium-wide metal frame has an antique finish and is available in two colors: gold with tortoiseshell acetate temple arms and silver with black acetate temple arms.",
        imgSrc: ["http://static.zennioptical.com/images/product/16/88/168814_lg.jpg"],
        popularity: 0
    },
    {
        gender: ["n"],
        material: ["Tortoise"],
        productName: "Browline Eyeglasses",
        price: 25.95,
        color: ["Brown"],
        description: "This line of vintage-inspired eyewear merges contemporary colors and details with distressed finishes. This medium-sized browline frame has a stainless steel brow with flexible TR90 temple arms and spring hinges for a comfortable fit. It is available in metallic brown with matte tortoiseshell temple arms.",
        imgSrc: ["http://static.zennioptical.com/images/product/19/89/198915_lg.jpg"],
        popularity: 0
    }
]

export default products;

// {
//     gender: ["n"],
//     material: [],
//     productName: "",
//     price: ,
//     color: ["", ""],
//     description: "",
//     imgSrc: [""],
//     popularity: 0
// },
