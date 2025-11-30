
import { LightningElement } from 'lwc';
import common_backgroundimage from '@salesforce/resourceUrl/common_backgroundimage';

export default class CommonBackgroundPage extends LightningElement {
    backgroundStyle = `background-image: url(${common_backgroundimage});
                       background-size: cover;
                       background-position: center;
                       background-repeat: no-repeat;`;
}
