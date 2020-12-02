require('dotenv').config();
const butter = require('buttercms')(process.env.BUTTER_API_TOKEN);
const expectedFields = ['hero', 'ticker_duration', 'intro_text', 'how_weve_helped', 'accordion', 'important_dates', 'video', 'what_members_say','blockquote', 'learn_more_delete', 'cohort_stats_delete', 'the_story_delete' ]

test("Make sure we get matched response from butterCMS using the butter client with wildcard page type", async () => {
    await butter.page.retrieve('*', 'pellegrino-education-hundreds-page', { levels: 5, locale: 'en' }).then(res => {
        return expect(Object.keys(res.data.data.fields)).toEqual(expectedFields);
    });
    
});

test("Make sure we get matched response from butterCMS using the butter client with specified page type", async () => {
    await butter.page.retrieve('education_course_page', 'pellegrino-education-hundreds-page', { levels: 5, locale: 'en' }).then(res => {
        return expect(Object.keys(res.data.data.fields)).toEqual(expectedFields);
    });
});