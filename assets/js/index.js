
import { header } from './utils/header.js'


import { form } from './utils/form.js'
import { map } from './utils/map.js'
import { slider } from './utils/slider.js'
import { wow } from './utils/wow.js'
window.addEventListener('DOMContentLoaded', () => {
    try {
       
        header();
        wow();

   
        form();
        map();
        slider();
    } catch (error) {
        console.error(error)
    }
})