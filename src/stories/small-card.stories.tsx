import type { Meta, StoryObj } from "@storybook/react";
import { SmallCardWhiteBruno } from "../../registry/templates/small-card/small-card-white-bruno";
import { SmallCardWhiteOrbitron } from "../../registry/templates/small-card/small-card-white-orbitron";
import { SmallCardTransparentBruno } from "../../registry/templates/small-card/small-card-transparent-bruno";
import { SmallCardTransparentOrbitron } from "../../registry/templates/small-card/small-card-transparent-orbitron";

const meta: Meta<typeof SmallCardWhiteBruno> = {
  title: "Templates/SmallCard",
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300, height: 300 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: "session",
    duration: "10h13m",
    date: "01.11.2025",
  },
};

export default meta;
type Story = StoryObj<typeof SmallCardWhiteBruno>;

export const WhiteBruno: Story = {
  render: (args) => <SmallCardWhiteBruno {...args} />,
};

export const WhiteOrbitron: Story = {
  render: (args) => <SmallCardWhiteOrbitron {...args} />,
};

export const TransparentBruno: Story = {
  render: (args) => <SmallCardTransparentBruno {...args} />,
};

export const TransparentOrbitron: Story = {
  render: (args) => <SmallCardTransparentOrbitron {...args} />,
};
