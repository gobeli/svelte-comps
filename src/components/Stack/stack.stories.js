import StackView from './StackView.svelte';

export default {
  title: 'Stack',
  component: StackView,
};


export const XSmall = () => ({
  Component: StackView,
  props: { space: 'xsmall' },
});

export const Small = () => ({
  Component: StackView,
});

export const Medium = () => ({
  Component: StackView,
  props: { space: 'medium' },
});

export const Large = () => ({
  Component: StackView,
  props: { space: 'large' },
});

export const XLarge = () => ({
  Component: StackView,
  props: { space: 'xlarge' },
});
