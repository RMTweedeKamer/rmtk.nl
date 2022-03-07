// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import * as turbolinks from "turbolinks";
turbolinks.start();

import * as rails_ujs from "@rails/ujs";
if (!window._rails_loaded) {
    console.log("wrnl: " + window._rails_loaded)
    rails_ujs.start();
}
console.log("wrl: " + window._rails_loaded)

console.log('Vite ⚡️ Rails')


const channels = import.meta.globEager('./**/*_channel.js');

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


