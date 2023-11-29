import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

// Mock ReactDOM.createPortal
jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');
  return {
    ...original,
    createPortal: (node: React.ReactNode) => node,
  };
});

describe('Modal Component', () => {
  test('renders modal title and content', () => {
    render(
      <Modal title="Test Modal" buttons={[]} onClose={() => {}} isOpen={true}>
        <p>Test Content</p>
      </Modal>
    );
    const modalTitle = screen.getByText('Test Modal');
    const modalContent = screen.getByText('Test Content');
    
    expect(modalTitle).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
  });
  
  test('renders modal buttons and invokes click handler', () => {
    const onClickMock = jest.fn();
    render(
      <Modal title="Test Modal" buttons={[<button key="1" onClick={onClickMock}>Button 1</button>]} onClose={() => {}} isOpen={true}>
        <p>Test Content</p>
      </Modal>
    );
    const modalButton = screen.getByText('Button 1');
    expect(modalButton).toBeInTheDocument();
    
    fireEvent.click(modalButton);
    expect(onClickMock).toHaveBeenCalled();
  });  
  
  test('disables body scrolling when modal is open', () => {
    render(
      <Modal title="Test Modal" buttons={[]} onClose={() => {}} isOpen={true}>
        <p>Test Content</p>
      </Modal>
    );
    expect(document.body.style.overflow).toBe('hidden');
  });

  test('enables body scrolling when modal is closed', () => {
    render(
      <Modal title="Test Modal" buttons={[]} onClose={() => {}} isOpen={false}>
        <p>Test Content</p>
      </Modal>
    );
    expect(document.body.style.overflow).toBe('auto');
  });

  test('closes modal when Escape key is pressed', () => {
    const onCloseMock = jest.fn();
    render(
      <Modal title="Test Modal" buttons={[]} onClose={onCloseMock} isOpen={true}>
        <p>Test Content</p>
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
