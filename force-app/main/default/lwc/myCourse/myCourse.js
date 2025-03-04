import { LightningElement } from 'lwc';

export default class MyCourse extends LightningElement {

//Properties

 firstName = "Sarun";
 lastName  = "Vikram";
 days = 90;

 course = ["Admin","Apex","LWC","Integration"];
 qaSlot = {
    Session:"8 PM",
    Timing : "8:00",
    Duration:"1 Hour"
 }
isSlotAvailable = true;

//Methods

handleInput(event) //Event Listener
{
    this.firstName = event.target.value;
}

get fullName()
{
    return this.firstName+" "+this.lastName
}

get noOfCourseChosen(){

    return this.course.length;
}




}