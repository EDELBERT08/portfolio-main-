import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Smoke Test', () => {
    it('renders without crashing', () => {
        render(<App />);
        // Check if the navbar logo "EK" is present, which indicates the app has mounted
        expect(screen.getByText('EK')).toBeInTheDocument();
    });
});
