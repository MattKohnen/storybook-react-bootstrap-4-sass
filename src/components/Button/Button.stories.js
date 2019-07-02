import React from 'react';
import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
// TODO:  Fix `addon-info` "Module not found" errors
// (Don't use for now)
//import { withInfo } from '@storybook/addon-info';

import Button from './Button';

export const props = {
    className: 'btn-primary',
    type: 'button'
};

/*
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="danger">Danger</Button>
<Button variant="info">Info</Button>
<Button variant="light">Light</Button>
<Button variant="dark">Dark</Button>
<Button variant="link">Link</Button>
 */

/*storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('default', () => {
        return (
            <Button disabled={boolean('Disabled', false)}
                    type={text('Type', props.type)}>
                {text('Text', 'Submit payment')}
            </Button>
        )
    })
    .add('secondary', () => <Button variant="secondary">Secondary</Button>);*/

const buttonTypesInfo = `
    The following types are supported:  \`Default\`.
`;

const buttonTypes = () => (
    <>
        <Button variant="primary"
                disabled={boolean('Disabled', false)}>
            {text('Text (Primary)', 'Submit payment')}
        </Button>

        <Button variant="secondary"
                disabled={boolean('Disabled', false)}>
            View older transactions
        </Button>

        {/*<Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>*/}
    </>
);

/*storiesOf('Button', module)
    .addDecorator(withInfo)
    .add(
        'Types',
        withInfo(buttonTypesInfo)(buttonTypes)
    );*/

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add(
        'Types',
        buttonTypes
    );
