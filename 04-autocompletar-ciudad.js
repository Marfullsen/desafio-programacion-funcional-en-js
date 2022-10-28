// Autocompletar ciudad

const input_ciudad = document.getElementById('input_ciudad');
const resultados = document.getElementById('resultados_ciudad');

//const { fromEvent } = rxjs;
//const { map } = rxjs.operators;

fromEvent(input_ciudad, 'input')
.pipe(map(() => input_ciudad.value.toLowerCase()), map(valor=> CIUDADES.filter((cuidad)=> cuidad.toLowerCase().indexOf(valor) > -1)))
.subscribe(cuidadesFiltradas=>{
    resultados.innerHTML = '';
    for(const ciudad of cuidadesFiltradas){
        const  p =document.createElement('p');
        p.innerText = ciudad;
        resultados.appendChild(p);
    }
})

const CIUDADES = [
  "Yardville, North Carolina",
  "Tyhee, New York",
  "Chamberino, Nebraska",
  "Trucksville, Louisiana",
  "Riceville, Rhode Island",
  "Trona, Idaho",
  "Eggertsville, Connecticut",
  "Wells, Nevada",
  "Catherine, North Dakota",
  "Wakulla, Northern Mariana Islands",
  "Beyerville, Puerto Rico",
  "Stevens, South Carolina",
  "Avalon, California",
  "Dana, Texas",
  "Sanborn, Vermont",
  "Courtland, Alaska",
  "Nicut, Ohio",
  "Allendale, Maine",
  "Tonopah, Wyoming",
  "Loma, Marshall Islands",
  "Gadsden, Wisconsin",
  "Allamuchy, New Hampshire",
  "Ivanhoe, New Mexico",
  "Greenfields, Pennsylvania",
  "Springdale, New Jersey",
  "Beason, Delaware",
  "Croom, Hawaii",
  "Highland, Massachusetts",
  "Moraida, Washington",
  "Gilmore, Florida",
  "Chilton, Mississippi",
  "Chelsea, Virgin Islands",
  "Eastmont, Palau",
  "Clay, Utah",
  "Hollins, Alabama",
  "Cascades, Kentucky",
  "Vandiver, Georgia",
  "Grenelefe, Illinois",
  "Cleary, Michigan",
  "Iola, Tennessee",
  "National, Oklahoma",
  "Detroit, Oregon",
  "Dante, Iowa",
  "Como, South Dakota",
  "Wakarusa, Arkansas",
  "Itmann, Colorado",
  "Gwynn, Maryland",
  "Barrelville, Missouri",
  "Shrewsbury, Indiana",
  "Hollymead, Guam",
  "Coalmont, Montana",
  "Bowmansville, Arizona",
  "Jugtown, West Virginia",
  "Ironton, American Samoa",
  "Robinson, Kansas",
  "Eureka, Virginia",
  "Callaghan, Federated States Of Micronesia",
  "Fingerville, Minnesota",
  "Crawfordsville, District Of Columbia",
  "Gardners, North Carolina",
  "Rossmore, New York",
  "Allensworth, Nebraska",
  "Sussex, Louisiana",
  "Waterford, Rhode Island",
  "Remington, Idaho",
  "Tooleville, Connecticut",
  "Garberville, Nevada",
  "Wyano, North Dakota",
  "Caberfae, Northern Mariana Islands",
  "Gratton, Puerto Rico",
  "Edmund, South Carolina",
  "Cetronia, California",
  "Rivereno, Texas",
  "Slovan, Vermont",
  "Teasdale, Alaska",
  "Sena, Ohio",
  "Coyote, Maine",
  "Faywood, Wyoming",
  "Malo, Marshall Islands",
  "Silkworth, Wisconsin",
  "Harrodsburg, New Hampshire",
  "Turah, New Mexico",
  "Crumpler, Pennsylvania",
  "Vale, New Jersey",
  "Glidden, Delaware",
  "Darlington, Hawaii",
  "Cloverdale, Massachusetts",
  "Goodville, Washington",
  "Morriston, Florida",
  "Bethany, Mississippi",
  "Takilma, Virgin Islands",
  "Grimsley, Palau",
  "Klondike, Utah",
  "Galesville, Alabama",
  "Fairlee, Kentucky",
  "Rockingham, Georgia",
  "Morningside, Illinois",
  "Ticonderoga, Michigan",
  "Caln, Tennessee",
  "Conestoga, Oklahoma",
  "Weedville, Oregon",
  "Coloma, Iowa",
  "Fairmount, South Dakota",
  "Lavalette, Arkansas",
  "Oneida, Colorado",
  "Norfolk, Maryland",
  "Sharon, Missouri",
  "Wright, Indiana",
  "Gibbsville, Guam",
  "Alderpoint, Montana",
  "Kraemer, Arizona",
  "Herlong, West Virginia",
  "Hoehne, American Samoa",
  "Juarez, Kansas",
  "Chumuckla, Virginia",
  "Indio, Federated States Of Micronesia",
  "Frierson, Minnesota",
  "Blue, District Of Columbia",
  "Rodanthe, North Carolina",
  "Sisquoc, New York",
  "Hemlock, Nebraska",
  "Taycheedah, Louisiana",
  "Sterling, Rhode Island",
  "Yogaville, Idaho",
  "Maybell, Connecticut",
  "Whitmer, Nevada",
  "Jessie, North Dakota",
  "Driftwood, Northern Mariana Islands",
  "Brogan, Puerto Rico",
  "Kenmar, South Carolina",
  "Adelino, California",
  "Waiohinu, Texas",
  "Newry, Vermont",
  "Blende, Alaska",
  "Alleghenyville, Ohio",
  "Selma, Maine",
  "Riegelwood, Wyoming",
  "Sexton, Marshall Islands",
  "Nogal, Wisconsin",
  "Umapine, New Hampshire",
  "Choctaw, New Mexico",
  "Kingstowne, Pennsylvania",
  "Harmon, New Jersey",
  "Camino, Delaware",
  "Stewart, Hawaii",
  "Inkerman, Massachusetts",
  "Volta, Washington",
  "Wyoming, Florida",
  "Sheatown, Mississippi",
  "Bartonsville, Virgin Islands",
  "Seymour, Palau",
  "Durham, Utah",
  "Heil, Alabama",
  "Holtville, Kentucky",
  "Tryon, Georgia",
  "Nadine, Illinois",
  "Waukeenah, Michigan",
  "Orick, Tennessee",
  "Yorklyn, Oklahoma",
  "Cornfields, Oregon",
  "Calverton, Iowa",
  "Gordon, South Dakota",
  "Berwind, Arkansas",
  "Wawona, Colorado",
  "Weeksville, Maryland",
  "Allison, Missouri",
  "Thynedale, Indiana",
  "Dupuyer, Guam",
  "Forestburg, Montana",
  "Welda, Arizona",
  "Grantville, West Virginia",
  "Cavalero, American Samoa",
  "Chemung, Kansas",
  "Northchase, Virginia",
  "Bath, Federated States Of Micronesia",
  "Walton, Minnesota",
  "Steinhatchee, District Of Columbia",
  "Woodruff, North Carolina",
  "Greenbackville, New York",
  "Edgewater, Nebraska",
  "Hessville, Louisiana",
  "Jacksonburg, Rhode Island",
  "Leroy, Idaho",
  "Tioga, Connecticut",
  "Edenburg, Nevada",
  "Chaparrito, North Dakota",
  "Albany, Northern Mariana Islands",
  "Epworth, Puerto Rico",
  "Woodburn, South Carolina",
  "Beaulieu, California",
  "Lumberton, Texas",
  "Troy, Vermont",
  "Jacksonwald, Alaska",
  "Westmoreland, Ohio",
  "Dahlen, Maine",
  "Wilmington, Wyoming",
  "Ripley, Marshall Islands",
  "Gerber, Wisconsin",
  "Crayne, New Hampshire",
  "Staples, New Mexico",
  "Zarephath, Pennsylvania",
  "Machias, New Jersey",
  "Grayhawk, Delaware",
  "Curtice, Hawaii",
  "Concho, Massachusetts",
  "Fresno, Washington",
  "Dargan, Florida",
  "Hasty, Mississippi",
  "Lupton, Virgin Islands",
  "Spelter, Palau",
  "Summertown, Utah",
  "Defiance, Alabama",
  "Clinton, Kentucky",
  "Hiseville, Georgia",
  "Stewartville, Illinois",
  "Breinigsville, Michigan",
  "Williamson, Tennessee",
  "Freelandville, Oklahoma",
  "Ferney, Oregon",
  "Watchtower, Iowa",
  "Jardine, South Dakota",
  "Cliffside, Arkansas",
  "Ogema, Colorado",
  "Franklin, Maryland",
  "Shaft, Missouri",
  "Lodoga, Indiana"
];