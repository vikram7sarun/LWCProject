import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement 
{

    fruits = ["Apple🍎","Orange🍊","Mango🥭","Banana🍌"]

    students = [
        {
            id:1, name:"Vikram",grade:"A"
        },
        {
            id:2, name:"Sarun",grade:"B"
        },
        {
            id:3, name:"Zayn",grade:"A+"
        }
    ]
    
    employees = [
        { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'IT' },
        { id: 2, name: 'Jane Smith', position: 'Project Manager', department: 'Operations' },
        { id: 3, name: 'Michael Johnson', position: 'UX Designer', department: 'Design' }
    ];


    


}