const courseTitle = "React Development Bootcamp";

function App() {
  
  const studentName = "John Doe";
  
  const student = {
    name: "John Doe",
    age: 25,
    track: "Frontend Development"
  };
  
  function sayHello() {
    return "Hello from React!";
  }
  
  function welcomeMessage() {
    return "Welcome " + studentName + "!";
  }
  
  function getStudentInfo() {
    return student.name + " is " + student.age + " years old";
  }
  
  return (
    <div>
      <h1>My React Learning Lab</h1>
      
      <p>Student name: {studentName}</p>
      
      <p>Course name: {courseTitle}</p>
      
      <p>Welcome to {courseTitle}, {studentName}!</p>
      
      <form>
        <label htmlFor="nameInput">Enter your name:</label>
        <input type="text" id="nameInput" />
      </form>
      
      <h3>Student Information:</h3>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>
      
      <h3>Function Messages:</h3>
      <p>{sayHello()}</p>
      <p>{welcomeMessage()}</p>
      <p>{getStudentInfo()}</p>
      
    </div>
  );
}

export default App;
