import React, { useState, useEffect } from 'react';

const courseTitle = "React Development Bootcamp";

const Item = ({ story }) => (
  <div>
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

const Header = () => (
  <header>
    <h1>Hacker News Reader</h1>
  </header>
);

const Search = ({ searchTerm, onSearch }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onSearch(value);
  };

  return (
    <div>
      <label htmlFor="search">Search Stories: </label>
      <input 
        id="search" 
        type="text" 
        placeholder="Search..." 
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

const List = ({ stories }) => (
  <div>
    {stories.map((story) => (
      <Item key={story.objectID} story={story} />
    ))}
  </div>
);

const App = () => {
  const [stories] = useState([
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
  ]);
  
  const getInitialSearchTerm = () => {
    const savedSearchTerm = localStorage.getItem("search");
    return savedSearchTerm || '';
  };
  
  const [searchTerm, setSearchTerm] = useState(getInitialSearchTerm);
  
  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);
  
  const handleSearch = (value) => {
    setSearchTerm(value);
  };
  
  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const studentName = "mohamed amine aloui";
  
  const student = {
    name: "mohmamed amine aloui",
    age: 21,
    track: "Frontend Development"
  };
  
  const sayHello = () => "Hello from React!";
  const welcomeMessage = () => "Welcome " + studentName + "!";
  const getStudentInfo = () => student.name + " is " + student.age + " years old";
  
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
      
      <hr />
      <Header />
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <List stories={filteredStories} />
    </div>
  );
};

export default App;