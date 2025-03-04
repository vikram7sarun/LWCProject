import { LightningElement,track } from 'lwc';

export default class ConditionalRendering extends LightningElement 
{
isShoppingChoosen=false;   
isReadingChoosen=false;

handleShoppingChange(event)
{
this.isShoppingChoosen = event.target.checked;
this.isReadingChoosen = false;
console.log(`Shopping : ${this.isShoppingChoosen}`)
this.template.querySelector(".readCheck").checked = false;
}

handleReadingChange(event)
{
this.isReadingChoosen = event.target.checked;
this.isShoppingChoosen=false;
console.log(`Reading : ${this.isReadingChoosen}`)
this.template.querySelector(".shopCheck").checked = false;
}

}