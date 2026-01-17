import type { Meta, StoryObj } from "@storybook/react";
import { WeeklyReportOrbitron } from "../../registry/templates/weekly-report/weekly-report-orbitron";
import { WeeklyReportBruno } from "../../registry/templates/weekly-report/weekly-report-bruno";
import { WeeklyReportBlackOrbitron } from "../../registry/templates/weekly-report/weekly-report-black-orbitron";
import { WeeklyReportBlackBruno } from "../../registry/templates/weekly-report/weekly-report-black-bruno";

const meta: Meta<typeof WeeklyReportOrbitron> = {
  title: "Templates/WeeklyReport",
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 600, height: 600 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    duration: "24h30m",
    days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    dayDurations: ["2h", "3h", "2h", "4h", "3h", "1.5h", "2h"],
  },
};

export default meta;
type Story = StoryObj<typeof WeeklyReportOrbitron>;

export const Orbitron: Story = {
  render: (args) => <WeeklyReportOrbitron {...args} />,
};

export const Bruno: Story = {
  render: (args) => <WeeklyReportBruno {...args} />,
};

export const BlackOrbitron: Story = {
  render: (args) => <WeeklyReportBlackOrbitron {...args} />,
};

export const BlackBruno: Story = {
  render: (args) => <WeeklyReportBlackBruno {...args} />,
};
