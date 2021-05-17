# Date and time in JS
Let’s meet a new built-in object: Date. It stores the date, time and provides methods for date/time management.

For instance, we can use it to store creation/modification times, to measure time, or just to print out the current date.

## Creation

To create a new Date object call new Date() with one of the following arguments:

new Date()
Without arguments – create a Date object for the current date and time:

```javascript
let now = new Date();
alert( now ); // shows current date/time
```

new Date(milliseconds)
Create a Date object with the time equal to number of milliseconds (1/1000 of a second) passed after the Jan 1st of 1970 UTC+0.

```javascript
// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );
```

An integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp.

It’s a lightweight numeric representation of a date. We can always create a date from a timestamp using new Date(timestamp) and convert the existing Date object to a timestamp using the date.getTime() method (see below).

Dates before 01.01.1970 have negative timestamps, e.g.:

```javascript
// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert( Dec31_1969 );
```

new Date(datestring)
If there is a single argument, and it’s a string, then it is parsed automatically. The algorithm is the same as Date.parse uses, we’ll cover it later.

```javascript
let date = new Date("2017-01-26");
alert(date);
// The time is not set, so it's assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in
// So the result could be
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// or
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)
```

new Date(year, month, date, hours, minutes, seconds, ms)
Create the date with the given components in the local time zone. Only the first two arguments are obligatory.

-   The year must have 4 digits: 2013 is okay, 98 is not.
-   The month count starts with 0 (Jan), up to 11 (Dec).
-   The date parameter is actually the day of month, if absent then 1 is assumed.
-   If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.

For instance:

```javascript
new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default
```

The maximal precision is 1 ms (1/1000 sec):

```javascript
let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert( date ); // 1.01.2011, 02:03:04.567
```

## Setting date components

The following methods allow to set date/time components:

-   setFullYear(year, [month], [date])
-   setMonth(month, [date])
-   setDate(date)
-   setHours(hour, [min], [sec], [ms])
-   setMinutes(min, [sec], [ms])
-   setSeconds(sec, [ms])
-   setMilliseconds(ms)
-   setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)

Every one of them except setTime() has a UTC-variant, for instance: setUTCHours().

As we can see, some methods can set multiple components at once, for example setHours. The components that are not mentioned are not modified.

For instance:

```javascript
let today = new Date();

today.setHours(0);
alert(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
alert(today); // still today, now 00:00:00 sharp.
```

## Autocorrection

The autocorrection is a very handy feature of Date objects. We can set out-of-range values, and it will auto-adjust itself.

For instance:

```javascript
let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // ...is 1st Feb 2013!
```

Out-of-range date components are distributed automatically.

Let’s say we need to increase the date “28 Feb 2016” by 2 days. It may be “2 Mar” or “1 Mar” in case of a leap-year. We don’t need to think about it. Just add 2 days. The Date object will do the rest:

```javascript
let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

alert( date ); // 1 Mar 2016
```

That feature is often used to get the date after the given period of time. For instance, let’s get the date for “70 seconds after now”:

```javascript
let date = new Date();
date.setSeconds(date.getSeconds() + 70);

alert( date ); // shows the correct date
```

We can also set zero or even negative values. For example:

```javascript
let date = new Date(2016, 0, 2); // 2 Jan 2016

date.setDate(1); // set day 1 of month
alert( date );

date.setDate(0); // min day is 1, so the last day of the previous month is assumed
alert( date ); // 31 Dec 2015
```

## Date to number, date diff

When a Date object is converted to number, it becomes the timestamp same as date.getTime():

```javascript
let date = new Date();
alert(+date); // the number of milliseconds, same as date.getTime()
```

The important side effect: dates can be subtracted, the result is their difference in ms.

That can be used for time measurements:

```javascript
let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

alert( `The loop took ${end - start} ms` );
```

## Date.now()

If we only want to measure time, we don’t need the Date object.

There’s a special method Date.now() that returns the current timestamp.

It is semantically equivalent to new Date().getTime(), but it doesn’t create an intermediate Date object. So it’s faster and doesn’t put pressure on garbage collection.

It is used mostly for convenience or when performance matters, like in games in JavaScript or other specialized applications.

So this is probably better:

```javascript
let start = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done

alert( `The loop took ${end - start} ms` ); // subtract numbers, not dates
```

## Summary

-   Date and time in JavaScript are represented with the Date object. We can’t create “only date” or “only time”: Date objects always carry both.
-   Months are counted from zero (yes, January is a zero month).
-   Days of week in getDay() are also counted from zero (that’s Sunday).
-   Date auto-corrects itself when out-of-range components are set. Good for adding/subtracting days/months/hours.
-   Dates can be subtracted, giving their difference in milliseconds. That’s because a Date becomes the timestamp when converted to a number.
-   Use Date.now() to get the current timestamp fast.

Note that unlike many other systems, timestamps in JavaScript are in milliseconds, not in seconds.

Sometimes we need more precise time measurements. JavaScript itself does not have a way to measure time in microseconds (1 millionth of a second), but most environments provide it. For instance, browser has performance.now() that gives the number of milliseconds from the start of page loading with microsecond precision (3 digits after the point):

```javascript
alert(`Loading started ${performance.now()}ms ago`);
// Something like: "Loading started 34731.26000000001ms ago"
// .26 is microseconds (260 microseconds)
// more than 3 digits after the decimal point are precision errors, only the first 3 are correct
```

Node.js has microtime module and other ways. Technically, almost any device and environment allows to get more precision, it’s just not in Date.