import { LightningElement } from 'lwc';

export default class DataBindingCSS extends LightningElement {

   chooseStyle = "greyBackground";

   chooseStyle2;
   
   age;
   name;

   handleAge(event)
    {
    this.age = event.target.value
    }   

    handleEligibleClick(event)
    {
        if(this.age>18)
        {
            this.chooseStyle2 = "greenBackground";
            this.age = null;
            this.name = null;
        }
        else
        {
            this.chooseStyle2 = "redBackground";
            this.age = null;
            this.name =null;
        }
    }







    
}