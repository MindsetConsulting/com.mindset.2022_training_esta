import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { 
    Form,
    FormGroup,
    FormItem,
    Input,
    FlexBox,
    InputType,
    Button,
    DatePicker,
    ComboBox,
    ComboBoxItem
} from "@ui5/webcomponents-react";

export function AssignedSkillForm () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const skillToAssign = useSelector(store => store.skillToAssignReducer);

    const handleCancelButtonClick = () => {
        skillToAssign.pop(0);
        navigate('/employeelist');
    };
    
    const handleAssignSkillClick = () => {
        alert('assigned');
        console.log(skillToAssign);
    }

    return (
        <FlexBox>
            <Form
                titleText="Assign Skill to Employee"
                style={{ marginLeft: '150px', marginRight: '350px', marginTop: '50px', paddingBottom: '100px'}}
            >
                <FormGroup>
                    <FormItem label={'Skill Title'}>
                        <Input 
                            style={{ width: '80%'}}
                            type={InputType.Text}
                            name="title"
                            value={skillToAssign[0].skillTitle}
                        />
                    </FormItem>
                    <FormItem label={'Skill Type'}>
                        <Input
                            style={{ width: '80%'}}
                            type={InputType.Text}
                            name="type"
                            value={skillToAssign[0].skillType}
                        />
                    </FormItem>
                    <FormItem label={'Assigning Institution'}>
                        <Input
                            style={{ width: '80%'}}
                            type={InputType.Text}
                            name="institution"
                            value={skillToAssign[0].institution}
                        />
                    </FormItem>
                    <FormItem label={'Date Acquired'}>
                        <DatePicker 
                            style={{ width: '80%'}}
                            name="startDate"
                            // value={addEmployee.startDate}
                            // onChange={handleAcquiredDateChange}
                        ></DatePicker>
                    </FormItem>
                    <FormItem label={'Renewal Status'}>
                        <ComboBox 
                            style={{ width: '80%'}}
                            placeholder="Status"
                            // onChange={handleRenewalStatusChange}
                        >
                              <ComboBoxItem text='Current' />
                              <ComboBoxItem text='Expired' />
                              <ComboBoxItem text='n/a' />
                        </ComboBox>
                    </FormItem>
                    <FormItem label={'Comfort Level'}>
                    <ComboBox 
                            style={{ width: '80%'}}
                            placeholder="Comfort Level"
                            // onChange={handleComfortLevelChange}
                        >
                              <ComboBoxItem text='Amateur' />
                              <ComboBoxItem text='Novice' />
                              <ComboBoxItem text='Intermediate' />
                              <ComboBoxItem text='Expert' />
                              <ComboBoxItem text='Master' />
                        </ComboBox>
                    </FormItem>
                </FormGroup>
                <Button
                    style={{ width: '150px' }}
                    onClick={handleCancelButtonClick}
                >Cancel</Button>
                <Button 
                    design={"Emphasized"} 
                    style={{ width: '150px' }}
                    onClick={handleAssignSkillClick}
                >Add Skill</Button>
            </Form>
        </FlexBox>
    )
}