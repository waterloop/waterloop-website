# SimpleFeatures

## **SUMMARY**

This react component handles the rendering of the "features" section of the webpage. Each `SimpleFeatComp` component displays the image to the left of the page, followed by the descriptive text to the right.

## **HOW TO USE**

The testing component `FeatPage.tsx` uses data from the `extFeatModels.json` file as parameters to each `SimpleFeatComp` component. Each feature data unit contains 3 parameters that the `SimpleFeatComp` component uses:

* **imgAlt** - Words can't capture the awesomeness of these images, but they're the best way to give the user a taste of them should their Internet connection (or our code) be unable to handle the images ;).
* **desc** - If Bob Ross was a writer instead, he'd be able to paint these holy images perfectly with words. With the power of this parameter, so can you. :)

The `SimpleFeatComp` component is then instantiated as follows:

```HTML
 <SimpleFeatComp imgSrc={} imgAlt={} desc={}></SimpleFeatComp>
```

## **QUESTIONS?**

Contact me ([jmawloo](www.github.com/jmawloo)) anytime, or you can send me an email at [j256ma@uwaterloo.ca](mailto:j256ma@uwaterloo.ca)

(P.S. if you ever work with me make sure to remind me to `ctrl+s` occasionally. This is my second attempt at making this README.md file since the first one didn't save ;_;)