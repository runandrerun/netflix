import React from 'react';
import { Accordion, OptForm } from '../../components';
import faqsData from '../../_assets/data/faqs';

export default function FAQsContainer() {
  return (
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map(({ id, header, body }) => (
          <Accordion.Item key={id.toString()}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>{body}</Accordion.Body>
          </Accordion.Item>
        ))}
        <OptForm>
          <OptForm.Input placeholder="E-mail address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>Ready to watch? Enter your e-mail to create or restart your membership</OptForm.Text>
        </OptForm>
      </Accordion>
  );
};
