export default function Arrays() {

  // LAB 5-1: Default parameters & function return
  function greetUser(name: string, title: string = "mr/mrs"): string {
    return "Hello, " + title + " " + name;
  }

  type Operation = (a: number, b: number) => number;

  const add: Operation = (a, b) => a + b;
  const multiply: Operation = (a, b) => a * b;

  // LAB 6: Functions with return types
  function calSqua(n: number): number {
    return n * n;
  }

  function evenOrOdd(num: number): string {
    return num % 2 === 0 ? "even" : "odd";
  }

  // LAB 7: Optional parameters
  function greetuser1(id: number, nam: string, title?: string): string {
    return title
      ? "hello " + id + " " + nam + " " + title
      : "hello " + id + " " + nam;
  }

  const addNumbers = (n1: number, n2: number): number => n1 + n2;

  // LAB 8: Object types
  type Point = {
    x: number;
    y: number;
  };

  const p: Point = { x: 5, y: 8 };

  // LAB 9: Literal types
  type Direction = "up" | "down" | "left" | "right";

  function move(direction: Direction): void {
    alert("Moving " + direction);
  }

  function formatValue(value: string | number): string {
    return typeof value === "string"
      ? value.toUpperCase()
      : Math.round(value).toString();
  }

  // LAB 10.1: Interface with readonly & optional
  interface User {
    readonly id: number;
    name: string;
    age?: number;
  }

  const user1: User = {
    id: 100,
    name: "kiran",
    age: 21
  };

  user1.name = "vishnu";
  user1.age = 23;

  // LAB 10.2: Interface with functions
  interface Calculator {
    add(a: number, b: number): number;
    multiply(a: number, b: number): number;
  }

  const calculator: Calculator = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b
  };

  const sum = calculator.add(5, 3);
  const product = calculator.multiply(5, 3);

  // LAB 11: Interface with arrays
  interface Student {
    name: string;
    marks: number;
  }

  type StudentList = Student[];

  const students: StudentList = [
    { name: "vishnu", marks: 85 },
    { name: "Kiran", marks: 90 },
    { name: "Ravi", marks: 78 }
  ];

  // LAB 12: Type vs Interface
  type PointType = {
    x: number;
    y: number;
  };

  interface PointInterface {
    x: number;
    y: number;
  }

  function printPoint1(point: PointType | PointInterface): string {
    return `X: ${point.x}, Y: ${point.y}`;
  }

  const p1: PointType = { x: 10, y: 20 };
  const p2: PointInterface = { x: 5, y: 8 };

  return (
    <div>
      <h1>Lab5</h1>
      <p>{greetUser("vishnu")}</p>
      <p>{greetUser("vardhan", "Mr.")}</p>
      <p>Add Result: {add(5, 3)}</p>
      <p>Multiply Result: {multiply(5, 3)}</p>

      <h3>Lab6</h3>
      <p>Square of Number: {calSqua(10)}</p>
      <p>Even or Odd: {evenOrOdd(24)}</p>

      <h3>Lab7</h3>
      <p>{greetuser1(12, "vishnu", "vardhan")}</p>
      <p>Add Numbers: {addNumbers(23, 687)}</p>

      <h3>Lab8</h3>
      <p>Point X: {p.x}</p>
      <p>Point Y: {p.y}</p>

      <h3>Lab9</h3>
      <button onClick={() => move("up")}>Up</button>
      <button onClick={() => move("down")}>Down</button>
      <button onClick={() => move("left")}>Left</button>
      <button onClick={() => move("right")}>Right</button>

      <p>{formatValue("react")}</p>
      <p>{formatValue(7.3)}</p>

      <h3>Lab10</h3>
      <p>ID: {user1.id}</p>
      <p>Name: {user1.name}</p>
      <p>Age: {user1.age}</p>

      <h3>Calculator</h3>
      <p>Add Result: {sum}</p>
      <p>Multiply Result: {product}</p>

      <h3>Lab11</h3>
      {students.map((student, index) => (
        <p key={index}>
          Name: {student.name} | Marks: {student.marks}
        </p>
      ))}

      <h3>Type vs Interface</h3>
      <p>{printPoint1(p1)}</p>
      <p>{printPoint1(p2)}</p>
    </div>
  );
}
