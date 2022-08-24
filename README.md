# GoogleApps
Holds code for my google sheets and docs apps

## Sheets

### Weight Diary

Say 22.08.2022

I found that performance lagged because Sheets was calling a JavaScript function 100s of times, apparently from the internet, and not caching it. I could not make a static function, although some threads say you can by using a class. That is all fine, but how do you call a class static. If you call it via a non-class function, you are surely still new-ing up the helper function? I didn't bother testing that last point because...

From a performance point of view, VLookup is the way to go. This of course depends on your use-case. For me, it is perfect, because even taking increments of 0.25lb between say 10 and 14 stone, a vlookup that converts stones and lbs to kilos, contains a couple of hundred at most. It also avoids (presumably) getting out to the internet every time vlookup is accessed?

For the vlookup setup, see the YouTube video here: https://www.youtube.com/watch?v=KXJtYveBOj0

24.08.2022

I had a nag that the above was not the end, as I had not checked how the use of a range affects performance.
For say 500 rows, turns out it is definitely fast enough.

Somewhat stuttery repetitive demo here:

https://youtu.be/oQdz4LGTd_A




