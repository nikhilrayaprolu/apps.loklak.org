var app = angular.module('appListApp', ['loklak', 'ngTouch']);

app.controller("app_list", function($scope, $http) {
    $scope.apps = [];
    $scope.categoryKeys = [];
    data={
  "apps": [
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/recoverpassword.json"],
      "name": "forgotpassword",
      "headline": "Password Recovery",
      "alternativeHeadline": "Forgot Password",
      "applicationCategory": "Accounts API",
      "applicationSubCategory": "account operations",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Shiven Mian",
        "url": "http://shivenmian.herokuapp.com",
        "email": "shiven15094@iiitd.ac.in",
        "sameAs": "https://github.com/shivenmian"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/peers.json"],
      "name": "oneClickDeploy",
      "headline": "One Click Deploy",
      "alternativeHeadline": "Increase Loklak peers",
      "applicationCategory": "Peers API",
      "applicationSubCategory": "Peers Deployment",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Damini Satya",
        "email": "daminisatya@gmail.com",
        "url": "https://github.com/daminisatya",
        "sameAs": "https://github.com/daminisatya"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/apps.json"],
      "name": "applist",
      "headline": "loklak app list",
      "alternativeHeadline": "work from GCI task",
      "applicationCategory": "About Project",
      "applicationSubCategory": "Apps listing",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Seva Zhidkov",
        "email": "zhidkovseva@gmail.com",
        "url": "https://github.com/sevazhidkov",
        "sameAs": "https://github.com/sevazhidkov"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/search.json"],
      "name": "fossasia-histogram",
      "headline": "loklak tweets histogram about Fossasia",
      "alternativeHeadline": "work from GCI task",
      "applicationCategory": "Tweets Analytics",
      "applicationSubCategory": "About project",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Seva Zhidkov",
        "email": "zhidkovseva@gmail.com",
        "url": "https://github.com/sevazhidkov",
        "sameAs": "https://github.com/sevazhidkov"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": [
        "/api/status.json",
        "/api/suggest.json",
        "/api/search.json",
        "/api/peers.json",
        "/api/hello.json",
        "/api/settings.json",
        "/api/threaddump.txt"
      ],
      "name": "LQL",
      "headline": "Loklak Query Language",
      "alternativeHeadline": "Advanced Search Tool for Loklak",
      "applicationCategory": "About Project",
      "applicationSubCategory": "Apps listing",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Sudheesh Singanamalla",
        "email": "sudheesh95@gmail.com",
        "url": "https://github.com/sudheesh001",
        "sameAs": "https://github.com/sudheesh001"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": [""],
      "name": "boilerplate",
      "headline": "Boilerplate for loklak apps",
      "alternativeHeadline": "the 'hello world' app that you want to copy-paste for your own app",
      "applicationCategory": "Demo",
      "applicationSubCategory": "Hello World",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Michael Christen",
        "url": "http://yacy.net",
        "sameAs": "https://github.com/orbiter"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/search.json"],
      "name": "yasoob",
      "headline": "loklak search page",
      "alternativeHeadline": "work from GCI task",
      "applicationCategory": "Message Search",
      "applicationSubCategory": "Text Retrieval",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "M.Yasoob Ullah",
        "email": "yasoob.khld@gmail.com",
        "url": "http://yasoob.me",
        "sameAs": "https://github.com/yasoob"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/search.json"],
      "name": "knowTheDiff",
      "headline": "Search Vs Aggregations",
      "alternativeHeadline": "Know more about Search aggregations",
      "applicationCategory": "Message Search",
      "applicationSubCategory": "Text Retrieval",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Damini Satya",
        "email": "daminisatya@gmail.com",
        "url": "https://github.com/daminisatya",
        "sameAs": "https://github.com/daminisatya"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": [
        "/api/search.json",
        "/api/suggest.json"
      ],
      "name": "barchart",
      "headline": "Stacked Bar Chart",
      "alternativeHeadline": "Using D3 stack layout",
      "applicationCategory": "Demo",
      "applicationSubCategory": "Hello World",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Leon",
        "url": "http://leonmak.me",
        "sameAs": "https://github.com/leonmak"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/search.json"],
      "name": "ducphanduy",
      "headline": "Loklak search page",
      "alternativeHeadline": "A loklak tweet search page using Angular.js",
      "applicationCategory": "Message Search",
      "applicationSubCategory": "Text Retrieval",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Duc Phan Duy",
        "email": "ducphanduy.agentp@gmail.com",
        "url": "http://ptnega.wordpress.com",
        "sameAs": "https://github.com/ducphanduyagentp"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": [
        "/api/search.json",
        "/api/suggest.json"
      ],
      "name": "tweetfeed",
      "headline": "Tweetfeed",
      "alternativeHeadline": "Twitter feed using poll and diff, infinite scroll",
      "applicationCategory": "Demo",
      "applicationSubCategory": "front-end app",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Leon Mak",
        "url": "http://leonmak.me",
        "sameAs": "https://github.com/leonmak"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/search.json"],
      "name": "tweetsleaderboard",
      "headline": "Leaderboard",
      "alternativeHeadline": "A Leaderboard based on the number of tweets",
      "applicationCategory": "Users API",
      "applicationSubCategory": "Text Retrieval",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Damini Satya",
        "email": "daminisatya@gmail.com",
        "url": "https://github.com/daminisatya",
        "sameAs": "https://github.com/daminisatya"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/login.json"],
      "name": "loginpage",
      "headline": "Log In to Loklak",
      "alternativeHeadline": "Login",
      "applicationCategory": "Accounts API",
      "applicationSubCategory": "account operations",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Shiven Mian",
        "url": "http://shivenmian.herokuapp.com",
        "email": "shiven15094@iiitd.ac.in",
        "sameAs": "https://github.com/shivenmian"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/search.json"],
      "name": "histogram",
      "headline": "Tweet Histogram Plotter",
      "alternativeHeadline": "work from GCI task",
      "applicationCategory": "Message Visualizer",
      "applicationSubCategory": "Text Retrieval",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "M.Yasoob Ullah",
        "email": "yasoob.khld@gmail.com",
        "url": "http://yasoob.me",
        "sameAs": "https://github.com/yasoob"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/account-permissions.json"],
      "name": "accountpermissions",
      "headline": "View permissions",
      "alternativeHeadline": "Account Permissions",
      "applicationCategory": "Accounts API",
      "applicationSubCategory": "account operations",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Robert Mader",
        "url": "",
        "email": "treba@silentundo.org",
        "sameAs": "https://github.com/treba123"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/search.json"],
      "name": "superwoman7",
      "headline": "Tweet Search Timeline",
      "alternativeHeadline": "A vertical message timeline",
      "applicationCategory": "Demo",
      "applicationSubCategory": "Hello World",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Ruthvik Vijayakumar",
        "url": "",
        "sameAs": "https://github.com/codeRuth"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/genericscraper.json"],
      "name": "WebScraper",
      "headline": "WebScraper",
      "alternativeHeadline": "Application which converts web pages into structured data",
      "applicationCategory": "Generic Scraper API",
      "applicationSubCategory": "JSON Object Retrieval",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Damini Satya",
        "email": "daminisatya@gmail.com",
        "url": "https://github.com/daminisatya",
        "sameAs": "https://github.com/daminisatya"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/signup.json"],
      "name": "signup",
      "headline": "Sign Up to Loklak",
      "alternativeHeadline": "Sign Up",
      "applicationCategory": "Accounts API",
      "applicationSubCategory": "account operations",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Shiven Mian",
        "url": "http://shivenmian.herokuapp.com",
        "email": "shiven15094@iiitd.ac.in",
        "sameAs": "https://github.com/shivenmian"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": [
        "/api/search.json",
        "/api/suggest.json"
      ],
      "name": "bubblecharts",
      "headline": "Bubble Charts",
      "alternativeHeadline": "Using D3 pack layout",
      "applicationCategory": "Demo",
      "applicationSubCategory": "Hello World",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Leon",
        "url": "http://leonmak.me",
        "sameAs": "https://github.com/leonmak"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/pubkey_registration.json"],
      "name": "keyRegistration",
      "headline": "Register a public key",
      "alternativeHeadline": "Key Registration",
      "applicationCategory": "Accounts API",
      "applicationSubCategory": "account operations",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Robert Mader",
        "url": "",
        "email": "treba@silentundo.org",
        "sameAs": "https://github.com/treba123"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["susi_cognition_000.json"],
      "name": "susi",
      "headline": "Chat with Susi",
      "alternativeHeadline": "Ask Susi Your Queries",
      "applicationCategory": "Susi API",
      "applicationSubCategory": "Text Retrieval",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Damini Satya",
        "email": "daminisatya@gmail.com",
        "url": "https://github.com/daminisatya",
        "sameAs": "https://github.com/daminisatya"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/suggest.json"],
      "name": "querybrowser",
      "headline": "Query Browser",
      "alternativeHeadline": "list all queries made in loklak",
      "applicationCategory": "Suggestion Search",
      "applicationSubCategory": "Text Retrieval",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Anshuman Agarwal",
        "url": "https://github.com/anshuman73",
        "sameAs": "https://github.com/anshuman73"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/search.json"],
      "name": "social-wall",
      "headline": "Twitter Social Wall",
      "alternativeHeadline": "A loklak API based twitter social-wall",
      "applicationCategory": "Tweet Search",
      "applicationSubCategory": "data aggregation",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Sopan Khosla",
        "email": "khoslasopan@gmail.com",
        "url": "https://in.linkedin.com/pub/sopan-khosla/99/199/563",
        "sameAs": "https://github.com/sopu"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/search.json"],
      "name": "sentimentVisualizer",
      "headline": "Sentiment Visualizer",
      "alternativeHeadline": "Tool for visualizing the sentiment of a tweet",
      "applicationCategory": "Search API",
      "applicationSubCategory": "Text Retrieval",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Damini Satya",
        "email": "daminisatya@gmail.com",
        "url": "https://github.com/daminisatya",
        "sameAs": "https://github.com/daminisatya"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/resetpassword.json"],
      "name": "resetpass",
      "headline": "Reset your Loklak Password",
      "alternativeHeadline": "Reset Password",
      "applicationCategory": "Accounts API",
      "applicationSubCategory": "account operations",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Shiven Mian",
        "url": "http://shivenmian.herokuapp.com",
        "email": "shiven15094@iiitd.ac.in",
        "sameAs": "https://github.com/shivenmian"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/search.json"],
      "name": "yathannsh",
      "headline": "loklak search page",
      "alternativeHeadline": "work from GCI task",
      "applicationCategory": "Message Search",
      "applicationSubCategory": "Text Retrieval",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Yathannsh Kulshrestha",
        "email": "yathannsh@gmail.com",
        "url": "http://yathannsh.com",
        "sameAs": "https://github.com/yathannsh"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": [
        "/api/status.json",
        "/api/suggest.json",
        "/api/search.json",
        "/api/peers.json",
        "/api/hello.json",
        "/api/settings.json",
        "/api/threaddump.txt",
        "/api/NMEA.txt"
      ],
      "name": "NMEA",
      "headline": "GPS Device Tracking",
      "alternativeHeadline": "Tracking GPS NMEA Data using Loklak and OpenStreetMaps",
      "applicationCategory": "Internet Of Things",
      "applicationSubCategory": "GPS",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Sudheesh Singanamalla",
        "email": "sudheesh95@gmail.com",
        "url": "https://github.com/sudheesh001",
        "sameAs": "https://github.com/sudheesh001"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": [
        "/api/search.json",
        "/api/user.json"
      ],
      "name": "userprofile",
      "headline": "User Profile Page",
      "alternativeHeadline": "A user profile visualization using loklak",
      "applicationCategory": "Users API",
      "applicationSubCategory": "Text Retrieval",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Sudheesh Singanamalla",
        "email": "sudheesh95@gmail.com",
        "url": "https://sudheesh.info/",
        "sameAs": "https://github.com/sudheesh001"
      }
    }
  ],
  "categories": [
    "Accounts API",
    "Peers API",
    "About Project",
    "Tweets Analytics",
    "Demo",
    "Message Search",
    "Users API",
    "Message Visualizer",
    "Generic Scraper API",
    "Susi API",
    "Suggestion Search",
    "Tweet Search",
    "Search API",
    "Internet Of Things"
  ],
  "category": {
    "Accounts API": [
      "forgotpassword",
      "loginpage",
      "accountpermissions",
      "signup",
      "keyRegistration",
      "resetpass"
    ],
    "Peers API": ["oneClickDeploy"],
    "About Project": [
      "applist",
      "LQL"
    ],
    "Tweets Analytics": ["fossasia-histogram"],
    "Demo": [
      "boilerplate",
      "barchart",
      "tweetfeed",
      "superwoman7",
      "bubblecharts"
    ],
    "Message Search": [
      "yasoob",
      "knowTheDiff",
      "ducphanduy",
      "yathannsh"
    ],
    "Users API": [
      "tweetsleaderboard",
      "userprofile"
    ],
    "Message Visualizer": ["histogram"],
    "Generic Scraper API": ["WebScraper"],
    "Susi API": ["susi"],
    "Suggestion Search": ["querybrowser"],
    "Tweet Search": ["social-wall"],
    "Search API": ["sentimentVisualizer"],
    "Internet Of Things": ["NMEA"]
  },
  "session": {"identity": {
    "type": "host",
    "name": "14.139.82.6",
    "anonymous": true
  }}
}


        $scope.categoryKeys = data.categories;
        $scope.apps = data.apps;
        $scope.categoryKeys.unshift('All');
    

    $scope.categoryFilter = function(event) {
        item = event.target.id;
        if (item != 'All') {
            itemName = item.match(/[A-Z][a-z]+/g);
            $('#categoryName')[0].innerHTML = itemName.join(" ");
            $('div.span2').hide();
            qConstruct = 'div.span2#'+item;
            $(qConstruct).show();
            event.stopImmediatePropagation();
        }
        else {
            $('#categoryName')[0].innerHTML = 'Loklak Apps';
            $('div.span2').show();
        }
    }
});

app.filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
});
