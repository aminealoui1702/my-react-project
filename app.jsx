


const courseTitle = "React Development Bootcamp";

function App() {
  
  const studentName = "mohamed amine aloui";
  
  const student = {
    name: "mohmamed amine aloui",
    age: 21,
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
const stories = [
  {
    objectID: 1,
    title: "React Hooks Explained",
    url: "https://react.dev/hooks",
    author: "dan_abramov",
    points: 342,
    num_comments: 56
  },

  {
    objectID: 2,
    title: "Understanding the Virtual DOM",
    url: "https://react.dev/virtual-dom",
    author: "react_team",
    points: 178,
    num_comments: 24
  },
  {
    objectID: 3,
    title: "CSS Grid vs Flexbox",
    url: "https://css-tricks.com/grid-vs-flexbox",
    author: "css_expert",
    points: 156,
    num_comments: 43
  }
];

function Header() {
  return (
    <header>
      <h1>Hacker News Reader</h1>
    </header>
  );
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search Stories: </label>
      <input id="search" type="text" placeholder="Search..." />
    </div>
  );
}

function List() {
  return (
    <div>
      {stories.map(function(story) {
        return (
          <div key={story.objectID}>
            <h3>
              <a href={story.url} target="_blank" rel="noopener noreferrer">
                {story.title}
              </a>
            </h3>
            <p>
              <span>Author: {story.author}</span> | 
              <span> Points: {story.points}</span> | 
              <span> Comments: {story.num_comments}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

function App2() {
  return (
    <div>
      <Header />
      <Search />
      <List />
    </div>
  );
}

export default App;