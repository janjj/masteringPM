var Game = Game || {};
Game.static.isWinner = {

    has9FieldsAround: function ($element) {
        console.log("test has9FieldsAround ", $element.get(0));
        var size = Game.static.getGameSize($element);
        var index = Game.static.getIndex($element);
        var color = Game.static.getColor($element);
        var $testElement = Game.static.getElementByIndex($element, index + 1);//rechts
        if (!$testElement || Game.static.getColor($testElement) != color) {
            return false;
        }
        $testElement = Game.static.getElementByIndex($element, index + size + 1);//rechts unten
        if (!$testElement || Game.static.getColor($testElement) != color) {
            return false;
        }
        $testElement = Game.static.getElementByIndex($element, index + size);//unten
        if (!$testElement || Game.static.getColor($testElement) != color) {
            return false;
        }
        $testElement = Game.static.getElementByIndex($element, index + size - 1);//unten links
        if (!$testElement || Game.static.getColor($testElement) != color) {
            return false;
        }
        $testElement = Game.static.getElementByIndex($element, index - 1);//links
        if (!$testElement || Game.static.getColor($testElement) != color) {
            return false;
        }
        $testElement = Game.static.getElementByIndex($element, index - size - 1);//links oben
        if (!$testElement || Game.static.getColor($testElement) != color) {
            return false;
        }
        $testElement = Game.static.getElementByIndex($element, index - size);//oben
        if (!$testElement || Game.static.getColor($testElement) != color) {
            return false;
        }
        $testElement = Game.static.getElementByIndex($element, index - size + 1);//rechts oben
        return !$testElement || Game.static.getColor($testElement) != color;
    },
    test: function ($element, color) {
        var size = Game.static.getGameSize($element);

        for (var i = 0; i < size * size; i++) {
            console.log("i", i);
            var $tmpElement = Game.static.getElementByIndex($element, i);
            if (!$tmpElement) {
                continue;
            }
            if (Game.static.isEdgeElement($tmpElement)) {
                continue;
            }
            if (Game.static.getColor($tmpElement) != color) {
                continue;
            }
            if (Game.static.isWinner.has9FieldsAround($tmpElement)) {
                return true;
            }
        }
        return false;
    }
};