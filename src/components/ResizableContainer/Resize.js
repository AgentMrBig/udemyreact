
import $ from 'jquery';
import { findDOMNode } from 'react-dom';


const testFunc = () => {
    const el = findDOMNode()
    $( '#resizable' ).resizable({ ghost: true });

}


