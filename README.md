# React + Vite

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
</head>
<body>

   <header>
        <h1>To-Do App</h1>
        <p>A simple, responsive To-Do List application built with React and Vite. Manage your tasks with ease.</p>
    </header>

  <section>
        <h2>Features</h2>
        <ul>
            <li>Add, edit, and delete tasks</li>
            <li>Each task is represented with a <code>ToDoItem</code> component</li>
            <li>Tasks are added through the <code>ToDoForm</code> component</li>
            <li>All tasks are listed in the <code>ToDoList</code> component</li>
            <li>Responsive design and simple CSS styling</li>
        </ul>
    </section>

  <section>
        <h2>Installation Instructions</h2>
        <p>Follow these steps to get the project up and running locally:</p>
        <ol>
            <li>Clone the repository to your local machine: 
                <pre>git clone https://github.com/your user name/t0-do-react-app.git</pre>
            </li>
            <li>Navigate to the project directory: 
                <pre>cd t0-do-react-app</pre>
            </li>
            <li>Install project dependencies: 
                <pre>npm install</pre>
            </li>
            <li>Run the development server: 
                <pre>npm run dev</pre>
            </li>
            <li>Visit the app in your browser at: 
                <a href="http://localhost:5173" target="_blank">http://localhost:5173</a></li>
        </ol>
    </section>

    <section>
        <h2>Folder Structure</h2>
        <p>The folder structure of the project is as follows:</p>
        <pre>
t0-do-react-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ToDoForm.jsx
│   │   ├── ToDoItem.jsx
│   │   └── ToDoList.jsx
│   ├── App.jsx
│   └── main.js
├── package.json
└── vite.config.js
        </pre>
    </section>

   <section>
        <h2>How It Works</h2>
        <p>This application consists of three main components:</p>
        <ul>
            <li><strong>ToDoForm.jsx:</strong> Handles user input and adds new tasks</li>
            <li><strong>ToDoItem.jsx:</strong> Displays individual tasks with edit and delete functionality</li>
            <li><strong>ToDoList.jsx:</strong> Lists all tasks and allows interaction with each task</li>
        </ul>
        <p>The state of tasks is managed in <code>App.jsx</code>, and Vite is used for fast development with React.</p>
    </section>

  <section>
        <h2>Technologies Used</h2>
        <ul>
            <li><strong>React:</strong> JavaScript library for building user interfaces</li>
            <li><strong>Vite:</strong> Next-generation front-end tooling for a fast and optimized build</li>
            <li><strong>CSS:</strong> Simple styling for the app's interface</li>
        </ul>
    </section>

  <section>
        <h2>Contact</h2>
        <p>If you have any questions or feedback, feel free to reach out:</p>
        <ul>
            <li>Email: <a href="mailto:sk93040bharti@gmail.com">sk93040bharti@gmail.com</a></li>
            <li>GitHub: <a href="https://github.com/sonamkavi/t0-do-react-app">https://github.com/sonamkavi/t0-do-react-app</a></li>
        </ul>
    </section>

  <footer>
        <p>&copy; 2024 Sonam Kumari. All rights reserved.</p>
  </footer>

</body>
</html>

