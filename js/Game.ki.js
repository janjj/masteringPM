var Game = Game || {};
Game.ki = {
    botEasyProb: 25,	//--> 25% probability
    botModerateProb: 50,
    botHardProb: 75,

    botEnabled: "false",
    botDifficulty: "none",
    botColorId: -1,


    selectDifficulty: function (botName) {
        var difficulty;
        if (botName == "bot-1") {
            difficulty = 1;
        } else if (botName == "bot-2") {
            difficulty = Game.static.random(1, 2);
        } else if (botName == "bot-3") {
            difficulty = Game.static.random(1, 3);
        } else if (botName == "bot-4") {
            difficulty = Game.static.random(2, 3);
        } else {
            difficulty = 3;
        }
        return difficulty;
    },
    selectField: function ($element, botName) {
        // dort soll das nächste Feld ausgewählt werden, das angegriffen wird.

        if (botName == "bot-1") {
            return Game.ki.getOneAttackableField(Game.ki.getAllFields($element));
        } else if (botName == "bot-2") {
            return Game.ki.getOneAttackableField(Game.ki.getAllFields($element));
        } else if (botName == "bot-3") {
            return Game.ki.getOneAttackableField(Game.ki.getAllFields($element));
        } else if (botName == "bot-4") {
            return Game.ki.getOneAttackableField(Game.ki.getAllFields($element));
        } else {
            return Game.ki.getOneAttackableField(Game.ki.getAllFields($element));
        }
    },
    selectAnswer: function (botName, questionDifficulty) {
        //dort soll die passende Antwort ausgewählt werden.
        var rand = Game.static.random(100);
        var botActiv = 0;
        if (botName == "bot-1") {
            botActiv = 24;
        } else if (botName == "bot-2") {
            botActiv = 48;
        } else if (botName == "bot-3") {
            botActiv = 60;
        } else if (botName == "bot-4") {
            botActiv = 74;
        } else {
            botActiv = 98;
        }
        if (this.questionDifficulty == 1) {
            botActiv = botActiv + 25; //Bot-1 schafft es zu 49%; Bot-2 zu 73%; Bot-3 zu 85%, Bot-4 zu 98 und Bot-5 zu über 100%
        } else if (this.questionDifficulty == 2) {
            //Standart Einstellungen
        } else if (this.questionDifficulty == 3) {
            botActiv = botActiv - 15;
        }
        console.log("selectAnswer: Wahrscheinlichkeit: " + botActiv + " Fragen Schwierigkeit: " + questionDifficulty);
        if (Game.static.random(0, 100) <= botActiv) {
            console.log("bot hat es gewust");
            return 1; //Gibt 1 Zurück falls die Antwort richtig ist.
        } else {
            console.log("BOT hat verloren");
            return 0;
        }
    },
    getAllFields: function ($element) {
        var color = Game.static.getColor($element);
        var size = Game.static.getGameSize($element);
        var Fields = [];

        for (var i = 0; i <= size * size - 1; i++) {
            var $tmpElement = Game.static.getElementByIndex($element, i);
            if (color == Game.static.getColor($tmpElement)) {
                Fields.push($tmpElement);
            }
        }

        return Fields;
    },
    getOneAttackableField: function ($array) {
        $array = Game.static.shuffle($array);
        var $randomElement = $array.pop();
        var nearbyElements = Game.static.getNearbyElements($randomElement); //////is not a Function!!!!!
        if (nearbyElements.length != 0) {
            nearbyElements = Game.static.shuffle(nearbyElements);
            return [$randomElement, nearbyElements.pop()];
        }

        else return Game.ki.getOneAttackableField($array);
    }
};
