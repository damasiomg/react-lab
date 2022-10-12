import { Heading, HeadingProps } from "./Heading";
import { Meta, StoryObj } from '@storybook/react'
export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'This is a Heading ',
        size: 'md'
    },
    argTypes: {
        size: {
            oprions: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>This is a h1 Heading</h1>
        )  
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
};