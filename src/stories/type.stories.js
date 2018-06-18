import React from 'react';
import { storiesOf } from '@storybook/react';

import { Type, TextSize, TextBold } from '../design_system/type/Type.js';


storiesOf('Type', module)
  .add('default text', () => (
    <Type>
      Lorem ipsum
    </Type>
  )).add('bold text', () => (
    <Type boldness={TextBold.semibold}>
      Lorem ipsum
    </Type>
  )).add('header text', () => (
    <Type size={TextSize.lg}>
      Lorem ipsum
    </Type>
  ));


