1) Figure out how to make Axios AJAX with vaild API key. My schema is correct it's just not working lmao.
2) Refactor using environment variables
3) Refactor creating an axios instance
4) Import the instance into App component and pass down the function using the props system and onSubmit event handler. 
5) Create two other components (Video list and single video).

    To do for Video List:
        1)After passing the videolist through props from the App component, map through it and return an array video elements. 
        2)The video elements should be created using Video Item component 
        3) Set the react components src prop to the value of youtube video src.  

    To do Video Item:
        1) Create a react component which returns video elements.
        2) Pass props as the first argument to that react component
        3) Set src to props.src