import type { Meta, StoryObj } from "@storybook/react";
import { NightWork } from "../templates/night-work/night-work";

const meta: Meta<typeof NightWork> = {
  title: "Templates/NightWork",
  component: NightWork,
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
    title: "Example title",
    duration: "2h13m",
    date: "01.11.2025",
  },
};

export default meta;
type Story = StoryObj<typeof NightWork>;

export const Default: Story = {};
