import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from '@storybook/react'
export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum.',
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
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Lorem ipsum</p>
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