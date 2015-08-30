function getMeMsg2(): void {
    var deck2 = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            //使用lambda表达式去捕捉this的用法
            return () => {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                console.log(this.suits[pickedSuit]);
                console.log(pickedCard % 13);

                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            }
        }
    }

    var cardPicker2 = deck2.createCardPicker();
    var pickedCard2 = cardPicker2();
    
    alert("card2: " + pickedCard2.card + " of " + pickedCard2.suit);
}


var suits = ["hearts", "spades", "clubs", "diamonds"];

function getThisMsgs1(): void {
    function pickCard1(x): any {
        //判断这个x 是不是object/array
        if (typeof x == "object") {
            var pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        } else if (typeof x == "number") {
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }

    var myDeck1 = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 },
        { suit: "hearts", card: 4 }];
    var pickedCard1 = myDeck1[pickCard1(myAdd1)];

}