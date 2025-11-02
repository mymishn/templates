import type { Meta, StoryObj } from "@storybook/react";
import { PostIt } from "../templates/post-it/post-it";

const meta: Meta<typeof PostIt> = {
  title: "Templates/PostIt",
  component: PostIt,
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
    text: "this sess was legit. came up with new template. fire. his sess was legit.",
    duration: "2h13m",
    date: "25.10.25",
  },
};

export default meta;
type Story = StoryObj<typeof PostIt>;

export const Default: Story = {};
