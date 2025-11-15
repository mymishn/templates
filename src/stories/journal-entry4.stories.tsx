import type { Meta, StoryObj } from "@storybook/react";
import { JournalEntry4 } from "../templates/journal-entry4/journal-entry4";

const meta: Meta<typeof JournalEntry4> = {
  title: "Templates/JournalEntry4",
  component: JournalEntry4,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 462, height: 291 }}>
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
type Story = StoryObj<typeof JournalEntry4>;

export const Default: Story = {};
