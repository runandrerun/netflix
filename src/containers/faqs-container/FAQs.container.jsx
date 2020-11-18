import React from 'react';
import { Accordion } from '../../components';
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
      </Accordion>
  );
};
