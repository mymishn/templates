#!/bin/bash

if [ -z "$1" ]; then
  echo "❌ Usage: ./create-component.sh <component-name>"
  exit 1
fi

raw_name="$1"

kebab_case=$(echo "$raw_name" | tr '[:upper:]' '[:lower:]' | tr '_' '-')

pascal_case=$(echo "$kebab_case" | awk -F'-' '{for(i=1;i<=NF;i++){sub(/./,toupper(substr($i,1,1)),$i)}; print $0}' OFS='')

TEMPLATES_DIR="src/templates/${kebab_case}"
STORIES_DIR="src/stories"
COMPONENT_FILE="${TEMPLATES_DIR}/${kebab_case}.tsx"
STORY_FILE="${STORIES_DIR}/${kebab_case}.stories.tsx"

if [ -d "$TEMPLATES_DIR" ]; then
  echo "⚠️  Le composant '${kebab_case}' existe déjà dans src/templates/"
  exit 1
fi

mkdir -p "$TEMPLATES_DIR"
mkdir -p "$STORIES_DIR"

cat > "$COMPONENT_FILE" <<EOL
import React from "react";

export const ${pascal_case}: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gray-100">
      <img
        src="./background.svg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-center text-black">
        <h1 className="text-2xl font-bold">${pascal_case}</h1>
      </div>
    </div>
  );
};
EOL

cat > "$TEMPLATES_DIR/background.svg" <<EOL
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#e5e7eb"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-size="20">
    ${pascal_case} background
  </text>
</svg>
EOL

cat > "$STORY_FILE" <<EOL
import type { Meta, StoryObj } from "@storybook/react";
import { ${pascal_case} } from "../templates/${kebab_case}/${kebab_case}";

const meta: Meta<typeof ${pascal_case}> = {
  title: "Templates/${pascal_case}",
  component: ${pascal_case},
};

export default meta;
type Story = StoryObj<typeof ${pascal_case}>;

export const Default: Story = {
  render: () => <${pascal_case} />,
};
EOL

echo "successfully created '${pascal_case}' template"
echo "component - ${TEMPLATES_DIR}"
echo "stories - ${STORY_FILE}"
