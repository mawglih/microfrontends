import  { mount as mount1} from 'app1/App1Index';
import { mount as mount2 } from 'app2/App2Index';

mount1(document.querySelector('#my-cell1'));
mount2(document.querySelector('#my-cell2'))