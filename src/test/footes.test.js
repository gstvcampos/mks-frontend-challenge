import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from "@/components/Footer";

describe('Footer', () => {
  it('renders the footer text', () => {
    render(<Footer />);
 
    const footerText = screen.getByText('MKS Sistemas © Todos os direitos reservados');
 
    expect(footerText).toBeInTheDocument();
  });
});
