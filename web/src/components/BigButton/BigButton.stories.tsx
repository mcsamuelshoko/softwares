import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {BigButton} from './BigButton';

const meta: Meta<typeof BigButton> = {
  component: BigButton,
};

export default meta;

type Story = StoryObj<typeof BigButton>;

export const Basic: Story = {args: {}};
