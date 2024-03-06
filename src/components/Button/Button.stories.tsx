import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const ContainedButton = Template.bind({});
ContainedButton.args = {
  children: "Click me",
  variant: "contained",
  size: "medium",
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  children: "Outline",
  variant: "outlined",
  size: "large",
};

export const TextButton = Template.bind({});
TextButton.args = {
  children: "Text",
  variant: "text",
  size: "small",
};
