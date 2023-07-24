import { LightningElement,track } from 'lwc';

export default class MeetingRooms extends LightningElement {

    @track selectedMeetingRoom;

    meetingRoomsInfo = [
        {roomName: 'A-01', roomCapasity :'12'},
        {roomName: 'A-02', roomCapasity :'16'},
        {roomName: 'A-03', roomCapasity :'12'},
        {roomName: 'B-01', roomCapasity :'5'},
        {roomName: 'B-02', roomCapasity :'10'},
        {roomName: 'B-03', roomCapasity :'20'}
    ]

    onTileSelectHandler(event){
        const meetingRoomInfo = event.detail;
        this.selectedMeetingRoom = meetingRoomInfo.roomName;
    }
}