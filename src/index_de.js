
// 1. Text strings =====================================================================================================
//    Modify these strings and messages to change the behavior of your Lambda function

const languageStrings = {
    'en': {
        'translation': {
            'WELCOME' : "Welcome to Dusseldorf Guide!",
            'HELP'    : "Say about, to hear more about the city, or say coffee, breakfast, lunch, or dinner, to hear local restaurant suggestions, or say recommend an attraction, or say, go outside. ",
            'ABOUT'   : "Dusseldorf is a city on the Atlantic Ocean. A popular summer beach destination, Gloucester has a rich history of fishing and ship building.",
            'STOP'    : "Okay, see you next time!"
        }
    }, 
    'de-DE': { 
        'translation' : { 
            'WELCOME' : "Willkommen beim Düsseldorf Reiseführer!",
            'HELP'    : "Sage über, um mehr über die Stadt zu erfahren, oder sage Kaffee, Frühstück, Mittag, oder Abendessen, um lokale Restaurantvorschläge zu erhalten, oder sage empfehle eine Attraktion, oder sage, geh nach draußen.",
            'ABOUT'   : "Düsseldorf ist eine Stadt am Rhein. Die Messe- und Sportstadt ist ein beliebtes Ausflugsziel zum Einkaufen und hat eine umfangreiche Geschichte rund um Bier.",
            'STOP'    : "Okay, bis bald!"
        } 
    }
};
const data = {
    "city"        : "Düsseldorf",
    "state"       : "NRW",
    "postcode"    : "40000",
    "restaurants" : [
        { "name":"Zeke's Place",
            "address":"Hauptstraße 1", "phone": "0211-123450",
            "meals": "breakfast, lunch",
            "description": "Ein gemütlicher Laden."
        },
        { "name":"Guten Morgen Kaffee",
            "address":"Bahnhofsplatz 12", "phone": "0211-123451",
            "meals": "coffee, breakfast, lunch",
            "description": "Gegenüber vom Bahnhof."
        },
        { "name":"Zuckerblume",
            "address":"Marktplatz 99", "phone": "0211-123452",
            "meals": "breakfast, lunch",
            "description": "Populär für seine Pfannkuchen."
        },
        { "name":"Rheinhafen Grill",
            "address":"Rheinuferstraße 11", "phone": "0211-123453",
            "meals": "lunch, dinner",
            "description": "Genieße den Blick auf den Rhein."
        },
        { "name":"Breitengrad",
            "address":"Breitestraße 4", "phone": "0211-123454",
            "meals": "lunch, dinner",
            "description": "Live-Musik und Sushi."
        },
        { "name":"George's Coffee Shop",
            "address":"Friedrichstraße 301", "phone": "0211-123455",
            "meals": "coffee, breakfast, lunch",
            "description": "Super bewertet und auch bei Einheimischen beliebt."
        },

    ],
    "attractions":[
        {
            "name": "Walbeobachtung",
            "description": "Wer hätte das gedacht, hier kann man Wale beobachten.",
            "distance": "0"
        },
        {
            "name": "Schöner Strand",
            "description": "Auch am Rhein gibt es schöne Strände.",
            "distance": "2"
        },
        {
            "name": "Altstadt",
            "description": "Altbier für Kenner.",
            "distance": "4"
        },
        {
            "name": "Esprit Arena",
            "description": "Heimat des lokalen Fußballclubs Fortuna Düsseldorf.",
            "distance": "38"
        }
    ]
}

const SKILL_NAME = "Dusseldorf Guide";

// Weather courtesy of the Yahoo Weather API.
// This free API recommends no more than 2000 calls per day

