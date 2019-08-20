// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import CheckList from './CheckList';

const CHECKBOX_ALL_ID = `all_checkboxes`;
const CHECKBOX_ROOT_ID = `checkbox_`;

describe("CheckList", () => {

    it('render component', async () => {
        const { getByText } = render(<CheckList />);
        expect(getByText('Select all')).toBeInTheDocument();
    });
    
    it('manipulate and validate "all checkboxes" selection', async () => {
        const { getByTestId } = render(<CheckList />);
        expect(getByTestId(CHECKBOX_ALL_ID)).toHaveProperty('checked', false); 
        for (let i = 0; i < 4; i++) {
            expect(getByTestId(`checkbox_${i}`)).toHaveProperty('checked', false);
        }
        fireEvent.click(getByTestId(CHECKBOX_ALL_ID));
        expect(getByTestId(CHECKBOX_ALL_ID)).toHaveProperty('checked', true);
        for (let i = 0; i < 4; i++) {
            expect(getByTestId(`checkbox_${i}`)).toHaveProperty('checked', true);
        }
    });
    
    it('select and validate checkboxes step by step', async () => {
        const { getByTestId } = render(<CheckList />);
        expect(getByTestId(CHECKBOX_ALL_ID)).toHaveProperty('checked', false);
        for (let i = 0; i < 4; i++) {
            const testId = `${CHECKBOX_ROOT_ID}${i}`;
            expect(getByTestId(testId)).toHaveProperty('checked', false);
            fireEvent.click(getByTestId(testId));
            expect(getByTestId(testId)).toHaveProperty('checked', true);
        }
        expect(getByTestId(CHECKBOX_ALL_ID)).toHaveProperty('checked', true);
        for (let i = 0; i < 4; i++) {
            const testId = `${CHECKBOX_ROOT_ID}${i}`;
            fireEvent.click(getByTestId(testId));
            expect(getByTestId(testId)).toHaveProperty('checked', false);
            if(i > 0) expect(getByTestId(CHECKBOX_ALL_ID)).toHaveProperty('checked', false);
        }
    });

})
