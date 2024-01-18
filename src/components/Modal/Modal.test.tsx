import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

test('calls onClose when close button is clicked', () => {
  const onCloseMock = jest.fn();

  const { getByTestId } = render(
    <Modal isOpen={true} title="Test Modal" onClose={onCloseMock} />
  );

  const closeButton = getByTestId('close-button');
  fireEvent.click(closeButton);

  expect(onCloseMock).toHaveBeenCalledTimes(1);
});

