let age: number = 25;

function greet(name: string): string {
    return `Hello ${name}!`;
}

const numbers: number[] = [1, 2, 3, 4, 5];

function fetchData(callback: (data: string) => void) {
    setTimeout(() => callback("Data received"), 1000);
}

function formatValue(value: string | number): string | number {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value.toFixed(2);
    }
    return value
}
