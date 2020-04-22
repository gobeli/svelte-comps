import ImageView from './ImageView.svelte';

export default {
  title: 'Image',
  component: Image,
};

export const Default = () => ({
  Component: ImageView
});

export const LazyLoad = () => ({
  Component: ImageView,
  props: { offset: 2000 }
});