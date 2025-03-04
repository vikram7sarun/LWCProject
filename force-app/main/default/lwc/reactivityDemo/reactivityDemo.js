import { LightningElement,track } from 'lwc';


export default class ReactivityDemo extends LightningElement 
{
   @track QASLOT = 
    {
        Session:"8PM",
        Timing : "8:00",
        Duration:"1 Hour"
    }

    handleChangeSlot(event)
    {
       this.QASLOT.Session = event.target.value
    }


}