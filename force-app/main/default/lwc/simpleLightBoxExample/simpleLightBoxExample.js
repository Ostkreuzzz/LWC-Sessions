import { LightningElement } from 'lwc';
import SL from '@salesforce/resourceUrl/simplelightbox';
import { loadStyle,loadScript } from 'lightning/platformRecourceLoader';

export default class SimpleLightBoxExample extends LightningElement {

    slLoaded = false;
    
    renderCallback(){
        if(!this.slLoaded){
            Promise.all([
                loadStyle(this, SL + '/simplelightbox/dist/simpleLightbox.css'),
                loadScript(this, SL + '/simplelightbox/dist/simpleLightbox.js')
            ]).then(()=>{
                slLoaded = true;
            }).catch((error)=>{
                console.error('ERROR ', error)
            });
        }
    }
    openGallary(){
        SimpleLightBoxExample.open({
            items : []
        });

    }
}