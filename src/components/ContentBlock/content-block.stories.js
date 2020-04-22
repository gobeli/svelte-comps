import ContentBlockView from './ContentBlockView.svelte';

export default {
  title: 'ContentBlock',
  component: ContentBlockView,
};

export const Default = () => ({
  Component: ContentBlockView
});

export const Large = () => ({
  Component: ContentBlockView,
  props: { width: 'large' }
});