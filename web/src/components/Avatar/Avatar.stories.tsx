import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Avatar} from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {args: {}};
