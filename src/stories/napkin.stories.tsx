import type { Meta, StoryObj } from "@storybook/react";
import { Napkin } from "../templates/napkin/napkin";

const meta: Meta<typeof Napkin> = {
  title: "Templates/Napkin",
  component: Napkin,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 500, height: 500 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    duration: "2h13m",
    text: "this sess was legit. came up with new template. moving pretty fast tho. came up with new template. moving pretty fast tho.",
    date: "01.11.2025",
  },
};

export default meta;
type Story = StoryObj<typeof Napkin>;

export const Default: Story = {};
