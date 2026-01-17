import type { Meta, StoryObj } from "@storybook/react";
import { TitleNotesBlack } from "../../registry/templates/title-notes/title-notes-black";
import { TitleNotesWhite } from "../../registry/templates/title-notes/title-notes-white";

const meta: Meta<typeof TitleNotesBlack> = {
  title: "Templates/TitleNotes",
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
    hours: "09:00 - 11:13",
    text: "entered flow state after 15min. couldn’t stop until my laptop died. - 2 short vids. - new template test",
  },
};

export default meta;
type Story = StoryObj<typeof TitleNotesBlack>;

export const Black: Story = {
  render: (args) => <TitleNotesBlack {...args} />,
};

export const White: Story = {
  render: (args) => <TitleNotesWhite {...args} />,
};
