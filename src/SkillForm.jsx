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
    ComboBox,
    ComboBoxItem
} from "@ui5/webcomponents-react";

export function SkillForm () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const departments = useSelector(store => store.departmentReducer);

    let newSkill = {
        title: '',
        type: '',
        department: '',
        institution: ''
    }

    const [addSkill, setAddSkill] = useState(newSkill);

    const handleAddSkillChange = (e) => {
        setAddSkill({...addSkill, [e.target.name]: e.target.value});
    }

    const handleDepartmentChange = (e) => {
        setAddSkill({...addSkill, department: e.target.value});
    };

    const handleCancelButtonClick = () => {
        navigate('/skilllist');
    };

    const handleSubmitButtonClick = (event) => {
        event.preventDefault();
        console.log(addSkill);
    };


    return (
        <FlexBox>
            <Form
                titleText="Add a New Skill"
                style={{ marginLeft: '150px', marginRight: '350px', marginTop: '50px', paddingBottom: '100px'}}
            >
                <FormGroup>
                    <FormItem label={'Title'}>
                        <Input 
                            style={{ width: '80%'}}
                            type={InputType.Text}
                            placeholder="Skill Title"
                            name="title"
                            value={addSkill.title}
                            onChange={handleAddSkillChange}
                        />
                    </FormItem>
                    <FormItem label={'Type'}>
                        <Input 
                            style={{ width: '80%'}}
                            type={InputType.Text}
                            placeholder="Skill Type"
                            name="type"
                            value={addSkill.type}
                            onChange={handleAddSkillChange}
                        />
                    </FormItem>
                    <FormItem label={'Department'}>
                        <ComboBox 
                            style={{ width: '80%'}}
                            placeholder="Department"
                            onChange={handleDepartmentChange}
                        >
                            {departments.map(dep =>
                              <ComboBoxItem text={dep.name} />  
                            )}
                        </ComboBox>
                    </FormItem>
                    <FormItem label={'Institution'}>
                        <Input 
                            style={{ width: '80%'}}
                            type={InputType.Text}
                            placeholder="Accrediting Institution"
                            name="institution"
                            value={addSkill.institution}
                            onChange={handleAddSkillChange}
                        />
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
                >Add Skill</Button>
            </Form>
        </FlexBox>
    )
}