function customRender(reactElement, container){
    /*
    const domElement= document.createElement(reactElement.type)  //Create a DOM element of type <a> or any other type specified in reactElement.type

    domElement.innerHTML=reactElement.Children;
    domElement.setAttribute('href',reactElement.props.href);  //Set the href attribute of the <a> element
    domElement.setAttribute('target',reactElement.props.target); //Set the target attribute of the <a> element

    container.appendChild(domElement);  //Append the created DOM element to the container
    */
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.Children;
    for (const prop in reactElement.props) {
           if(prop==='Children') continue; // Skip the Children property as it is already handled
           domElement.setAttribute(prop, reactElement.props[prop]);  //Here prop is the key and reactElement.props[prop] is the value
    }

    container.appendChild(domElement);  //Append the created DOM element to the container
    

}

//This is how react looks at any element/component when it is rendered(reactElement)
const reactElement={
    type:'a',
    props:{
        href:'https://www.example.com',
        target:'_blank'
    },
    Children:'Click here to visit google'
}
//Here we use customRender to render the custom React element into the main container
const mainContainer=document.getElementById('root');

customRender(reactElement, mainContainer);   // customRender is a function that will render the reactElement into the mainContainer