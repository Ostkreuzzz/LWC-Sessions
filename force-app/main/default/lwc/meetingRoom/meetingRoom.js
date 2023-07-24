import { LightningElement,api,wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReferance} from 'lightning/navigation'

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo;
    @api showRoom = false;
    @wire (CurrentPageReferance) pageReference;

    tileClickHandler(){
        const tileClicked = new CustomEvent('tileclick', {detail : this.meetingRoomInfo})
        this.dispatchEvent(tileClicked);
        fireEvent(this.pageReference, 'pubsubtileclick', this.meetingRoomInfo);
        }
}