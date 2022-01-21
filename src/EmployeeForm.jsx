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
    FlexBox,
    InputType,
    Button,
    ComboBox,
    ComboBoxItem
} from "@ui5/webcomponents-react";

export function EmployeeForm () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let newEmployee = {
        fullName: '',
        startDate: '', 
        department: '', 
        directReport: '',  
        email: ''
    }

    const [addEmployee, setAddEmployee] = useState(newEmployee);

    const handleAddEmployeeChange = (e) => {
        setAddEmployee({...addEmployee, [e.target.name]: e.target.value});
    };

    const handleDepartmentChange = (e) => {
        setAddEmployee({...addEmployee, department: e.target.value});
    };

    const handleStartDateChange = (e) => {
        setAddEmployee({...addEmployee, startDate: e.detail.value});
    };

    const handleCancelButtonClick = () => {
        navigate('/employeelist');
    };

    const handleSubmitButtonClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_EMPLOYEE',
            payload: addEmployee
        });
        navigate('/employeelist');
    };

    return (
        <FlexBox>
            <Form 
                titleText={"Add New Employee"} 
                style={{ marginLeft: '150px', marginRight: '350px', marginTop: '50px', paddingBottom: '100px'}}>
                <FormGroup>
                    <FormItem label={'Full Name'}>
                        <Input 
                            style={{ width: '80%'}}
                            type={InputType.Text}
                            placeholder="Full Name"
                            name="fullName"
                            value={addEmployee.fullName}
                            onChange={handleAddEmployeeChange}
                        />
                    </FormItem>
                    <FormItem label={'Start Date'}>
                        <DatePicker 
                            style={{ width: '80%'}}
                            name="startDate"
                            value={addEmployee.startDate}
                            onChange={handleStartDateChange}
                        ></DatePicker>
                    </FormItem>
                    <FormItem label={'Department'}>
                        <ComboBox 
                            style={{ width: '80%'}}
                            placeholder="Department"
                            onChange={handleDepartmentChange}
                        >
                            <ComboBoxItem text="DevOps"/>
                            <ComboBoxItem text="Finance"/>
                        </ComboBox>
                    </FormItem>
                    <FormItem label={'Direct Report'}>
                        <Input 
                            style={{ width: '80%'}}
                            type={InputType.Text}
                            placeholder="Direct Report"
                            name="directReport"
                            value={addEmployee.directReport}
                            onChange={handleAddEmployeeChange}
                        />
                    </FormItem>
                    <FormItem label={'Email'}>
                        <Input 
                            style={{ width: '80%'}}
                            type={InputType.Text}
                            placeholder="Email"
                            name="email"
                            value={addEmployee.email}
                            onChange={handleAddEmployeeChange}
                        />
                    </FormItem>
                    <FormItem label={'Skills'}>
                        <MultiComboBox
                            style={{ width: '80%'}}
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
                    onClick={handleSubmitButtonClick}
                >Add Employee</Button>  
            </Form>
        </FlexBox>
    )
}