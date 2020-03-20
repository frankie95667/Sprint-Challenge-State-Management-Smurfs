1. What problem does the context API help solve?
    - Context API prevents prop drilling by setting up a exported provider which holds the state needed to be accessed by other components. This prevents unecessary compute cycles from prop drilling. It also solves the problem of not being able to pass component state up to their parent component. 
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - actions: functions that usually performs some action before returning an an object with type, and sometimes a payload. It returns the dispatch arguments, or calls dispatch function depending if you are using middleware.
    - reducers: returns a copy of the state after dispatch is called with the type included in the dispatch call.
    - store: This is the single global state and is immuatable, which is why it's called a single source of truth. 
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - application state is a global state accessible by any of the components in the application, and component state is only kept in a single component and can only be passed down to nested components as a prop.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - redux-thunk is a redux middleware that gives us access to dispatch in the action creator function so we can dispatch with different types and data depending on the results. Can be written like the following
        ```const foo = () => dispatch => {

        }```
1. What is your favorite state management system you've learned and this sprint? Please explain why!
    - I would say redux is my favorite state manaement because of the tools availble for debugging and the versatility when using middleware. Also, it still gives you the ability to reuse compoents, unlike Context API. 
