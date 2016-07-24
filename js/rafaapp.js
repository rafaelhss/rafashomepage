
var app = angular.module("rafaApp", []);

app.controller("rafaCtrl", function ($scope) {
    $scope.info = getInfo();
    $scope.introText = getIntroText();
    $scope.things = getThings();
    $scope.contactText = getContactText();


});
function getContactText(){
    return "get in touch..."
}
function getThings() {
    var things = [];

    things.push(getThing("Whatsapp text to net",
        "Email a group chat history to zap@text2.net and get SNA metrics.",
        "fa-whatsapp", ""));

    things.push(getThing("Text to Net",
        "Social Network Analisys and Co-Word analysis tool",
        "fa-share-alt", "http://text2.net"));

    things.push(getThing("Published paper at 5th BraSNAM",
        "Formal Information Flows Among Top Authorities of the Brazilian Federal Government based on Co-word Analysis of Data Published in the Official Gazette",
        "fa-newspaper-o", "http://ebooks.pucrs.br/edipucrs/anais/csbc/assets/2016/brasnam/11.pdf"));

    things.push(getThing("Published paper on USP's InCID",
        "Exploratory analysis of the adoption of a Unified Entrance Examination by Federal Universities using Social Network Analysis based on open data",
        "fa-newspaper-o", "http://dx.doi.org/10.11606/issn.2178-2075.v7i1p181-200"));

    things.push(getThing("I am a Teacher",
        "At UniCEUB I teach 'Web Based Application Development'",
        "fa-graduation-cap", "Aulas"));

    things.push(getThing("I work at Central Bank of Brazil",
        "I coordinate the Software Integration and Reuse Team. We use Java and Natural/Adabas to connect financial institutions to the Brazilian Payments System",
        "fa-briefcase", "http://www.bcb.gov.br/sfn/ced/servicos.asp"));

    things.push(getThing("I am a researcher",
        "I am a member of the Research Group on Cooperative Inteligence in Complex Social Networks",
        "fa-flask", "http://dgp.cnpq.br/dgp/espelhogrupo/2334079961242970"));




    console.log(things);
    return things;

}

function getThing(title, text, icon, href) {
    var thing = [];
    thing.title = title;
    thing.text = text;
    thing.icon = icon;
    thing.href = href;

    return thing;
}


function getIntroText() {
    return "A few things i did (or do) intentionally...";
}

function getInfo() {
    var info = [];
    info.greeting = "hi, i'm";
    info.description = "Software Architect and Developer";
    return info;
}