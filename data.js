
const products = [
  {
    "id": 1,
    "name": "NikeLab",
    "price": 99,
    "rating": 9.9,
    "image" : [
  
      {
        "alt" : "Nike",
        "url": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/060a9c0b-03b1-4dca-9376-6cbf3d84d880/air-force-1-mid-x-off-white%E2%84%A2-mens-shoes.png"
      }
    ],
    "categories": [
      {
        "categoryId": 101,
        "categoryName": "Sport Shoes"
      },
    ],
    "details": {
      "description": "sports model of classic sneakers.",
      "specs": [
        {
          "specName": "Material",
          "specValue": "90% COTTON"
        },
        {
          "specName": "From",
          "specValue": "ITALY"
        }
      ]
    }
  },
  {
    "id": 2,
    "name": "NikeLab",
    "price": 98,
    "rating": 7.9,
    "image" : [
      {
        "alt" : "Nike",
        "url": "https://www.mimanerashop.com/images/1.600x600.5583.webp"
      }
    ],
    "categories": [
      {
        "categoryId": 102,
        "categoryName": "Sport Shoes"
      },
    ],
    "details": {
      "description": "sports model of classic sneakers.",
      "specs": [
        {
          "specName": "Material",
          "specValue": "90% COTTON"
        },
        {
          "specName": "From",
          "specValue": "ITALY"
        }
      ]
    }
  },
  {
    "id": 3,
    "name": "Nike",
    "price": 70,
    "rating": 6.9,
    "image" : [
      {
        "alt" : "Nike Bag",
        "url": "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw27fda2b4/nk/72a/4/9/3/e/8/72a493e8_18b7_405f_9476_ddedb62e26f1.png?sw=540&sh=540&sm=fit&q=80"
      }
    ],
    "categories": [
      {
        "categoryId": 103,
        "categoryName": "Sport Bag"
      },
    ],
    "details": {
      "description": "Compact Sports Bag.",
      "specs": [
        {
          "specName": "Material",
          "specValue": "Oxford",
        },
        {
          "specName": "Size",
          "specValue": "40x28"
        }
      ]
    }
  },
  {
    "id": 4,
    "name": "Nike",
    "price": 80,
    "rating": 2.9,
    "image" : [
      {
        "alt" : "Nike Bag",
        "url": "https://jcpenney.scene7.com/is/image/JCPenney/DP0530202311020361M?resmode=sharp2&op_sharpen=1&wid=350&hei=350"
      }
    ],
    "categories": [
      {
        "categoryId": 104,
        "categoryName": "Sport Bag"
      },
    ],
    "details": {
      "description": "Men's Sports Bag.",
      "specs": [
        {
          "specName": "Material",
          "specValue": "Polyester",
        },
        {
          "specName": "Size",
          "specValue": "22x48",
        }
      ]
    }
  },
  {
    "id": 5,
    "name": "Nike",
    "price": 18,
    "rating": 2.9,
    "image" : [
      {
        "alt" : "Nike Bottle",
        "url": "https://static.golfonline.co.uk/media/img/dc3597_091_ex1.600x600.jpg"
      }
    ],
    "categories": [
      {
        "categoryId": 105,
        "categoryName": "Sport Bottle"
      },
      
    ],
    "details": {
      "description": "Sports tritan bottle",
      "specs": [
        {
          "specName": "Material",
          "specValue": "Tritan"
        },
        {
          "specName": "Volume",
          "specValue": "600ml"
        }
      ]
    }
  }, {
    "id": 6,
    "name": "Ball",
    "price": 32,
    "rating": 4.9,
    "image" : [
      {
        "alt" : "Rugby Ball",
        "url": "https://www.giltedged.co.uk/media/catalog/product/cache/a9cc44ff26b10aa7d77b6e5dad21bc6f/j/b/jbrr02a.jpg"
      }
    ],
    "categories": [
      {
        "categoryId": 106,
        "categoryName": "Rugby Ball"
      },
      
    ],
    "details": {
      "description": "Strong ball for Rugby",
      "specs": [
        {
          "specName": "Weight",
          "specValue": "400g;"
        },
        {
          "specName":"Size",
          "specValue":"15×25cm;"
        }
      ]
    }
  },  {
    "id": 7,
    "name": "Football",
    "price": 25,
    "rating": 5.9,
    "image" : [
  
      {
        "alt" : "FootBall",
        "url": "https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw148037ac/nk/08f/0/0/7/6/c/08f0076c_fea3_4a08_8913_e19b77798305.png?sw=540&sh=540&sm=fit&q=80"
      }
    ],
    "categories": [
      {
        "categoryId": 107,
        "categoryName": "Football Ball"
      },
    ],
    "details": {
      "description": "Strong ball for football",
      "specs": [
        {
          "specName": "Size",
          "specValue": "4"
        },
        {
          "specName": "weight",
          "specValue": "500g"
        }
      ]
    }
  },
  {
    "id": 8,
    "name": "Boxing Gloves",
    "price": 98,
    "rating": 7.3,
    "image" : [
      {
        "alt" : "Gloves",
        "url": "https://media.takealot.com/covers_images/70dee15b046047438632f6f3c970fe53/s-pdpxl.file"
      }
    ],
    "categories": [
      {
        "categoryId": 108,
        "categoryName": "Gloves"
      },
    ],
    "details": {
      "description": "Gloves for professional boxer.",
      "specs": [
        {
          "specName": "Material",
          "specValue": "leather "
        },
        {
          "specName": "weight",
          "specValue": "350g"
        }
      ]
    }
  },
  {
    "id": 9,
    "name": "Bike",
    "price": 76,
    "rating": 5.8,
    "image" : [
      {
        "alt" : "Bike",
        "url": "https://strgimgr.umico.az/sized/840/255795-c55fd2bca3d676a1444718f1c0561013.jpg"
      }
    ],
    "categories": [
      {
        "categoryId": 109,
        "categoryName": "Bike"
      },
    ],
    "details": {
      "description": "Mountain bike with disc brakes.",
      "specs": [
        {
          "specName": "Brand",
          "specValue":"RUSH HOUR"
        },
        {
          "specName": "Weight",
          "specValue": "21kg"
        }
      ]
    }
  },
  {
    "id": 10,
    "name": "Tennis Racket",
    "price": 42,
    "rating": 8.2,
    "image" : [
      {
        "alt" : "Tennis Racket",
        "url": "https://mftennis.com/wp-content/uploads/2021/04/bullit_21-600x600.jpg"
      }
    ],
    "categories": [
      {
        "categoryId": 110,
        "categoryName": "Tennis Racket"
      },
    ],
    "details": {
      "description": "Babolat Evoke Tennis Racket.",
      "specs": [
        {
          "specName": "Material",
          "specValue": "Aluminium"
        },
        {
          "specName": "length",
          "specValue": "57cm",
        }
      ]
    }
  },
  {
    "id": 11,
    "name": "Dumbbell",
    "price": 70,
    "rating": 6.6,
    "image" : [
      {
        "alt" : "Dumbbell",
        "url": "https://way4you.ua/img/product/b4/b424358211422d38f9250708180e3f85/ganteli-dlya-fitnesa-vinilovye-4fizjo-5-kg-zheltye-original-95-1.webp"
      }
    ],
    "categories": [
      {
        "categoryId": 111,
        "categoryName": "Dumbbell"
      },
    ],
    "details": {
      "description": "Dumbbells for fitness training.",
      "specs": [
        {
          "specName": "Weight",
          "specValue": "5kg"
        },
        {
          "specName": "From",
          "specValue": "Turkey",
        }
      ]
    }
  },
  {
    "id": 12,
    "name": "Dumbell",
    "price": 80,
    "rating": 2.2,
    "image" : [
      {
        "alt" : "Dumbell",
        "url": "https://images-na.ssl-images-amazon.com/images/I/71Av61wDddL._SS400_.jpg"
      }
    ],
    "categories": [
      {
        "categoryId": 112,
        "categoryName": "Dumbell"
      },
    ],
    "details": {
      "description": "Weightlifting kettlebell.",
      "specs": [
        {
          "specName": "Weight",
          "specValue": "32kg"
        },
        {
          "specName": "From",
          "specValue": "Amerika",
        }
      ]
    }
  },
  {
    "id": 13,
    "name": "PROTEIN",
    "price": 65,
    "rating": 9.9,
    "image" : [
      {
        "alt" : "Blade Protein",
        "url": "https://efxsports.com/wp-content/uploads/2023/08/EFXSports221124_Website_Amazon_Protein6-Vanilla.jpg"
      }
    ],
    "categories": [
      {
        "categoryId": 112,
        "categoryName": "Spork Drink"
      },
    ],
    "details": {
      "description": "Drink to add muscle mass.",
      "specs": [
        {
          "specName": "Weight",
          "specValue": "2.27kg"
        },
        {
          "specName": "From",
          "specValue": "Amerika",
        }
      ]
    }
  },
  {
    "id": 14,
    "name": "Pro Geiner",
    "price": 90,
    "rating": 3.49,
    "image" : [
      {
        "alt" : "Sport drink ",
        "url": "https://135048838.cdn6.editmysite.com/uploads/1/3/5/0/135048838/s503543949635751364_p31_i5_w600.png?width=2400&optimize=medium"
      }
    ],
    "categories": [
      {
        "categoryId": 112,
        "categoryName": "Sport Drink"
      },
    ],
    "details": {
      "description": "Drink Geiner to add mass.",
      "specs": [
        {
          "specName": "Weight",
          "specValue": "2.55kg"
        },
        {
          "specName": "From",
          "specValue": "Amerika",
        }
      ]
    }
  },
  {
    "id": 15,
    "name": "L-Carnine",
    "price": 29,
    "rating": 9.9,
    "image" : [
      {
        "alt" : "Sport Drink",
        "url": "https://sport-max.eu/data/gfx/pictures/medium/9/6/6569_4.jpg"
      }
    ],
    "categories": [
      {
        "categoryId": 112,
        "categoryName": "Sport drink"
      },
    ],
    "details": {
      "description": "Drink for burning fat.",
      "specs": [
        {
          "specName": "Weight",
          "specValue": "1L"
        },
        {
          "specName": "From",
          "specValue": "Amerika",
        }
      ]
    }
  },
  {
    "id": 16,
    "name": "Motorcycle Helmet",
    "price": 39,
    "rating": 9.2,
    "image" : [
      {
        "alt" : "Motorcycle Helmet",
        "url": "https://images-na.ssl-images-amazon.com/images/I/61AdXzcLFML._AC_UL600_SR600,600_.jpg"
      }
    ],
    "categories": [
      {
        "categoryId": 112,
        "categoryName": "HemletS"
      },
    ],
    "details": {
      "description": " Full-Face Motorcycle Helmet",
      "specs": [
        {
          "specName": "Weight",
          "specValue": "4.389kg"
        },
        {
          "specName": "From",
          "specValue": "Germany",
        }
      ]
    }
  },
  {
    "id": 17,
    "name": "Sport Belt",
    "price": 41,
    "rating": 3.2,
    "image" : [
      {
        "alt" : "Sport belt",
        "url": "https://jexasports.com/wp-content/uploads/2021/05/lether-belt-1-600x600.jpeg"
      }
    ],
    "categories": [
      {
        "categoryId": 112,
        "categoryName": "Sport belt"
      },
    ],
    "details": {
      "description": "Sport leather belt.",
      "specs": [
        {
          "specName": "Material",
          "specValue": "leather"
        },
        {
          "specName": "From",
          "specValue": "China",
        }
      ]
    }
  },
  {
    "id": 18,
    "name": "Boxing Bag",
    "price": 20,
    "rating": 7.2,
    "image" : [
      {
        "alt" : "Boxing Bag",
        "url": "https://images-na.ssl-images-amazon.com/images/I/51KpM4IgyUL._AC_UL600_SR600,600_.jpg"
      }
    ],
    "categories": [
      {
        "categoryId": 112,
        "categoryName": "Boxing Bag"
      },
    ],
    "details": {
      "description": " Boxing  Heavy Bag",
      "specs": [
        {
          "specName": "Weight",
          "specValue": "100kg"
        },
        {
          "specName": "From",
          "specValue": "Amerika",
        }
      ]
    }
  },
]



export default products;
