
// 1. Text strings =====================================================================================================
//    Modify these strings and messages to change the behavior of your Lambda function

const data_en = {
    "city"        : "Düsseldorf",
    "state"       : "NRW",
    "postcode"    : "40000",
    "restaurants" : [
        { "name":"Dauser",
            "address":"Carlsplatz 4", "phone": "0211 486164",
            "meals": "breakfast, lunch, dinner",
            "description": "Very good civil dishes for a reasonable price."
        },
        { "name":"Rösterei Vier",
            "address":"Wallstraße 10", "phone": "0211 8693883",
            "meals": "coffee, breakfast, lunch",
            "description": "Cool caffe with a small selection of cakes and other sweet pastries."
        },
        { "name":"Münstermann Kontor",
            "address":"Hohe Straße 11", "phone": "0211 1300416",
            "meals": "breakfast, lunch, dinner",
            "description": "Delicious. A reservation is recommended."
        },
        { "name":"Sternerestaurant Fritz's Frau Franzi",
            "address":"Adersstraße 8", "phone": "0211 370750",
            "meals": "lunch, dinner",
            "description": "Friendly, relaxed and attentive service."
        },
        { "name":"Stappen in Oberkassel",
            "address":"Luegallee 50", "phone": "0211 93077600",
            "meals": "lunch, dinner",
            "description": "Fine German cuisine attentively served."
        },
        { "name":"Das Coffe",
            "address":"Benrather Straße 6B", "phone": "0171 7760800",
            "meals": "coffee, breakfast, lunch",
            "description": "One of the best cappuccinos in Düsseldorf."
        },

    ],
    "attractions":[
        {
            "name": "Medienhafen",
            "description": "Perfect photo opportunity for photographers. The reflecting house must be seen.",
            "distance": "0"
        },
        {
            "name": "Düsselstrand",
            "description": "Slides and attractions for all ages in a water park.",
            "distance": "4"
        },
        {
            "name": "Wildpark Grafenberger Wald",
            "description": "Free park with native animals in natural-looking enclosures.",
            "distance": "6"
        },
        {
            "name": "Esprit Arena",
            "description": "Home of the local soccer club Fortuna Düsseldorf.",
            "distance": "10"
        }
    ]
}

const data_de = {
    "city"        : "Düsseldorf",
    "state"       : "NRW",
    "postcode"    : "40000",
    "restaurants" : [
        { "name":"Dauser",
            "address":"Carlsplatz 4", "phone": "0211 486164",
            "meals": "breakfast, lunch, dinner",
            "description": "Sehr gute bürgerliche Gerichte zu einem vernünftigen Preis."
        },
        { "name":"Rösterei Vier",
            "address":"Wallstraße 10", "phone": "0211 8693883",
            "meals": "coffee, breakfast, lunch",
            "description": "Cooles Caffe mit kleinem Angebot an Kuchen und anderem süßem Gebäck."
        },
        { "name":"Münstermann Kontor",
            "address":"Hohe Straße 11", "phone": "0211 1300416",
            "meals": "breakfast, lunch, dinner",
            "description": "Super lecker. Eine Reservierung ist empfehlenswert."
        },
        { "name":"Sternerestaurant Fritz's Frau Franzi",
            "address":"Adersstraße 8", "phone": "0211 370750",
            "meals": "lunch, dinner",
            "description": "Freundlicher, lockerer und zuvorkommender Service."
        },
        { "name":"Stappen in Oberkassel",
            "address":"Luegallee 50", "phone": "0211 93077600",
            "meals": "lunch, dinner",
            "description": "Gehobene deutsche Küche aufmerksam serviert."
        },
        { "name":"Das Coffe",
            "address":"Benrather Straße 6B", "phone": "0171 7760800",
            "meals": "coffee, breakfast, lunch",
            "description": "Einer der besten Cappuccinos in Düsseldorf."
        },

    ],
    "attractions":[
        {
            "name": "Medienhafen",
            "description": "Perfektes Fotomotiv für Fotografen. Das spiegelnde Haus muss man gesehen haben.",
            "distance": "0"
        },
        {
            "name": "Düsselstrand",
            "description": "Rutschen und Attraktionen für alle Altersgruppen in einem Wasserpark.",
            "distance": "4"
        },
        {
            "name": "Wildpark Grafenberger Wald",
            "description": "Kostenloser Park mit einheimischen Tieren in natürlich wirkenden Gehegen.",
            "distance": "6"
        },
        {
            "name": "Esprit Arena",
            "description": "Heimat des lokalen Fußballclubs Fortuna Düsseldorf.",
            "distance": "10"
        }
    ]
}

