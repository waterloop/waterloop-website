# Text with Image Component ReadMe

## Purpose:

Displays text, along with an image beside it. Can be configured to also display a title and a button that redirects the user to a link.

## How to create:

Pass in **list of JSON data** into the prop parameter _**data**_, with each JSON entry containing the following parameters:

```JSON
{
    "title": "The title to display (optional)",
    "text": "The descriptive text (required)",
    "image": "Image link starting in the 'public' folder directory (e.g. TxtWImgSamples/joinus.jpg) (required)",
    "link": "Link to redirect user to when they click the 'VIEW MORE' button (optional - button hidden when parameter not provided)"
}
```

Additionally, you can change the layout to only display text on the **left** or on the **right** by passing either value into the prop parameter _**textPos**_. By default, this is set to **alternate** the text position between left and right. 

## Notes:

1. Please don't use too many words in the title and description.

2. Responsive design for (mobile) devices under **500px** width.

3. Left and right border padding of the components is assumed to be done by the parent component for the mobile view.
   
4. If you have any questions, contact Jeff at [j256ma@uwaterloo.ca](j256ma@uwaterloo.ca) or [jeff.m@waterloop.ca](jeff.m@waterloop.ca)