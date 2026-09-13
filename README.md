# Dev Stack

Dev Stack is a responsive React web application that helps developers explore different web development technologies and build their own technology stack. Users can browse technologies, view their details, and add or remove technologies from their personal stack.

## 🛠️ Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* DaisyUI
* React-Toastify
* JSON
* Vite

## ✨ Features

### 1. Explore Technologies

Browse different frontend, backend, database, and development tools with useful information such as category, difficulty, rating, and description.

### 2. Build Your Own Stack

Add your favorite technologies to **Your Stack** and easily remove individual technologies or clear the entire stack.

### 3. Responsive & Interactive UI

The application is responsive across mobile, tablet, and desktop devices, with toast notifications for actions such as adding, removing, and duplicate technologies.



## ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript.
It makes React code easier to read and write.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.
State is used to store and manage data that can change inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage state in a React component.
In this project, I used it to store the technologies added to **Your Stack**.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component renders.
It can be used to load data from an API or JSON file.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list.
It helps React update the list efficiently when something changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.
I used it to show **"Your stack is empty."** when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through **props**.
A child can send information back by calling a function passed from the parent as a prop.



### Live Project Link
[https://a5-dev-stack.netlify.app/]
