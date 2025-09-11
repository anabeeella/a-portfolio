import { Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost'],
    },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const TextOnly: Story = {
  args: {
    variant: 'solid',
    children: 'Text Only',
  },
};

// Text + Icon
export const WithIcon: Story = {
  args: {
    variant: 'solid',
    leftIcon: <AddIcon />,
    children: 'Add Item',
  },
};

// Icon only
export const IconOnly: Story = {
  args: {
    variant: 'outline',
    children: <AddIcon />,
    'aria-label': 'Add',
  },
};

// Loading
export const Loading: Story = {
  args: {
    variant: 'solid',
    isLoading: true,
    children: 'Loading...',
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    variant: 'solid',
    isDisabled: true,
    children: 'Disabled Button',
  },
};