const myAPI = {
    host: 'query.yahooapis.com',
    port: 443,
    path: `/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${encodeURIComponent(data.city)}%2C%20${data.state}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`,
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
        var say = this.t('WELCOME') + ' ' + this.t('HELP');
        this.response.speak(say).listen(say);
        this.emit(':responseReady');
    },

    'AboutIntent': function () {
        this.response.speak(this.t('ABOUT'));
        this.emit(':responseReady');
    },

    'CoffeeIntent': function () {
        var restaurant = randomArrayElement(getRestaurantsByMeal('coffee'));
        this.attributes['restaurant'] = restaurant.name;

        var say = 'Für einen guten Kaffee empfehle ich ' + restaurant.name + '. Möchtest du mehr erfahren?';
        this.response.speak(say).listen(say);
        this.emit(':responseReady');
    },

    'BreakfastIntent': function () {
        var restaurant = randomArrayElement(getRestaurantsByMeal('breakfast'));
        this.attributes['restaurant'] = restaurant.name;

        var say = 'Probiere das hier für ein Frühstück: ' + restaurant.name + '. Möchtest du mehr erfahren?';
        this.response.speak(say).listen(say);
        this.emit(':responseReady');
    },

    'LunchIntent': function () {
        var restaurant = randomArrayElement(getRestaurantsByMeal('lunch'));
        this.attributes['restaurant'] = restaurant.name;

        var say = 'Mittagszeit! Hier ist es gut. ' + restaurant.name + '. Möchtest du mehr erfahren?';
        this.response.speak(say).listen(say);
        this.emit(':responseReady');
    },

    'DinnerIntent': function () {
        var restaurant = randomArrayElement(getRestaurantsByMeal('dinner'));
        this.attributes['restaurant'] = restaurant.name;

        var say = 'Genieße das Abendessen bei ' + restaurant.name + '. Möchtest du mehr erfahren?';
        this.response.speak(say).listen(say);
        this.emit(':responseReady');
    },

    'AMAZON.YesIntent': function () {
        var restaurantName = this.attributes['restaurant'];
        var restaurantDetails = getRestaurantByName(restaurantName);

        var say = restaurantDetails.name
            + ' findest du an der Adresse ' + restaurantDetails.address
            + ', die Telefonnummer ist ' + restaurantDetails.phone
            + ', und die Beschreibung ist, ' + restaurantDetails.description
            + '  Ich habe diese Angaben an deine Alexa App geschickt. <say-as interpret-as="interjection">bon appetit</say-as>' ;

        var card = restaurantDetails.name + '\n' + restaurantDetails.address + '\n'
            + data.city + ', ' + data.state + ' ' + data.postcode
            + '\nTelefon: ' + restaurantDetails.phone + '\n';

        this.response.cardRenderer(SKILL_NAME, card);
        this.response.speak(say);
        this.emit(':responseReady');

    },

    'AttractionIntent': function () {
        var distance = 200;
        if (this.event.request.intent.slots.distance.value) {
            distance = this.event.request.intent.slots.distance.value;
        }

        var attraction = randomArrayElement(getAttractionsByDistance(distance));

        var say = 'Versuche '
            + attraction.name + ', es ist '
            + (attraction.distance == "0" ? 'in der Innenstadt. ' : attraction.distance + ' Meilen entfernt. Viel Spaß! ')
            + attraction.description;

        this.response.speak(say);
        this.emit(':responseReady');
    },

    'GoOutIntent': function () {

        getWeather( ( localTime, currentTemp, currentCondition) => {
            // time format 10:34 PM
            // currentTemp 72
            // currentCondition, e.g.  Sunny, Breezy, Thunderstorms, Showers, Rain, Partly Cloudy, Mostly Cloudy, Mostly Sunny

            // sample API URL for Irvine, CA
            // https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22irvine%2C%20ca%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys

            var say = 'Es ist ' + localTime
                + ' und das Wetter in ' + data.city
                + ' ist '
                + currentTemp + ' und ' + currentCondition;
            this.response.speak(say);
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

function getRestaurantsByMeal(mealtype) {

    var list = [];
    for (var i = 0; i < data.restaurants.length; i++) {

        if(data.restaurants[i].meals.search(mealtype) >  -1) {
            list.push(data.restaurants[i]);
        }
    }
    return list;
}

function getRestaurantByName(restaurantName) {

    var restaurant = {};
    for (var i = 0; i < data.restaurants.length; i++) {

        if(data.restaurants[i].name == restaurantName) {
            restaurant = data.restaurants[i];
        }
    }
    return restaurant;
}

function getAttractionsByDistance(maxDistance) {

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