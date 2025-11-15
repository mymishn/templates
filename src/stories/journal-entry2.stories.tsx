import type { Meta, StoryObj } from "@storybook/react";
import { JournalEntry2 } from "../templates/journal-entry2/journal-entry2";

const meta: Meta<typeof JournalEntry2> = {
  title: "Templates/JournalEntry2",
  component: JournalEntry2,
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
    text: "this sess was legit. came up with new template. moving pretty fast tho.",
    duration: "15h13m",
    date: "01.11.25",
  },
};

export default meta;
type Story = StoryObj<typeof JournalEntry2>;

export const Default: Story = {};
