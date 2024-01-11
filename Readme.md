## AWS Console Step Function Execution page error

The AWS Step Function Console generates an "Invalid time" error when the user starts a new 
execution and the browser is directed to the execution session monitoring page. The first time 
you execute a step function it works fine, but if you click the New Execution button and run 
it again with the same input you just get a white screen and the Chrome console displays a 
"Range error: Invalid time value" error.  The reason is the New execution page directs 
the browser to a new page where the date at the end of the URL is in text format:

`...?startDate=Thu Jan 11 2024 10:06:30 GMT-0800 (Pacific Standard Time)`

when it should be as a long integer (milliseconds since epoch):

`...?startDate=1704996552000`

This extension polls the current URL every 1.5 seconds and if it detects the text format it converts
the text date to a long integer and reloads the page.

Note: Be sure to change line 9 of the manifest.json file to match the region your step
function is using.
