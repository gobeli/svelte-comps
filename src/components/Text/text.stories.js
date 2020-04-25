import TextView from './TextView.svelte';

export default {
  title: 'Text',
  component: Text,
};

export const Standard = () => ({
  Component: TextView,
  props: { text: 'Standard Text' }
});

export const Small = () => ({
  Component: TextView,
  props: { size: 'small', text: 'Small Text' }
});

export const Large = () => ({
  Component: TextView,
  props: { size: 'large', text: 'Large Text' }
});
