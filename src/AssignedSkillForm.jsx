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
    const employee = useSelector(store => store.selectedEmployeeReducer);

    const [skillToAssignChange, setSkillToAssignChange] = useState(skillToAssign[0]);
    const [employeeId, setEmployeeId] = useState(employee[0].id);

    const handleSkillToAssignChange = (e) => {
        setSkillToAssignChange({...skillToAssignChange, [e.target.name]: e.target.value})
    }

    const handleRenewalChange = (e) => {
        setSkillToAssignChange({...skillToAssignChange, renewal: e.target.value})
    }

    const handleComfortLevelChange = (e) => {
        setSkillToAssignChange({...skillToAssignChange, comfortLevel: e.target.value})
    }

    const handleDateAcquiredChange = (e) => {
        setSkillToAssignChange({...skillToAssignChange, dateAcquired: e.detail.value})
    }

    const handleCancelButtonClick = () => {
        skillToAssign.pop(0);
        navigate('/employeelist');
    };
    
    const handleAssignSkillClick = () => {
        dispatch({
            type: 'ASSIGN_SKILL',
            payload: {
                employeeId,
                skillToAssignChange
            }    
        });
        skillToAssign.pop(0);
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
                            name="skillTitle"
                            value={skillToAssign[0].skillTitle}
                            onChange={handleSkillToAssignChange}
                        />
                    </FormItem>
                    <FormItem label={'Skill Type'}>
                        <Input
                            style={{ width: '80%'}}
                            type={InputType.Text}
                            name="skillType"
                            value={skillToAssign[0].skillType}
                            onChange={handleSkillToAssignChange}
                        />
                    </FormItem>
                    <FormItem label={'Assigning Institution'}>
                        <Input
                            style={{ width: '80%'}}
                            type={InputType.Text}
                            name="institution"
                            value={skillToAssign[0].institution}
                            onChange={handleSkillToAssignChange}
                        />
                    </FormItem>
                    <FormItem label={'Date Acquired'}>
                        <DatePicker 
                            style={{ width: '80%'}}
                            name="startDate"
                            value={skillToAssign[0].dateAcquired}
                            onChange={handleDateAcquiredChange}
                        ></DatePicker>
                    </FormItem>
                    <FormItem label={'Renewal Status'}>
                        <ComboBox 
                            style={{ width: '80%'}}
                            placeholder="Status"
                            name="renewal"
                            onChange={handleRenewalChange}
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
                            name="comfortLevel"
                            onChange={handleComfortLevelChange}
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