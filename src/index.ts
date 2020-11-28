type Poker = {
    mark: Mark,
    color: Color
}
// type Color = "♠" | "♥" | "♣" | "♦"
enum Mark{
    one ="A",
    two ="2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    seven ="7",
    eight = "8",
    nine ="9",
    ten = "10",
    Jack = "J",
    Queen = "Q",
    King = "K"
}
enum Color{
    heitao = "黑桃",
    hongtao = "♥",
    fangkuai = "♦",
    meihua = "♣"
}
type Deck = Poker[];

function getPaker(): Deck {
    const deck: Deck = [];
    const mark = Object.keys(Mark)
    const color = Object.keys(Color);
    for(let ele of mark){
        for(let key of color){
            deck.push({
                mark:Mark[ele],
                color:Color[key]
            })
        }
    }
    return deck;
}
function showDeck():string {
    let deck = getPaker();
    let rosult = "\n";
    deck.forEach((ele, i) => {
        let str = ele.mark+ele.color;
        rosult += str + "\t";
        if ((i + 1) % 4 === 0) {
            rosult += "\n"
        }
    });
    return rosult;
}
console.log(showDeck());