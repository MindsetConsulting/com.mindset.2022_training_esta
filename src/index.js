import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents-react/dist/Assets.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const employees = [
    { 
        fullName: 'John Smith',
        department: 'Finance',
        title: 'Director of Finance',
        directReport: 'VP of Finance',
        startDate: 'Jan 1, 2014',
        email: 'johnsmith@mindsetconsulting.com'
    },
    { 
        fullName: 'Jane Smith',
        department: 'DevOps',
        title: 'Junior Developer',
        directReport: 'Director of DevOps',
        startDate: 'Jan 1, 2020',
        email: 'janesmith@mindsetconsulting.com'
    }
]

const skills = [
    {
        title: 'BS Finance',
        type: 'University Degree',
        department: 'Finance',
        institution: 'University of Someplace'
    },
    {
        title: 'SAP Fiori 1',
        type: 'SAP Certification',
        department: 'DevOps',
        institution: 'SAP'
    },
    {
        title: 'Amazon Web Services',
        type: 'AWS Certification',
        department: 'DevOps',
        institution: 'Amazon'
    },
    {
        title: 'CPA License',
        type: 'License',
        department: 'Finance',
        institution: 'AICPA'
    }
]


const employeeReducer = (state = employees, action) => {
    if (action.type === 'ADD_EMPLOYEE') {
        return [...state, action.payload];
    }
    return state;
};

const skillReducer = (state = skills, action) => {
    if (action.type === 'ADD_SKILL') {
        return [...state, action.payload];
    }
    return state;
};


const storeInstances = createStore(
    combineReducers({
        employeeReducer,
        skillReducer,
    }),
    applyMiddleware(
        logger
    )
);


ReactDOM.render(
    <Provider store={storeInstances}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
