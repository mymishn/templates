import type { Meta, StoryObj } from "@storybook/react";
import { JournalEntry1 } from "../templates/journal-entry1/journal-entry1";

const meta: Meta<typeof JournalEntry1> = {
  title: "Templates/JournalEntry1",
  component: JournalEntry1,
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
    duration: "2h13m",
    date: "01.11.2025",
  },
};

export default meta;
type Story = StoryObj<typeof JournalEntry1>;

export const Default: Story = {};
