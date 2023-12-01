// developing by javascript

// const heading = document.createElement('h1');
// heading.innerHTML = "Hello by javascript";
// const root = document.querySelector("#root");
// root.appendChild(heading);

const heading = React.createElement('h1' ,{id:"heading"} , 'Hello from react ❤️');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

// react notes :-
// react always works under thier root Element
// if before anything in root ex(h1,div) it will replace with react Element which we pass here in root.render
// React.createElement('h1' ,{id:"heading"} , 'Hello from react') -> it take 3 parameter like which 
// 1 tag/div/section , 
// 2 object which takes id and so other things, 
// and 3rd one is what we want to do inside the tag
// we create very complex html sturcture is passing 3rd argument in Array[] but code will be make very messy
// for reduce this essyness we have JSX
