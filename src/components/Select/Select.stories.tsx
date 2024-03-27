import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Select, { SelectProps } from "./Select";

export default {
  title: "Select",
  component: Select,
} as Meta;

const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export const Default = Template.bind({});
Default.args = {
  options,
};

export const WithSelectedOption = Template.bind({});
WithSelectedOption.args = {
  options: [
    ...options,
    { value: "option2", label: "Option 2", selected: true },
  ],
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  options,
  disabled: true,
};
