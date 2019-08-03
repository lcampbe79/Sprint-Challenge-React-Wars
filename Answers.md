# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

--React makes web apps faster by rendering the screen only when it's able to see the changes in state. React knows the change in state by using a setter function that we call once we call the setter function inside the useEffect hook.

2. What does it mean to think in react?

--To think in React means that you have to think in functions instead of classes (at least with hooks-useState). You break the app down into separate components so you can pass data around easier.

3. Describe state.

--State is an object component that you are able to change and make dynamic .

4. Describe props.

--Props (properties) are set from the parent, used like a parameter, you are then able to pass the props into a function (parent to child) so you can share the data between components.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

--Side effects are anything that's unpredictable that happens by using outside data or outside the scope of a function. You sync effects by using useEffect inside a component, usually inside App.js or wherever you do you axios call. Once you console.log the response you then create a variable and a setter function to hold that data in state (useState), the you can pass it as a prop.
