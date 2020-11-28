var Mark;
(function (Mark) {
    Mark["one"] = "A";
    Mark["two"] = "2";
    Mark["three"] = "3";
    Mark["four"] = "4";
    Mark["five"] = "5";
    Mark["six"] = "6";
    Mark["seven"] = "7";
    Mark["eight"] = "8";
    Mark["nine"] = "9";
    Mark["ten"] = "10";
    Mark["Jack"] = "J";
    Mark["Queen"] = "Q";
    Mark["King"] = "K";
})(Mark || (Mark = {}));
var Color;
(function (Color) {
    Color["heitao"] = "\u9ED1\u6843";
    Color["hongtao"] = "\u2665";
    Color["fangkuai"] = "\u2666";
    Color["meihua"] = "\u2663";
})(Color || (Color = {}));
function getPaker() {
    const deck = [];
    const mark = Object.keys(Mark);
    const color = Object.keys(Color);
    for (let ele of mark) {
        for (let key of color) {
            deck.push({
                mark: Mark[ele],
                color: Color[key]
            });
        }
    }
    return deck;
}
function showDeck() {
    let deck = getPaker();
    let rosult = "\n";
    deck.forEach((ele, i) => {
        let str = ele.mark + ele.color;
        rosult += str + "\t";
        if ((i + 1) % 4 === 0) {
            rosult += "\n";
        }
    });
    return rosult;
}
console.log(showDeck());
