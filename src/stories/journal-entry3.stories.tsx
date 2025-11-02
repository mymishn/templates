import type { Meta, StoryObj } from "@storybook/react";
import { JournalEntry3 } from "../templates/journal-entry3/journal-entry3";

const meta: Meta<typeof JournalEntry3> = {
  title: "Templates/JournalEntry3",
  component: JournalEntry3,
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
    text: "this sess was legit.came up with new template. moving pretty fast tbh. this sess was legit.came up with new template. moving pretty fast tbh",
    duration: "2h13m",
    date: "01.11.2025",
  },
};

export default meta;
type Story = StoryObj<typeof JournalEntry3>;

export const Default: Story = {};
