import type { Meta, StoryObj } from "@storybook/react";
import { TimelineWhiteOrbitron } from "../../registry/templates/timeline/timeline-white-orbitron";
import { TimelineWhiteBruno } from "../../registry/templates/timeline/timeline-white-bruno";
import { TimelineBlackOrbitron } from "../../registry/templates/timeline/timeline-black-orbitron";
import { TimelineBlackBruno } from "../../registry/templates/timeline/timeline-black-bruno";

const meta: Meta<typeof TimelineWhiteOrbitron> = {
  title: "Templates/Timeline",
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 500, height: 300 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: "3h12m",
    duration: "2h13m",
    times: ["9am", "12pm", "6pm"],
  },
};

export default meta;
type Story = StoryObj<typeof TimelineWhiteOrbitron>;

export const WhiteOrbitron: Story = {
  render: (args) => <TimelineWhiteOrbitron {...args} />,
};

export const WhiteBruno: Story = {
  render: (args) => <TimelineWhiteBruno {...args} />,
};

export const BlackOrbitron: Story = {
  render: (args) => <TimelineBlackOrbitron {...args} />,
};

export const BlackBruno: Story = {
  render: (args) => <TimelineBlackBruno {...args} />,
};
