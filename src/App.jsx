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
  const API_BASE_URL = "https://hn.algolia.com/api/v1/search?query=";
  
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
  
  const [stories, setStories] = useState([]);
  
  const getInitialSearchTerm = () => {
    const savedSearchTerm = localStorage.getItem("search");
    return savedSearchTerm || '';
  };
  
  const [searchTerm, setSearchTerm] = useState(getInitialSearchTerm);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState("");
  
  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      setUrl(API_BASE_URL + searchTerm);
    }
  };
  
  const handleRemoveStory = (storyToRemove) => {
    setStories(stories.filter((story) => story.objectID !== storyToRemove.objectID));
  };
  
  useEffect(() => {
    if (!url) return;
    
    const fetchStories = async () => {
      setIsLoading(true);
      setIsError(false);
      
      try {
        const response = await fetch(url);
        const data = await response.json();
        setStories(data.hits || []);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchStories();
  }, [url]);
  
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
      
      <form onSubmit={handleSubmit}>
        <InputWithLabel
          id="search"
          type="text"
          value={searchTerm}
          onInputChange={handleSearch}
        >
          <strong>Search:</strong>
        </InputWithLabel>
        <button type="submit" disabled={!searchTerm}>
          Submit
        </button>
      </form>
      
      {isError && <p style={{ color: 'red' }}>Something went wrong. Please try again later.</p>}
      
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List stories={stories} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
};

export default App;