const languageStrings = {
    'en': {
        'translation': {
            'DATA'      : data_en,
            'WELCOME'   : 'Welcome to Dusseldorf Guide! Say about, to hear more about the city, or say coffee, breakfast, lunch, or dinner, to hear local restaurant suggestions, or say recommend an attraction, or say, go outside.',
            'HELP'      : 'Say about, to hear more about the city, or say coffee, breakfast, lunch, or dinner, to hear local restaurant suggestions, or say recommend an attraction, or say, go outside.',
            'ABOUT'     : 'Dusseldorf is a city on the river rhine. A popular shopping destination, Dusseldorf has a rich history of beer and fashion.',
            'STOP'      : 'Okay, see you next time!',
            'MORE'      : 'Would you like to hear more?',
            'COFFEE'    : 'For a great coffee shop, I recommend {{name}}. Would you like to hear more?',
            'BREAKFAST' : 'For breakfast, try this, {{name}}. Would you like to hear more?',
            'LUNCH'     : 'Lunch time! Here is a good spot. {{name}}. Would you like to hear more?',
            'DINNER'    : 'Enjoy dinner at {{name}}. Would you like to hear more?',
            'ATTRACTION': 'Try {{name}}, which is kilomters away. Have fun! {{description}}',
            'ATT_NEAR'  : 'Try {{name}}, which is right downtown. {{description}}',
            'ATT_NO'    : 'I couldn\'t find anything in a {{distance}} kilomters radius.',
            'DETAILS'   : '{{name}} is located at {{address}}, the phone number is {{phone}}, and the description is, {{description}}. I have sent these details to the Alexa App on your phone.  Enjoy your meal! <say-as interpret-as="interjection">bon appetit</say-as>',
            'PHONE'     : 'phone: ',
            'GO_OUT'    : 'It is {{localTime}} and the weather in {{city}} is {{currentTemp}} and {{currentCondition}}'
        }
    }, 
    'de-DE': { 
        'translation': {
            'DATA'      : data_de, 
            'WELCOME'   : 'Willkommen beim Düsseldorf Reiseführer! Sage über, um mehr über die Stadt zu erfahren, oder sage Kaffee, Frühstück, Mittag, oder Abendessen, um lokale Restaurantvorschläge zu erhalten, oder sage empfehle eine Attraktion, oder sage, geh nach draußen.',
            'HELP'      : 'Sage über, um mehr über die Stadt zu erfahren, oder sage Kaffee, Frühstück, Mittag, oder Abendessen, um lokale Restaurantvorschläge zu erhalten, oder sage empfehle eine Attraktion, oder sage, geh nach draußen.',
            'ABOUT'     : 'Düsseldorf ist eine Stadt am Rhein. Die Messe- und Sportstadt ist ein beliebtes Ausflugsziel zum Einkaufen und hat eine umfangreiche Geschichte rund um Bier und Mode.',
            'STOP'      : 'Okay, bis bald!',
            'MORE'      : 'Möchtest du mehr erfahren?',
            'COFFEE'    : 'Für einen guten Kaffee empfehle ich {{name}} Möchtest du mehr erfahren?',
            'BREAKFAST' : 'Probiere {{name}} für ein Frühstück. Möchtest du mehr erfahren?',
            'LUNCH'     : 'Mittagszeit! Hier ist es gut: {{name}}. Möchtest du mehr erfahren?',
            'DINNER'    : 'Genieße das Abendessen bei {{name}}. Möchtest du mehr erfahren?',
            'ATTRACTION': 'Versuche {{name}}, es ist {{description}} Kilomter entfernt. Viel Spaß! {{description}}',
            'ATT_NEAR'  : 'Versuche {{name}}, es ist in der Innenstadt. {{description}}',
            'ATT_NO'    : 'Ich konnte leider nichts im Umkreis von {{distance}} Kilomtern finden!',
            'DETAILS'   : '{{name}} findest du an der Adresse {{address}}, die Telefonnummer ist {{phone}}, und die Beschreibung ist, {{description}}. Ich habe diese Angaben an deine Alexa App geschickt. <say-as interpret-as="interjection">bon appetit</say-as>',
            'PHONE'     : 'Telefon: ',
            'GO_OUT'    : 'Es ist {{localTime}} und das Wetter in {{city}} ist {{currentTemp}} und {{currentCondition}}'
        } 
    }
};

