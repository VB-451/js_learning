let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

if (styles.length % 2 !== 0){
    styles.splice((styles.length / 2) - 0.5, 1, "«Классика»");
} else {
    styles.splice((styles.length / 2), 0, "«Классика»");
}

console.log(styles.shift());

styles.unshift("Рэп", "Регги");