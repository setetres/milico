var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element1 = elements[i];

    for (var j = 0; j < element1.childNodes.length; j++) {
        var node1 = element1.childNodes[j];

        if (node1.nodeType === 3) {
            var text1 = node1.nodeValue;
            var textChange1 = text1.replace(/Intervenção Militar Já/gi, '🌸🌸🌸🌸🌸🌸🌸');

            if (textChange1 !== text1) {
                element1.replaceChild(document.createTextNode(textChange1), node1);
            }
        }
    }
}

for (var i = 0; i < elements.length; i++) {
    var element2 = elements[i];

    for (var j = 0; j < element2.childNodes.length; j++) {
        var node2 = element2.childNodes[j];

        if (node2.nodeType === 3) {
            var text2 = node2.nodeValue;
            var textChange2 = text2.replace(/Intervenção Militar/gi, '🌼🌼🌼🌼🌼🌼🌼');

            if (textChange2 !== text2) {
                element2.replaceChild(document.createTextNode(textChange2), node2);
            }
        }
    }
}

for (var i = 0; i < elements.length; i++) {
    var element3 = elements[i];

    for (var j = 0; j < element3.childNodes.length; j++) {
        var node3 = element3.childNodes[j];

        if (node3.nodeType === 3) {
            var text3 = node3.nodeValue;
            var textChange3 = text3.replace(/Indiretas Já/gi, '🌻🌻🌻🌻🌻🌻🌻');

            if (textChange3 !== text3) {
                element3.replaceChild(document.createTextNode(textChange3), node3);
            }
        }
    }
}
