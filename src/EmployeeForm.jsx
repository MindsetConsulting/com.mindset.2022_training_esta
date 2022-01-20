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
    Button
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

    const handleCancelButtonClick = () => {
        navigate('/employeelist');
    };

    const handleSubmitButtonClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_EMPLOYEE',
            payload: addEmployee
        });
        console.log(addEmployee);
    };

    return (
        <FlexBox>
            <Form titleText={"Add New Employee"} style={{ marginLeft: '150px', marginRight: '350px', marginTop: '50px'}}>
                <FormGroup>
                    <FormItem label={'Full Name'}>
                        <Input 
                            style={{ width: '80%'}}
                            type={InputType.Text}
                            placeholder="Full Name"
                            name="fullName"
                            onChange={handleAddEmployeeChange}
                            value={addEmployee.fullName}
                        />
                    </FormItem>
                    <FormItem label={'Start Date'}>
                        <DatePicker 
                            style={{ width: '80%'}}
                            name="startDate"
                            onChange={handleAddEmployeeChange}
                            value={addEmployee.startDate}
                        ></DatePicker>
                    </FormItem>
                    <FormItem label={'Department'}>
                        <Select 
                            style={{ width: '80%'}}
                            name="department"
                            onChange={handleAddEmployeeChange}
                            value={addEmployee.department}
                        >
                            <Option value="DevOps">DevOps</Option>
                            <Option value="Finance">Finance</Option>
                        </Select>
                    </FormItem>
                    <FormItem label={'Direct Report'}>
                        <Input 
                            style={{ width: '80%'}}
                            type={InputType.Text}
                            placeholder="Direct Report"
                            name="directReport"
                            onChange={handleAddEmployeeChange}
                            value={addEmployee.directReport}
                        />
                    </FormItem>
                    <FormItem label={'Email'}>
                        <Input 
                            style={{ width: '80%'}}
                            type={InputType.Text}
                            placeholder="Email"
                            name="email"
                            onChange={handleAddEmployeeChange}
                            value={addEmployee.email}
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
                    submits
                    onClick={handleSubmitButtonClick}
                >Add Employee</Button>  
            </Form>
        </FlexBox>
    )
}