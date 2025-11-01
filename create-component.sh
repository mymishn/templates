#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: ./create-component.sh <component-name>"
  exit 1
fi

raw_name="$1"
kebab_case=$(echo "$raw_name" | tr '[:upper:]' '[:lower:]' | tr '_' '-')
pascal_case=$(echo "$kebab_case" | awk -F'-' '{for(i=1;i<=NF;i++){sub(/./,toupper(substr($i,1,1)),$i)}; print $0}' OFS='')

TEMPLATES_DIR="src/templates/${kebab_case}"
STORIES_DIR="src/stories"
COMPONENT_FILE="${TEMPLATES_DIR}/${kebab_case}.tsx"
STORY_FILE="${STORIES_DIR}/${kebab_case}.stories.tsx"
BASE_BG="base-background.png"
TARGET_BG="${TEMPLATES_DIR}/background.png"

if [ -d "$TEMPLATES_DIR" ]; then
  echo "component '${kebab_case}' already exists"
  exit 1
fi

if [ ! -f "$BASE_BG" ]; then
  echo "unable to find ${BASE_BG} at project's root"
  exit 1
fi

mkdir -p "$TEMPLATES_DIR"
mkdir -p "$STORIES_DIR"

cp "$BASE_BG" "$TARGET_BG"

cat > "$COMPONENT_FILE" <<EOL
import React from "react";
import type { TemplateProps } from "@/types";
import background from "./background.png";

export const ${pascal_case}: React.FC<TemplateProps> = ({ title, duration, date }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      <img
        src={background}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute top-6 left-6 z-10 text-white">
        {date && <p className="text-xs opacity-70 mb-1">{date}</p>}
        <p className="text-lg font-medium">{title}</p>
        <p className="text-3xl font-bold mt-1">{duration}</p>
      </div>
    </div>
  );
};
EOL

cat > "$STORY_FILE" <<EOL
import type { Meta, StoryObj } from "@storybook/react";
import { ${pascal_case} } from "../templates/${kebab_case}/${kebab_case}";

const meta: Meta<typeof ${pascal_case}> = {
  title: "Templates/${pascal_case}",
  component: ${pascal_case},
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
  },
};

export default meta;
type Story = StoryObj<typeof ${pascal_case}>;

export const Default: Story = {};
EOL

echo "successfully created '${pascal_case}'"
echo "component : ${TEMPLATES_DIR}"
echo "story : ${STORY_FILE}"
