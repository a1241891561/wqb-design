import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button, { ButtonType, ButtonSize } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => (
  <Button onClick={action("clicked")}>Default</Button>
);

export const Primary: ComponentStory<typeof Button> = () => (
  <Button onClick={action("clicked")} btnType={ButtonType.Primary}>
    Primary
  </Button>
);
