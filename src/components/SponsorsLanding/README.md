# Sponsors Component ReadMe

## Purpose:
Displays current sponsor logos on the landing page.

## How to add new logo:
Place sponsor logo images in `static\img\sponsors` folder, and then import the image into the parent component (Home.tsx in this case). Then in the parent component, define a const variable of `{string, string}[]` or `ImgJSON[]` type with the following structure:

```JSON
{
    "imgSrc": "Image import name (required)",
    "imgAlt": "Textual description of image (required)"
}
```