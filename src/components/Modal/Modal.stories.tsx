import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal, { ModalProps } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

const Template: StoryFn<ModalProps> = (args) => <Modal {...args} />;

export const OpenModal = Template.bind({});
OpenModal.args = {
  open: true,
  children: <div>Modal Content</div>,
};

export const ClosedModal = Template.bind({});
ClosedModal.args = {
  open: false,
  children: <div>Modal Content</div>,
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  open: true,
  children: <div>Custom Modal Content</div>,
};

export const WithoutCloseButton = Template.bind({});
WithoutCloseButton.args = {
  open: true,
  children: <div>Modal Content</div>,
  onClose: undefined,
};
