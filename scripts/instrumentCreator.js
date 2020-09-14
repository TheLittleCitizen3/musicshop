var clarinet = {description:"קלרינט רועש",id:5,imagePath:"./img/clarinet.jpg",instrumentOrders :null,instrumenttype: {id:1,name:"נשיפה"},name:"קלרינט",price:1400,typeID:1 };
var flute = {
    description: 'חליל יפה',
    id: 1,
    imagePath: './img/piper.jpg',
    instrumentOrders: null,
    instrumenttype: {
      id: 1,
      name: 'נשיפה'
    },
    name: 'חליל',
    price: 50,
    typeID: 1
  };
  var hermonica = {
    description: 'מפוחית יפה',
    id: 2,
    imagePath: './img/hermonica.jpg',
    instrumentOrders: null,
    instrumenttype: {
      id: 1,
      name: 'נשיפה'
    },
    name: 'מפוחית',
    price: 35,
    typeID: 1
  };
  var trombone = {
    description: 'טרומבון קטן',
    id: 4,
    imagePath: './img/tromb.jpg',
    instrumentOrders: null,
    instrumenttype: {
      id: 1,
      name: 'נשיפה'
    },
    name: 'טרומבון',
    price: 2400,
    typeID: 1
  };
  var trumpet = {
    description: 'חצוצרה ארוכה',
    id: 3,
    imagePath: './img/trumpet.jpg',
    instrumentOrders: null,
    instrumenttype: {
      id: 1,
      name: 'נשיפה'
    },
    name: 'חצוצרה',
    price: 1500,
    typeID: 1
  };
  var violin = {
    description: 'כינור קטן',
    id: 6,
    imagePath: '',
    instrumentOrders: null,
    instrumenttype: {
      id: 2,
      name: 'מיתר'
    },
    name: 'קלרינט',
    price: 1400,
    typeID: 2
  };

var data = [flute,hermonica,trumpet,trombone,clarinet,violin];


function createCardOfInstrument(instrument) {
    var chartLogo = document.createElement("span");
    chartLogo.className = "glyphicon glyphicon-shopping-cart"

    var btn = document.createElement("a");
    btn.href = "#";
    btn.className = "btn btn-info btn-lg";
    btn.appendChild(chartLogo);
    var node = document.createTextNode("הוספה לעגלה");
    btn.appendChild(node);

    var node = document.createTextNode(instrument.price + "₪");
    var price = document.createElement("h4");
    price.appendChild(node);

    var pDescription = document.createElement("h4");
    pDescription.className = "text-center text-muted";
    var node = document.createTextNode(instrument.description);
    pDescription.appendChild(node);
    
    var producName = document.createElement("h2");
    var node = document.createTextNode(instrument.name);
    producName.appendChild(node);

    var cardBody = document.createElement("div");
    cardBody.class= "card-body";
    cardBody.appendChild(producName);
    cardBody.appendChild(pDescription);
    cardBody.appendChild(price);
    cardBody.appendChild(btn);

    var img = document.createElement("img");
    img.className = "card-img-top img-thumbnail";
    img.src = instrument.imagePath;
    img.alt="מוצר לא נמצא";

    var card = document.createElement("div");
    card.className = "card";

    card.appendChild(img);
    card.appendChild(cardBody);

    var cont = document.createElement("div");
    cont.className = "col-4 text-center";
    cont.appendChild(card);
    
    return cont;
    
}


function printProductList() {
    var row = document.getElementById("insdtruments-row");

    $("img").css({"height":"130px","width":"100%", "border-radius": "50px;"});
    data.forEach(function(instrument) {
        var card = createCardOfInstrument(instrument);
        row.appendChild(card);
    })
}

function addSortElementByType() {
    var dropdown = document.getElementById("dropdownFilter");

    var dropdownMenu = document.createElement("div");
    dropdownMenu.className = "dropdown-menu";
    dropdownMenu.setAttribute('aria-labelledby','dropdownMenuButton');

    
    var productTypes = data.map(function(p) {
        return p.instrumenttype;
    });
    var distinctProductTypes = [...new Set(productTypes.map(x=>x.name))];
    distinctProductTypes.forEach(function(type) {
        var filterOption = document.createElement("a");
        filterOption.className = "dropdown-item";
        filterOption.href = "#";

        filterOption.setAttribute('onClick','check()');
        var node = document.createTextNode(type);
        filterOption.appendChild(node);
        dropdownMenu.appendChild(filterOption);
    });
    dropdown.appendChild(dropdownMenu);

}

function check() {
    console.log("test");
}

printProductList();
addSortElementByType();