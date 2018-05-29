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

for (var i = 0; i < elements.length; i++) {
    var element4 = elements[i];

    for (var j = 0; j < element4.childNodes.length; j++) {
        var node4 = element4.childNodes[j];

        if (node4.nodeType === 3) {
            var text4 = node4.nodeValue;
            var textChange4 = text4.replace(/Intervencao Militar Ja/gi, '🌸🌸🌸🌸🌸🌸🌸');

            if (textChange4 !== text4) {
                element4.replaceChild(document.createTextNode(textChange4), node4);
            }
        }
    }
}

for (var i = 0; i < elements.length; i++) {
    var element5 = elements[i];

    for (var j = 0; j < element5.childNodes.length; j++) {
        var node5 = element5.childNodes[j];

        if (node5.nodeType === 3) {
            var text5 = node5.nodeValue;
            var textChange5 = text5.replace(/Intervencao Militar/gi, '🌼🌼🌼🌼🌼🌼🌼');

            if (textChange5 !== text5) {
                element5.replaceChild(document.createTextNode(textChange5), node5);
            }
        }
    }
}

for (var i = 0; i < elements.length; i++) {
    var element6 = elements[i];

    for (var j = 0; j < element6.childNodes.length; j++) {
        var node6 = element6.childNodes[j];

        if (node6.nodeType === 3) {
            var text6 = node6.nodeValue;
            var textChange6 = text6.replace(/Indiretas Já/gi, '🌻🌻🌻🌻🌻🌻🌻');

            if (textChange6 !== text6) {
                element6.replaceChild(document.createTextNode(textChange6), node6);
            }
        }
    }
}
