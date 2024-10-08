var classObject = {
  coursenum: "N220",
  coursetitle: "Introduction to Media Application Development)",
  totalseats: 20,
  enrolled: 18,
  availability: function () {
    return this.totalseats - this.enrolled > 0;
  },
};

console.log(
  "Print out whether there are seats available in the console:",
  classObject.availability()
);

console.log(
  "Two more students enroll. total enrolled:",
  (classObject.enrolled += 2)
);

console.log(
  "Print out whether there are seats available in the console:",
  classObject.availability()
);
