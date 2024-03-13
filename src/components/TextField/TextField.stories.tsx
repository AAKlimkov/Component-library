import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TextField, { TextFieldProps } from "./TextField";
import "./TextField.module.less";

export default {
  title: "TextField",
  component: TextField,
} as Meta;

const Template: StoryFn<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Username",
};

export const WithError = Template.bind({});
WithError.args = {
  error: "Invalid input",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
