let temp = {
    title:'Indecision APP',
    subtitle:'Fuck Off',
    "options":[
        'One',
        'Two'
    ]
}
let template = (
    <div>
        <hr />
        <center>
        <h1> {temp.title}</h1>
        {temp.subtitle? <p>{temp.subtitle}</p>:undefined} 
        <p>{temp.options.length>0?'Heres your options':'No options available'}</p>
        </center>
        <hr />
    </div>
    );

let name = 'TEST'
let templateTwo=(
    <div>
        <h1>{name}</h1>
        <p>Age:28</p>
        <p><b>location:</b> cairo</p>
        {null}
    </div>);
    
let app = document.getElementById('app')
ReactDOM.render(template,app)

console.log('ddd')