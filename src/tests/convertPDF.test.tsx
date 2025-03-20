import { render, screen, waitFor } from '@testing-library/react';
import PdfViewer from '../components/PdfView';
import { useHistoryStore } from '../store/userHistory';

jest.mock('../store/userHistory');

jest.mock('react-pdf', () => ({
  Document: ({ children, file, onLoadSuccess }) => {
    onLoadSuccess({ numPages: 2 });
    return <div>{children}</div>;
  },
  Page: ({ pageNumber }) => <div>Page {pageNumber}</div>,
}));

describe('PdfViewer', () => {
  it('renders PDF content correctly', async () => {
    const mockBase64Pdf = 'data:application/pdf;base64,MockBase64PdfContent';
    (useHistoryStore as jest.Mock).mockReturnValue({
      data: mockBase64Pdf,
    });

    render(<PdfViewer />);

    await waitFor(() => {
      expect(screen.getByText('Page 1')).toBeInTheDocument();
      expect(screen.getByText('Page 2')).toBeInTheDocument();
    });
  });
});
