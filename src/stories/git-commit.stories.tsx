import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { GitCommit } from "../../registry/templates/git-commit/git-commit";
import { GitCommitBlue } from "../../registry/templates/git-commit/git-commit-blue";
import { GitCommitPurple } from "../../registry/templates/git-commit/git-commit-purple";
import { GitCommitAmberBlack } from "../../registry/templates/git-commit/git-commit-amber-black";
import { GitCommitAmberWhite } from "../../registry/templates/git-commit/git-commit-amber-white";
import { GitCommitBlueBlack } from "../../registry/templates/git-commit/git-commit-blue-black";
import { GitCommitBlueWhite } from "../../registry/templates/git-commit/git-commit-blue-white";
import { GitCommitPurpleBlack } from "../../registry/templates/git-commit/git-commit-purple-black";
import { GitCommitPurpleWhite } from "../../registry/templates/git-commit/git-commit-purple-white";

const sharedArgs = {
  tasks: [
    "finish header",
    "template lib code",
    "setup husky",
    "tag based deploy",
    "template lib codehujhihihiuhi",
    "finish header",
    "template lib code",
    "setup husky",
    "tag based deploy",
    "template lib codehujhihihiuhi"
  ],
};

const decorator = [
  (Story: React.ComponentType) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <Story />
    </div>
  ),
];

const meta: Meta<typeof GitCommit> = {
  title: "Templates/GitCommit",
  component: GitCommit,
  parameters: {
    layout: "centered",
  },
  decorators: decorator,
  args: sharedArgs,
};

export default meta;
type Story = StoryObj<typeof GitCommit>;

export const Default: Story = {};

export const Blue: Story = {
  render: (args) => <GitCommitBlue {...args} />,
};

export const Purple: Story = {
  render: (args) => <GitCommitPurple {...args} />,
};

export const AmberBlack: Story = {
  render: (args) => <GitCommitAmberBlack {...args} />,
};

export const AmberWhite: Story = {
  render: (args) => <GitCommitAmberWhite {...args} />,
};

export const BlueBlack: Story = {
  render: (args) => <GitCommitBlueBlack {...args} />,
};

export const BlueWhite: Story = {
  render: (args) => <GitCommitBlueWhite {...args} />,
};

export const PurpleBlack: Story = {
  render: (args) => <GitCommitPurpleBlack {...args} />,
};

export const PurpleWhite: Story = {
  render: (args) => <GitCommitPurpleWhite {...args} />,
};
