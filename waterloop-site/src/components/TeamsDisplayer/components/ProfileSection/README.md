# Profiles Component Summary
This folder's main product is the ProfileSection component which manages rows of mini profiles that can expand into a bigger and more detailed expanded profile.

## Files and Components
### ```components/ProfileSection.tsx```
This is a manager component for a displaying the profiles of an entire subteam. The functionality for expanding and minifying profiles are declared in this file:

#### Initialization
There are two state variables:
1. ```expanded: object```
2. ```minified: array```

The minified state array is assigned the value of ```this.props.profiles```

#### Expanding and Minifiying Profiles
When a mini profile is expanded (by clicking), it is popped from the minified state array and set to the expanded state variable. When an expanded profile is minfied (by clicking or being replaced), it will be pushed to the back of the minified state array.

**Note**: Only one Expanded Profile can exist at a time. The expanded state variable is not an array,

### ```components/SubProfile.tsx```
This is the component for a mini profile. A profile section can fit three SubProfiles in one row.

### ```components/LeadProfile.tsx```
This is a bigger mini profile specifically used for team leads. A profile section can fit two LeadProfiles in one row.

### ```components/ExpandedProfile.tsx```
This is the component for a bigger and more detailed profile. ExpandedProfiles will occupy the entire width of a profile section.

### ```interfaces.tsx```
This is where the local typescript interfaces and types are declared.

### ```index.tsx```
This is where the components of this folder are exported and made available to the rest of the app.

# Bugs/Existing Issues
1. Gold borders on the profiles are not very visible and do not fit well (white spaces)
2. Gold borders should only appear for Team Leads and Subteam leads. Currently displays for everyone
3. Currently using ```UNSAFE_componentWillReceiveProps``` life cycle function to update states for new props
4. There isn't a loading screen while data is still being fetched
5. Most members do not have links in their teamHub profiles. Currently, dummy links (LinkedIn and GitHub) are used for all the profiles
6. The option for links to a personal website is missing and should exist as a link along with LinkedIn and GitHub
7. The current teamhub profile images are low quality. Consider just switching to the goose portraits in ```testData.js```?
8. Highlighting text on any profiles counts as a click and will trigger the minify/expand functionality

# Next Steps
The following are functionality that should exist or be discussed.

### Jump to Expanded Profile upon clicking
Currently, clicking any mini profile will simply instantiate an expanded profile at the top of the profile section. However it is more intuitive that the page also jump to the expanded profile. This especially usefull for mobile since it may take 5+ scrolls to reach the expanded profile at the top.

### Pin profiles
Functionality to pin profiles you want to see to the front of the section. Useful for comparison or keeping a tab of memebrs you have taken an interest in

### Reduced View
Currently all the the profiles are listed in a profile section. Desktop mode is ok for now but might take too much space in the future if a subteam gets too big. On mobile mode, its is frustrating to scroll through one profile at the time when there are 10+ in a subteam. There should exist an option to limit a profile section to display only a certain number of profiles at a time and allow to user to navigate it with the light arrows (swiping on mobile).
