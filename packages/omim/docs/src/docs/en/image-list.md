## Image List

Image List provides a RTL-aware Material Design image list component. An Image List consists of several items, each containing an image and optionally supporting content (i.e. a text label).

## Usage

```jsx
<image-list
  list="[
    { src: './image-list/3x2-1.jpg', label: 'Text label' },
    { src: './image-list/3x2-2.jpg', label: 'Text label' },
    { src: './image-list/3x2-3.jpg', label: 'Text label' },
    { src: './image-list/3x2-4.jpg', label: 'Text label' },
    { src: './image-list/3x2-5.jpg', label: 'Text label' },
    { src: './image-list/3x2-6.jpg', label: 'Text label' },
    { src: './image-list/3x2-7.jpg', label: 'Text label' },
    { src: './image-list/3x2-8.jpg', label: 'Text label' },
    { src: './image-list/3x2-9.jpg', label: 'Text label' },
    { src: './image-list/3x2-10.jpg', label: 'Text label' },
    { src: './image-list/3x2-11.jpg', label: 'Text label' },
    { src: './image-list/3x2-12.jpg', label: 'Text label' },
    { src: './image-list/3x2-13.jpg', label: 'Text label' },
    { src: './image-list/3x2-14.jpg', label: 'Text label' },
    { src: './image-list/3x2-15.jpg', label: 'Text label' }
  ]"
></image-list>
```

## API

### Props

```jsx
{
  masonry: boolean,
  list: object
}
```