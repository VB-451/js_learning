let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

styles.fill("«Классика»", styles.length / 2, styles.length / 2 + 1)

console.log(styles.shift());

styles.unshift("Рэп", "Регги");