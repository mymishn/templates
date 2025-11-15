import type { Meta, StoryObj } from "@storybook/react";
import { PostItYellow } from "../templates/post-it/post-it-yellow";
import { PostItRose } from "../templates/post-it/post-it-rose";

const meta: Meta<typeof PostItYellow> = {
  title: "Templates/PostIt",
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
type Story = StoryObj<typeof PostItYellow>;

export const Yellow: Story = {
  render: (args) => <PostItYellow {...args} />,
};

export const Rose: Story = {
  render: (args) => <PostItRose {...args} />,
};