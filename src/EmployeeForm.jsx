import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import { 
    Form,
    FormGroup,
    FormItem,
    Input,
    DatePicker,
    MultiComboBox,
    MultiComboBoxItem,
    Select,
    Option,
    FlexBox,
    InputType,
    Button,
} from "@ui5/webcomponents-react";

export function EmployeeForm () {
    const navigate = useNavigate();
    const dispatch= useDispatch();

    const [employeeToAdd, setEmployeeToAdd] = useState({ 
        fullName: '', 
        department: '', 
        directReport: '', 
        startDate: '', 
        email: ''
    });

    const handleFullNameChange = (e) => {
        setEmployeeToAdd({...employeeToAdd, fullName: e.target.value});
    }

    const handleCancelButtonClick = () => {
        navigate('/employeelist');
    }

    const handleSubmitButtonClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_EMPLOYEE',
        });
        console.log(employeeToAdd);
    }

    return (
        <FlexBox>
            <Form titleText={"Add New Employee"} style={{ margin: '50px'}}>
                <FormGroup titleText={'Employee Information'}>
                    <FormItem label={'Full Name'}>
                        <Input 
                            style={{ width: '75%'}}
                            type={InputType.Text}
                            placeholder="Full Name"
                            onChange={handleFullNameChange}
                            value={employeeToAdd.fullName}
                        />
                    </FormItem>
                    <FormItem label={'Start Date'}>
                        <DatePicker 
                            style={{ width: '75%'}}
                            onChange={(e) => setEmployeeToAdd.startDate(e.target.value)}
                            value={employeeToAdd.startDate}
                        ></DatePicker>
                    </FormItem>
                    <FormItem label={'Department'}>
                        <Select 
                            style={{ width: '75%'}}
                            onChange={(e) => setEmployeeToAdd.department(e.target.value)}
                            value={employeeToAdd.department}
                        >
                            <Option>DevOps</Option>
                            <Option>Finance</Option>
                        </Select>
                    </FormItem>
                    <FormItem label={'Direct Report'}>
                        <Input 
                            style={{ width: '75%'}}
                            type={InputType.Text}
                            placeholder="Direct Report"
                            onChange={(e) => setEmployeeToAdd.directReport(e.target.value)}
                            value={employeeToAdd.directReport}
                        />
                    </FormItem>
                    <FormItem label={'Email'}>
                        <Input 
                            style={{ width: '75%'}}
                            type={InputType.Text}
                            placeholder="Email"
                            onChange={(e) => setEmployeeToAdd.email(e.target.value)}
                            value={employeeToAdd.email}
                        />
                    </FormItem>
                    <FormItem label={'Skills'}>
                        <MultiComboBox
                            style={{ width: '75%'}}
                            placeholder="Skills"
                        >
                            <MultiComboBoxItem text='BS Finance'/>
                            <MultiComboBoxItem text='Fiori 1'/>
                            <MultiComboBoxItem text='AWS Certification'/>
                        </MultiComboBox>
                    </FormItem>
                </FormGroup>
                <Button
                    style={{ width: '150px' }}
                    onClick={handleCancelButtonClick}
                >Cancel</Button>
                <Button 
                    design={"Emphasized"} 
                    style={{ width: '150px' }}
                    submits
                    onClick={handleSubmitButtonClick}
                >Add Employee</Button>  
            </Form>
        </FlexBox>
    )
}