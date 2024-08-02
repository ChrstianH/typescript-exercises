let employee: [number, string, string, number][] = [];

employee.push([1, "Neil Armstrong", "Purchasing Department", 15000]);
employee.push([2, "Buzz Aldrin", "Sales Department", 15000]);
employee.push([3, "Charles Conrad", "Controlling", 15000]);
employee.push([4, "Alan Bean", "IT", 15000]);
employee.push([5, "Alan Shepard", "Managing Director", 20000]);

employee.forEach((emp) => {
  console.log(emp);
});