const SKILL_NAME = "Dusseldorf Guide";

// Weather courtesy of the Yahoo Weather API.
// This free API recommends no more than 2000 calls per day
// This concrete API only provides mph, fahrenheit, and english results.
const myAPI = {
    host: 'query.yahooapis.com',
    port: 443,
    path: `/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${encodeURIComponent(data_de.city)}%2C%20${data_de.state}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`,
    method: 'GET'
};
// 2. Skill Code =======================================================================================================

const Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    // alexa.appId = 'amzn1.echo-sdk-ams.app.1234';
    ///alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.response.speak(this.t('WELCOME')).listen(this.t('HELP'));
        this.emit(':responseReady');
    },

    'AboutIntent': function () {
        this.response.speak(this.t('ABOUT'));
        this.emit(':responseReady');
    },

    'CoffeeIntent': function () {
        var locale = this.event.request.locale;

        var data;
        if (locale === "de-DE") {
            data = data_de;
        } else {
            data = data_en;
        }
     
        var restaurant = randomArrayElement(getRestaurantsByMeal('coffee', data));
        this.attributes['restaurant'] = restaurant.name;
        this.response.speak(this.t('COFFEE', {name: restaurant.name})).listen(this.t('MORE'));
        this.emit(':responseReady');
    },

    'BreakfastIntent': function () {
        var data = this.t('DATA');
        var restaurant = randomArrayElement(getRestaurantsByMeal('breakfast', data));
        this.attributes['restaurant'] = restaurant.name;
        this.response.speak(this.t('BREAKFAST', {name: restaurant.name})).listen(this.t('MORE'));
        this.emit(':responseReady');
    },

    'LunchIntent': function () {
        var data = this.t('DATA');
        var restaurant = randomArrayElement(getRestaurantsByMeal('lunch', data));
        this.attributes['restaurant'] = restaurant.name;
        this.response.speak(this.t('LUNCH', {name: restaurant.name})).listen(this.t('MORE'));
        this.emit(':responseReady');
    },

    'DinnerIntent': function () {
        var data = this.t('DATA');
        var restaurant = randomArrayElement(getRestaurantsByMeal('dinner', data));
        this.attributes['restaurant'] = restaurant.name;
        this.response.speak(this.t('DINNER', {name: restaurant.name})).listen(this.t('MORE'));
        this.emit(':responseReady');
    },

    'AMAZON.YesIntent': function () {
        var data = this.t('DATA');
        var restaurantName = this.attributes['restaurant'];
        var restaurantDetails = getRestaurantByName(restaurantName, data);

        var card = restaurantDetails.name + '\n' + restaurantDetails.address + '\n'
            + data.city + ', ' + data.state + ' ' + data.postcode
            + '\n' + this.t('PHONE') + restaurantDetails.phone + '\n';

        this.response.cardRenderer(SKILL_NAME, card);
        this.response.speak(this.t('DETAILS', {name: restaurantDetails.name, address: restaurantDetails.address, phone:restaurantDetails.phone, description: restaurantDetails.description}));
        this.emit(':responseReady');

    },

    'AttractionIntent': function () {
        var data = this.t('DATA');
        var distance = 200;
        if (this.event.request.intent.slots.distance.value) {
            distance = this.event.request.intent.slots.distance.value;
        }

        var attraction = randomArrayElement(getAttractionsByDistance(distance, data));

        if (!attraction) {
            this.response.speak(this.t('ATT_NO', {distance: distance}));
        } else if (attraction.distance == "0") {
            this.response.speak(this.t('ATT_NEAR', {name: attraction.name, distance: attraction.distance, description: attraction.description}));
        } else {
            this.response.speak(this.t('ATTRACTION', {name: attraction.name, distance: attraction.distance, description: attraction.description}));
        }

        this.emit(':responseReady');
    },

    'GoOutIntent': function () {
        
        // This concrete API only provides mph, fahrenheit, and english results.
        getWeather( ( localTime, currentTemp, currentCondition) => {
            // time format 10:34 PM
            // currentTemp 72
            // currentCondition, e.g.  Sunny, Breezy, Thunderstorms, Showers, Rain, Partly Cloudy, Mostly Cloudy, Mostly Sunny

            // sample API URL for Irvine, CA
            // https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22irvine%2C%20ca%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys

            var data = this.t('DATA');
            this.response.speak(this.t('GO_OUT', {localTime: localTime, city:data.city, currentTemp:currentTemp, currentCondition:currentCondition}));
            this.emit(':responseReady');

            // TODO
            // Decide, based on current time and weather conditions,
            // whether to go out to a local beach or park;
            // or recommend a movie theatre; or recommend staying home


        });
    },

    'AMAZON.NoIntent': function () {
        this.emit('AMAZON.StopIntent');
    },
    'AMAZON.HelpIntent': function () {
        this.response.speak(this.t('HELP')).listen(this.t('HELP'));
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(this.t('STOP'));
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'SessionEndedRequest': function () {
        this.response.speak(this.t('STOP'));
        this.emit(':responseReady');
    }

};

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

