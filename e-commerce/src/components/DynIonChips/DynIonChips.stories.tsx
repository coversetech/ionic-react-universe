import type { Meta, StoryObj } from "@storybook/react";
import DynIonChips from "./DynIonChips";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

const chips = [
  {
    id: 1,
    name: "Chip 1",
    value: { data: "foo" },
  },
  {
    id: 2,
    name: "Chip 2",
    value: { data: "bar" },
  },
  {
    id: 3,
    name: "Chip 3",
    value: { data: "baz" },
  },
];

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof DynIonChips> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "DynIonChips",
  component: DynIonChips,
};
export default meta;
type Story = StoryObj<typeof DynIonChips>;

export const Default: Story = {
  args: {
    //👇 The args you need here will depend on your component
    chipValues: chips,
    onRemoveChipHandler: (id) => console.log(`Removing chip with ID ${id}`),
    activatedChipHandler: (chip) => console.log(`Activating chip`, chip),
    activatedChipId: -1,
  },
};

export const Activated: Story = {
  args: {
    //👇 The args you need here will depend on your component
    chipValues: chips,
    onRemoveChipHandler: (id) => console.log(`Removing chip with ID ${id}`),
    activatedChipHandler: (chip) => console.log(`Activating chip`, chip),
    activatedChipId: 1,
  },
};

export const CustomColor: Story = {
  args: {
    //👇 The args you need here will depend on your component
    chipValues: chips,
    onRemoveChipHandler: (id) => console.log(`Removing chip with ID ${id}`),
    activatedChipHandler: (chip) => console.log(`Activating chip`, chip),
    activatedChipId: -1,
    color: "tertiary",
  },
};