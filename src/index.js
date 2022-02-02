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
        id: 0,
        fullName: 'John Smith',
        department: 'Finance',
        title: 'Director of Finance',
        role: 'Director of Finance',
        industries: 'Finance',
        directReport: 'VP of Finance',
        startDate: 'Jan 1, 2014',
        email: 'johnsmith@mindsetconsulting.com',
        assignedSkills: [
            {
                skillId: 1,
                skillTitle: 'BS Finance',
                skillType: 'University Degree',
                institution: 'University of Money',
                dateAcquired: '1/1/01',
                renewal: 'n/a',
                comfortLevel: 'Advanced'
            },
            {
                skillId: 2,
                skillTitle: 'Finance Certificate',
                skillType: 'Certification',
                institution: 'Finance Management Co.',
                dateAcquired: '2/2/02',
                renewal: 'Every 2 years',
                comfortLevel: 'Intermediate'
            },
        ]
    },
    { 
        id: 1,
        fullName: 'Jane Smith',
        department: 'DevOps',
        title: 'Junior Developer',
        role: 'UX Developer',
        industries: 'Manufacturing',
        directReport: 'Director of DevOps',
        startDate: 'Jan 1, 2020',
        email: 'janesmith@mindsetconsulting.com',
        assignedSkills: [
            {
                skillId: 3,
                skillTitle: 'AWS Certification',
                skillType: 'Certification',
                institution: 'Amazon',
                dateAcquired: '2/2/02',
                renewal: 'Every 2 months',
                comfortLevel: 'Advanced'
            }
        ]
    }
]

const skills = [
    {
        id: 1,
        selected: false,
        title: 'BS Finance',
        type: 'University Degree',
        department: 'Finance',
        institution: 'University of Someplace'
    },
    {
        id: 2,
        selected: false,
        title: 'SAP Fiori 1',
        type: 'SAP Certification',
        department: 'DevOps',
        institution: 'SAP'
    },
    {
        id: 3,
        selected: false,
        title: 'Amazon Web Services',
        type: 'AWS Certification',
        department: 'DevOps',
        institution: 'Amazon'
    },
    {
        id: 4,
        selected: false,
        title: 'CPA License',
        type: 'License',
        department: 'Finance',
        institution: 'AICPA'
    }
]

const departments = [
    {
        name: 'DevOps'
    },
    {
        name: 'Finance'
    },
    {
        name: 'Human Resources'
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
    // if (action.type === 'DELETE_SKILL') {
    //     return [...state, action.payload];
    // }
    return state;
};

const departmentReducer = (state = departments, action) => {
    return state;
};


const storeInstances = createStore(
    combineReducers({
        employeeReducer,
        skillReducer,
        departmentReducer,
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