function getRestaurantsByMeal(mealtype, data) {

    var list = [];
    for (var i = 0; i < data.restaurants.length; i++) {

        if(data.restaurants[i].meals.search(mealtype) >  -1) {
            list.push(data.restaurants[i]);
        }
    }
    return list;
}

function getRestaurantByName(restaurantName, data) {

    var restaurant = {};
    for (var i = 0; i < data.restaurants.length; i++) {

        if(data.restaurants[i].name == restaurantName) {
            restaurant = data.restaurants[i];
        }
    }
    return restaurant;
}

function getAttractionsByDistance(maxDistance, data) {

    var list = [];

    for (var i = 0; i < data.attractions.length; i++) {

        if(parseInt(data.attractions[i].distance) <= maxDistance) {
            list.push(data.attractions[i]);
        }
    }
    return list;
}

function getWeather(callback) {
    var https = require('https');


    var req = https.request(myAPI, res => {
        res.setEncoding('utf8');
        var returnData = "";

        res.on('data', chunk => {
            returnData = returnData + chunk;
        });
        res.on('end', () => {
            var channelObj = JSON.parse(returnData).query.results.channel;

            var localTime = channelObj.lastBuildDate.toString();
            localTime = localTime.substring(17, 25).trim();

            var currentTemp = channelObj.item.condition.temp;

            var currentCondition = channelObj.item.condition.text;

            callback(localTime, currentTemp, currentCondition);

        });

    });
    req.end();
}
function randomArrayElement(array) {
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}