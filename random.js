class Random {
    
    static pick(list, count) {
        const picks = [];
        for (let i = 0; i < count; i++) {
            let randomIndex = Math.round(Math.random() * list.length) - 1;
            picks.push(list[randomIndex]);
        }
        return picks;
    }
    
    static color() {
        return "#" + Random.pick("0123456789ABCDEF", 6).join("");
    }
    
}