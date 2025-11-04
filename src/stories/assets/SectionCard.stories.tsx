import SectionCard from '@/app/_components/ui/SectionCard';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta<typeof SectionCard> = {
  title: 'Components/SectionCard',
  component: SectionCard,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'hover', 'focus', 'disabled'],
      description: 'Visual variant of the card',
    },
    id: { control: 'text' },
    link: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    onClick: { action: 'clicked' },
    className: { control: 'text' },
    minWidth: { control: 'number' },
    index: { control: 'number' },
    isComingSoon: { control: 'boolean' },
    tags: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof SectionCard>;

export const Default: Story = {
  args: {
    variant: 'default',
    id: '#1',
    link: '/routename',
    title: 'Section Title',
    description: 'This is a description of a section card',
    onClick: () => {},
    className: 'section-card',
    minWidth: '320',
    index: 0,
    isComingSoon: 'false',
    tags: ['tag1', 'tag2'],
  },
};
