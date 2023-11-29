import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

    // test('renders learn react link', () => {
    //     render(<App />);
    //     const linkElement = screen.getByText(/learn react/i);
    //     expect(linkElement).toBeInTheDocument();
    //   });

    
test('renders App component', () => {
    render(<App />);
    // Example: Check for the presence of an element from your App component
    const introTextElement = screen.getByText(/Trigger modals using below/i);
    expect(introTextElement).toBeInTheDocument();
});
  
test('renders App component buttons', () => {
    render(<App />);
    // Example: Check for the presence of a button
    const openModalButton = screen.getByText(/Open Modal/i);
    expect(openModalButton).toBeInTheDocument();
});
