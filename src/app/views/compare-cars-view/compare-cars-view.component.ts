import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car';

@Component({
  selector: 'app-compare-cars-view',
  templateUrl: './compare-cars-view.component.html',
  styleUrls: ['./compare-cars-view.component.scss']
})
export class CompareCarsViewComponent implements OnInit {

  public carsToCompare : Array<Car> = [
    {
      "id": 1001,
      "price": 28653,
      "kilometers": 117991,
      "year": 2013,
      "fuel": {
          "name": "hybride (essence)"
      },
      "model": {
          "id": 354,
          "name": "G Cabrio",
          "brand": {
              "id": 129,
              "brand": "mercedes-benz"
          }
      },
      "gear": {
          "numberGear": 4,
          "description": "boite auto 4 vitesses"
      },
      "pictures": [
          {
              "id": 2078,
              "altDescription": "Consequuntur enim est occaecati.",
              "pathPicture": "https://via.placeholder.com/360x360.png/00ccbb?text=cars1001+a"
          },
          {
              "id": 2079,
              "altDescription": "Sint impedit doloribus ut excepturi placeat.",
              "pathPicture": "https://via.placeholder.com/360x360.png/003333?text=cars1001+aperiam"
          },
          {
              "id": 2080,
              "altDescription": "Quo voluptatibus quam blanditiis unde odit dolor reprehenderit a.",
              "pathPicture": "https://via.placeholder.com/360x360.png/003388?text=cars1001+ut"
          },
          {
              "id": 2081,
              "altDescription": "Alias autem voluptatibus suscipit quae quae pariatur consequatur.",
              "pathPicture": "https://via.placeholder.com/360x360.png/00dd77?text=cars1001+molestiae"
          },
          {
              "id": 2082,
              "altDescription": "Voluptatem et quo quae amet dolorum unde molestias natus.",
              "pathPicture": "https://via.placeholder.com/360x360.png/008822?text=cars1001+odio"
          }
      ],
      "carType": {
          "carType": "monospace"
      },
      "title": "titre 1001",
      "description": "courte descriptioncourte descriptioncourte description       courte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte description",
      "creationDate": new Date("2021-05-03T00:00:00+02:00"),
      "sellDate": null,
      "color": "blei",
      "finish": "à la main",
      "garage": {
          "name": "Pelletier Legendre et Fils",
          "phone": "+33 1 32 93 82 ",
          "streetNumber": "96",
          "street": "boulevard Denis Faure",
          "city": "Lebreton-la-Forêt",
          "numDept": "46"
      },
      "motor": "accusamus reprehenderit sit"
    },
    {
        "id": 1002,
        "price": 52456,
        "kilometers": 370230,
        "year": 2019,
        "fuel": {
            "name": "gpl"
        },
        "model": {
            "id": 273,
            "name": "Caravelle",
            "brand": {
                "id": 143,
                "brand": "volkswagen"
            }
        },
        "gear": {
            "numberGear": 6,
            "description": "boite manuelle 6 vitesses"
        },
        "pictures": [
            {
                "id": 2083,
                "altDescription": "Ut eaque totam quos eligendi sit.",
                "pathPicture": "https://via.placeholder.com/360x360.png/007744?text=cars1002+aliquam"
            },
            {
                "id": 2084,              
                "altDescription": "Eveniet facilis adipisci unde ea praesentium soluta sint occaecati.",
                "pathPicture": "https://via.placeholder.com/360x360.png/00ee44?text=cars1002+cum"
            },
            {
                "id": 2085,
                "altDescription": "Facilis blanditiis aperiam nobis.",
                "pathPicture": "https://via.placeholder.com/360x360.png/0011dd?text=cars1002+molestias"
            },
            {
                "id": 2086,
                "altDescription": "Amet qui aut quod eaque voluptas fugit voluptas.",
                "pathPicture": "https://via.placeholder.com/360x360.png/009900?text=cars1002+quas"
            },
            {
                "id": 2087,
                "altDescription": "Porro aut minus eius eius eum asperiores dolores nulla.",
                "pathPicture": "https://via.placeholder.com/360x360.png/00bb33?text=cars1002+quia"
            }
        ],
        "carType": {
            "carType": "monospace"
        },
        "title": "titre 1002",
        "description": "courte descriptioncourte descriptioncourte description       courte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte description",
        "creationDate": new Date("2021-04-20T00:00:00+02:00"),
        "sellDate": null,
        "color": "rouge",
        "finish": "maison",
        "garage": {
            "name": "Texier",
            "phone": "+33 7 53 29 49 ",
            "streetNumber": "367",
            "street": "boulevard de Brunel",
            "city": "Robinnec",
            "numDept": "64"
        },
        "motor": "doloremque harum mollitia"
    },
    {
        "id": 266,
        "price": 22637,
        "kilometers": 184028,
        "year": 2007,
        "fuel": {
            "name": "hybride rechargeable (gazole)"
        },
        "model": {
            "id": 567,
            "name": "Doblo",
            "brand": {
                "id": 117,
                "brand": "fiat"
            }
        },
        "gear": {
            "numberGear": 4,
            "description": "boite auto 4 vitesses"
        },
        "pictures": [
            {
                "id": 286,
                "altDescription": "Nam est ut ipsum.",
                "pathPicture": "https://via.placeholder.com/360x360.png/0066ee?text=cars266+earum"
            },
            {
                "id": 1285,
                "altDescription": "Explicabo consequatur veniam dolore quod.",
                "pathPicture": "https://via.placeholder.com/360x360.png/003333?text=cars266+quis"
            }
        ],
        "carType": {
            "carType": "berline compactes"
        },
        "title": "Maxime ad aut eum.",
        "description": "Non officia occaecati ad cupiditate occaecati est ipsa. Ut culpa qui nam natus ad voluptatem blanditiis doloremque. Ut est vero porro magnam vero et. Veniam sit dolore occaecati itaque error.",
        "creationDate": new Date("2021-04-09T15:36:15+02:00"),
        "sellDate": null,
        "color": "white",
        "finish": "Premium",
        "garage": {
            "name": "Voisin SARL",
            "phone": "0960767231",
            "streetNumber": "60",
            "street": "avenue Édith Muller",
            "city": "Gonzalez",
            "numDept": "20"
        },
        "motor": "ratione earum et"
    },
    {
        "id": 993,
        "price": 11062,
        "kilometers": 227802,
        "year": 2020,
        "fuel": {
            "name": "hybride rechargeable (gazole)"
        },
        "model": {
            "id": 46,
            "name": "1007",
            "brand": {
                "id": 133,
                "brand": "peugeot"
            }
        },
        "gear": {
            "numberGear": 7,
            "description": "boite manuelle 7 vitesses"
        },
        "pictures": [
            {
                "id": 1013,
                "altDescription": "Inventore eligendi at ipsa dignissimos et.",
                "pathPicture": "https://via.placeholder.com/360x360.png/00ffdd?text=cars993+ut"
            },
            {
                "id": 2012,
                "altDescription": "Rerum voluptas laboriosam a architecto fugiat delectus delectus atque.",
                "pathPicture": "https://via.placeholder.com/360x360.png/002233?text=cars993+numquam"
            }
        ],
        "carType": {
            "carType": "berline compactes"
        },
        "title": "Consectetur quisquam sit iusto sit veritatis perferendis.",
        "description": "Libero distinctio inventore ex esse. Recusandae eaque laudantium beatae unde. Saepe est consequatur porro officiis voluptatum quis quis repellat. Beatae velit nihil commodi unde. Et libero sit occaecati qui blanditiis omnis. Assumenda velit labore tenetur",
        "creationDate": new Date("2021-04-09T15:22:59+02:00"),
        "sellDate": null,
        "color": "blue",
        "finish": "Zénith",
        "garage": {
            "name": "Pelletier Legendre et Fils",
            "phone": "+33 1 32 93 82 ",
            "streetNumber": "96",
            "street": "boulevard Denis Faure",
            "city": "Lebreton-la-Forêt",
            "numDept": "46"
        },
        "motor": "officiis reprehenderit enim"
    },
    {
        "id": 1001,
        "price": 28653,
        "kilometers": 117991,
        "year": 2013,
        "fuel": {
            "name": "hybride (essence)"
        },
        "model": {
            "id": 354,
            "name": "G Cabrio",
            "brand": {
                "id": 129,
                "brand": "mercedes-benz"
            }
        },
        "gear": {
            "numberGear": 4,
            "description": "boite auto 4 vitesses"
        },
        "pictures": [
            {
                "id": 2078,
                "altDescription": "Consequuntur enim est occaecati.",
                "pathPicture": "https://via.placeholder.com/360x360.png/00ccbb?text=cars1001+a"
            },
            {
                "id": 2079,
                "altDescription": "Sint impedit doloribus ut excepturi placeat.",
                "pathPicture": "https://via.placeholder.com/360x360.png/003333?text=cars1001+aperiam"
            },
            {
                "id": 2080,
                "altDescription": "Quo voluptatibus quam blanditiis unde odit dolor reprehenderit a.",
                "pathPicture": "https://via.placeholder.com/360x360.png/003388?text=cars1001+ut"
            },
            {
                "id": 2081,
                "altDescription": "Alias autem voluptatibus suscipit quae quae pariatur consequatur.",
                "pathPicture": "https://via.placeholder.com/360x360.png/00dd77?text=cars1001+molestiae"
            },
            {
                "id": 2082,
                "altDescription": "Voluptatem et quo quae amet dolorum unde molestias natus.",
                "pathPicture": "https://via.placeholder.com/360x360.png/008822?text=cars1001+odio"
            }
        ],
        "carType": {
            "carType": "monospace"
        },
        "title": "titre 1001",
        "description": "courte descriptioncourte descriptioncourte description       courte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte description",
        "creationDate": new Date("2021-05-03T00:00:00+02:00"),
        "sellDate": null,
        "color": "blei",
        "finish": "à la main",
        "garage": {
            "name": "Pelletier Legendre et Fils",
            "phone": "+33 1 32 93 82 ",
            "streetNumber": "96",
            "street": "boulevard Denis Faure",
            "city": "Lebreton-la-Forêt",
            "numDept": "46"
        },
        "motor": "accusamus reprehenderit sit"
    },
    {
        "id": 1002,
        "price": 52456,
        "kilometers": 370230,
        "year": 2019,
        "fuel": {
            "name": "gpl"
        },
        "model": {
            "id": 273,
            "name": "Caravelle",
            "brand": {
                "id": 143,
                "brand": "volkswagen"
            }
        },
        "gear": {
            "numberGear": 6,
            "description": "boite manuelle 6 vitesses"
        },
        "pictures": [
            {
                "id": 2083,
                "altDescription": "Ut eaque totam quos eligendi sit.",
                "pathPicture": "https://via.placeholder.com/360x360.png/007744?text=cars1002+aliquam"
            },
            {
                "id": 2084,              
                "altDescription": "Eveniet facilis adipisci unde ea praesentium soluta sint occaecati.",
                "pathPicture": "https://via.placeholder.com/360x360.png/00ee44?text=cars1002+cum"
            },
            {
                "id": 2085,
                "altDescription": "Facilis blanditiis aperiam nobis.",
                "pathPicture": "https://via.placeholder.com/360x360.png/0011dd?text=cars1002+molestias"
            },
            {
                "id": 2086,
                "altDescription": "Amet qui aut quod eaque voluptas fugit voluptas.",
                "pathPicture": "https://via.placeholder.com/360x360.png/009900?text=cars1002+quas"
            },
            {
                "id": 2087,
                "altDescription": "Porro aut minus eius eius eum asperiores dolores nulla.",
                "pathPicture": "https://via.placeholder.com/360x360.png/00bb33?text=cars1002+quia"
            }
        ],
        "carType": {
            "carType": "monospace"
        },
        "title": "titre 1002",
        "description": "courte descriptioncourte descriptioncourte description       courte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte descriptioncourte description",
        "creationDate": new Date("2021-04-20T00:00:00+02:00"),
        "sellDate": null,
        "color": "rouge",
        "finish": "maison",
        "garage": {
            "name": "Texier",
            "phone": "+33 7 53 29 49 ",
            "streetNumber": "367",
            "street": "boulevard de Brunel",
            "city": "Robinnec",
            "numDept": "64"
        },
        "motor": "doloremque harum mollitia"
    },
    {
        "id": 266,
        "price": 22637,
        "kilometers": 184028,
        "year": 2007,
        "fuel": {
            "name": "hybride rechargeable (gazole)"
        },
        "model": {
            "id": 567,
            "name": "Doblo",
            "brand": {
                "id": 117,
                "brand": "fiat"
            }
        },
        "gear": {
            "numberGear": 4,
            "description": "boite auto 4 vitesses"
        },
        "pictures": [
            {
                "id": 286,
                "altDescription": "Nam est ut ipsum.",
                "pathPicture": "https://via.placeholder.com/360x360.png/0066ee?text=cars266+earum"
            },
            {
                "id": 1285,
                "altDescription": "Explicabo consequatur veniam dolore quod.",
                "pathPicture": "https://via.placeholder.com/360x360.png/003333?text=cars266+quis"
            }
        ],
        "carType": {
            "carType": "berline compactes"
        },
        "title": "Maxime ad aut eum.",
        "description": "Non officia occaecati ad cupiditate occaecati est ipsa. Ut culpa qui nam natus ad voluptatem blanditiis doloremque. Ut est vero porro magnam vero et. Veniam sit dolore occaecati itaque error.",
        "creationDate": new Date("2021-04-09T15:36:15+02:00"),
        "sellDate": null,
        "color": "white",
        "finish": "Premium",
        "garage": {
            "name": "Voisin SARL",
            "phone": "0960767231",
            "streetNumber": "60",
            "street": "avenue Édith Muller",
            "city": "Gonzalez",
            "numDept": "20"
        },
        "motor": "ratione earum et"
    },
    {
        "id": 993,
        "price": 11062,
        "kilometers": 227802,
        "year": 2020,
        "fuel": {
            "name": "hybride rechargeable (gazole)"
        },
        "model": {
            "id": 46,
            "name": "1007",
            "brand": {
                "id": 133,
                "brand": "peugeot"
            }
        },
        "gear": {
            "numberGear": 7,
            "description": "boite manuelle 7 vitesses"
        },
        "pictures": [
            {
                "id": 1013,
                "altDescription": "Inventore eligendi at ipsa dignissimos et.",
                "pathPicture": "https://via.placeholder.com/360x360.png/00ffdd?text=cars993+ut"
            },
            {
                "id": 2012,
                "altDescription": "Rerum voluptas laboriosam a architecto fugiat delectus delectus atque.",
                "pathPicture": "https://via.placeholder.com/360x360.png/002233?text=cars993+numquam"
            }
        ],
        "carType": {
            "carType": "berline compactes"
        },
        "title": "Consectetur quisquam sit iusto sit veritatis perferendis.",
        "description": "Libero distinctio inventore ex esse. Recusandae eaque laudantium beatae unde. Saepe est consequatur porro officiis voluptatum quis quis repellat. Beatae velit nihil commodi unde. Et libero sit occaecati qui blanditiis omnis. Assumenda velit labore tenetur",
        "creationDate": new Date("2021-04-09T15:22:59+02:00"),
        "sellDate": null,
        "color": "blue",
        "finish": "Zénith",
        "garage": {
            "name": "Pelletier Legendre et Fils",
            "phone": "+33 1 32 93 82 ",
            "streetNumber": "96",
            "street": "boulevard Denis Faure",
            "city": "Lebreton-la-Forêt",
            "numDept": "46"
        },
        "motor": "officiis reprehenderit enim"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
