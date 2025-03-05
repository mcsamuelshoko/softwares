import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {TechnologiesSection} from './TechnologiesSection';

const meta: Meta<typeof TechnologiesSection> = {
  component: TechnologiesSection,
};

export default meta;

type Story = StoryObj<typeof TechnologiesSection>;

export const Basic: Story = {args: {}};
