require('dotenv').config();

const butter = require('buttercms')(process.env.BUTTER_API_TOKEN);

// WORKING
butter.page.retrieve('education_course_page', 'pellegrino-education-hundreds-page', { levels: 5, locale: 'en' }).then(function(resp) {
 console.log('With Page Type: ', Object.keys(resp.data.data.fields));
});

// // NOT WORKING
butter.page.retrieve('*', 'pellegrino-education-hundreds-page', { levels: 5, locale: 'en' }).then(function(resp) {
    console.log('Without Page Type: ', Object.keys(resp.data.data.fields));
});