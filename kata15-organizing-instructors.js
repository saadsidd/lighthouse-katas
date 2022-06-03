const organizeInstructors = function(instructors) {

  let temp = [];
  for (let obj of instructors) {
    // Get every single course name (including repeats)
    temp.push(obj.course);
  }

  // Create new array of unique course names only
  let courses = [...new Set(temp)];

  let obj = {};
  for (let course of courses) {
    for (let item of instructors) {
      // If a certain course key does not exist yet in obj, initialize it with empty array
      if (!obj[course]) {
        obj[course] = [];
      }
      // Then if instructor name matches a course, push into matching obj key array
      if (course === item.course) {
        obj[course].push(item.name);
      }
    }
  }
  return obj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));