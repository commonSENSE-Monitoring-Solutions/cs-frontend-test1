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

test('renders modal content when provided', () => {
  const onCloseMock = jest.fn();

  const { getByText } = render(
    <Modal isOpen={true} title="Test Modal" content={<p>Modal Content</p>} onClose={onCloseMock} />
  );

  const contentElement = getByText(/Modal Content/i);

  expect(contentElement).toBeInTheDocument();
});