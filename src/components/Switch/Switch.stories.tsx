import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Switch, { SwitchProps } from "./Switch";
import "./Switch.module.less";

export default {
  title: "Switch",
  component: Switch,
} as Meta;

const Template: StoryFn<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  onChange: () => {},
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  onChange: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  onChange: () => {},
  disabled: true,
};
