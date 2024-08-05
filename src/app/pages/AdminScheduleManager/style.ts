/* eslint-disable indent */
import styled from 'styled-components';

export const Container = styled.div`
    font-family: Arial, sans-serif;
    margin: 20px;
`;

export const DateTimePickers = styled.div`
    margin-bottom: 20px;
`;

export const TimeSlots = styled.div`
    margin-bottom: 20px;
`;

export const TimeSlot = styled.div<{ selected: boolean }>`
    border: 1px solid gray;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    background-color: ${(props) => (props.selected ? '#007bff' : 'transparent')};
    color: ${(props) => (props.selected ? 'white' : 'black')};
    border-radius: 4px;

    &:hover {
        background-color: ${(props) => (props.selected ? '#0056b3' : '#e0e0e0')};
    }
`;

export const Button = styled.button<{ primary?: boolean; disabled?: boolean }>`
    background-color: ${(props) => (props.primary ? '#007bff' : '#6c757d')};
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 4px;
    cursor: pointer;
    opacity: ${(props) => (props.disabled ? 0.6 : 1)};
    pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

    &:hover {
        background-color: ${(props) =>
            props.primary ? (props.disabled ? '#007bff' : '#0056b3') : props.disabled ? '#6c757d' : '#5a6268'};
    }
`;

export const AppointmentsList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const AppointmentItem = styled.li`
    margin-bottom: 10px;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    accent-color: #007bff; /* Custom checkbox color */
    margin-right: 10px;
    display: none; /* Hide the checkbox */
`;
