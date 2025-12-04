function toSpongebobCase(text: string): string {
    return text
      .split("")
      .map((char) => (Math.random() > 0.5 ? char.toLowerCase() : char.toUpperCase()))
      .join("");
}

const input = "Warum kann der das nicht?";
const result = toSpongebobCase(input);

console.log(`Input:    "${input}"`);
console.log(`Result:   "${result}"`);
console.log("Randomized output generated.");
