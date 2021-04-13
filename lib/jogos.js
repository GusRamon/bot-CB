function compor() {

    var paraCompor = "joao";
    var aux = paraCompor.length;
    var textAux = "";

    for (i = 1; i <= aux; i++) {
        if (paraCompor.substring(i - 1, i) != " ") {
            textAux = textAux + "\n" + paraCompor.substring(0, i);
        }
    }

    return textAux;
}

exports.compor = compor();