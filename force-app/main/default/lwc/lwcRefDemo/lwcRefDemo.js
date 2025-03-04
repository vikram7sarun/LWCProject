import { LightningElement } from 'lwc';

export default class LwcRefDemo extends LightningElement 
{

    age;
    name;

    handleAgeChange(event)
    {
        this.age = event.target.value;
    }

    handleEligibleCheck(event)
    {
        if(this.age>18)
        {
            this.refs.refEligible.innerText = "Eligible for DRIVING!!!";
            this.age = null;
            this.name = null;
        }
        else
        {
            this.refs.refEligible.innerText = "Not Eligible for DRIVING!!!";
            this.age = null;
            this.name = null;
        }
    }


}