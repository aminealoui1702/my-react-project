import React, { useState, useEffect } from 'react';

const courseTitle = "React Development Bootcamp";

const InputWithLabel = ({ id, type = "text", value, onInputChange, children }) => (
  <div>
    <label htmlFor={id}>{children}</label>
    <input 
      id={id}
      type={type}
      value={value}
      onChange={onInputChange}
    />
  </div>
);

const Header = () => (
  <header>
    <h1>Hacker News Reader</h1>
  </header>
);

const Item = ({ story, onRemoveItem }) => (
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
    <button onClick={() => onRemoveItem(story)}>
      Dismiss
    </button>
  </div>
);

const List = ({ stories, onRemoveItem }) => (
  <div>
    {stories.map((story) => (
      <Item key={story.objectID} story={story} onRemoveItem={onRemoveItem} />
    ))}
  </div>
);

const App = () => {
  const initialStories = [
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
  
  const [stories, setStories] = useState(initialStories);
  
  const getInitialSearchTerm = () => {
    const savedSearchTerm = localStorage.getItem("search");
    return savedSearchTerm || '';
  };
  
  const [searchTerm, setSearchTerm] = useState(getInitialSearchTerm);
  
  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleRemoveStory = (storyToRemove) => {
    setStories(stories.filter((story) => story.objectID !== storyToRemove.objectID));
  };
  
  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const studentName = "mohamed amine aloui";
  
  const student = {
    name: "mohamed amine aloui",
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
      
      <InputWithLabel
        id="search"
        type="text"
        value={searchTerm}
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      
      <List stories={filteredStories} onRemoveItem={handleRemoveStory} />
    </div>
  );
};

export default App;