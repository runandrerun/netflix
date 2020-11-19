import React from 'react';
import { OptForm } from '../../components';

export default function OptFormContainer() {
  return (
    <OptForm>
      <OptForm.Text>Ready to watch? Enter your e-mail to create or restart your membership</OptForm.Text>
      <OptForm.Input placeholder="E-mail address" />
      <OptForm.Button>Try it now</OptForm.Button>
      <OptForm.Break />
    </OptForm>
  );
};
