import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Checkbox, { CheckboxProps } from "./Checkbox";
import "./Checkbox.module.less";

/* eslint-disable no-console */

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
  checked: false,
  onChange: (checked: boolean) => console.log(`Checkbox checked: ${checked}`),
  label: "Checkbox Label",
};

export const CheckedCheckbox = Template.bind({});
CheckedCheckbox.args = {
  checked: true,
  onChange: (checked: boolean) => console.log(`Checkbox checked: ${checked}`),
  label: "Checked Checkbox",
};

export const DisabledCheckbox = Template.bind({});
DisabledCheckbox.args = {
  checked: false,
  onChange: (checked: boolean) => console.log(`Checkbox checked: ${checked}`),
  disabled: true,
  label: "Disabled Checkbox",
};
