import { withA11y } from '@storybook/addon-a11y';
export default { 
    title: 'Button',
    decorators: [withA11y],
};

export const withText = () => {
    const button = document.createElement('button');
    button.innerText = 'Click Me';
    button.style.background = 'blue';
    button.style.color = 'white';
    button.style.borderRadius = '4px';
    return button;
}

export const withEmoji = () => {
    const button = document.createElement('button');
    button.innerText = '😀 😎 👍 💯';
    return button;
};