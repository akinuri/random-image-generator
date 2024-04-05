class Random {

    static pick(list, count = 1) {
        let picks = [];
        for (let i = 0; i < count; i++) {
            let randomIndex = Math.round(Math.random() * (list.length - 1));
            picks.push(list[randomIndex]);
        }
        if (count == 1) {
            picks = picks[0];
        }
        return picks;
    }

    static color() {
        return "#" + Random.pick("0123456789ABCDEF", 6).join("");
    }

}