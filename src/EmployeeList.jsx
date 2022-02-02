import React from "react";
import { useState, useRef } from "react";
import { 
  FlexibleColumnLayout, 
  FCLLayout,
  FlexBox,
  FlexBoxDirection,
  Toolbar,
  ToolbarDesign,
  ToolbarSpacer,
  List,
  StandardListItem,
  Text,
  Avatar,
  AvatarSize,
  Button,
  ButtonDesign,
  Title,
  Label,
  Card,
  SelectDialog,
  FilterBar,
  FilterGroupItem,
  Input
} from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export function EmployeeList() {
  const navigate = useNavigate();
  const dialogRef = useRef(null);

  const employees = useSelector(store => store.employeeReducer);
  const skills = useSelector(store => store.skillReducer);

  const [layout, setLayout] = useState(FCLLayout.OneColumn);
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
  const [selectedSkill, setSelectedSkill] = useState(employees[0].assignedSkills[0]);
  const [skillToAssign, setSkillToAssign] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  const onStartColumnClick = e => {
    setSelectedEmployee(employees.find(item => item.fullName === e.detail.item.dataset.fullname));
    setLayout(FCLLayout.TwoColumnsMidExpanded);
  };

  const onMiddleColumnClick = e => {
    setSelectedSkill(selectedEmployee.assignedSkills.find(item => item.skillTitle === e.detail.item.dataset.skilltitle));
    setLayout(FCLLayout.EndColumnFullScreen);
  };

  const selectSkillToAssign = e => {
    setSkillToAssign(skills.find(item => item.skillTitle === e.detail.selectedItems[0].dataset.skilltitle));
    console.log(skillToAssign);
  };

  const handleAddEmployeeClick = () => {
    navigate('/employeeform');
  };

  const handleAddSkillClick = () => {
    dialogRef.current.show();
  };

  const handleClose = () => {
    dialogRef.current.close();
  };

  const handleSearchFilter = (e) => {
    setSearchFilter({...searchFilter, searchFilter: e.target.value})
  };

  const handleDeleteEmployeeClick = () => {
    alert('Deleting Employee!!!')
  }

  return (
    <>
    <FlexibleColumnLayout 
      style={{ height: '600px' }} 
      layout={layout}

      startColumn={<>
        <Toolbar>
          <Title style={{ marginLeft: '12px' }}>Employees</Title>
          <ToolbarSpacer />
          <Button
            icon="add"
            design={ButtonDesign.Transparent}
            onClick={handleAddEmployeeClick}
          />
        </Toolbar>
        <List 
          onItemClick={onStartColumnClick}>
          {employees.map(item => 
            <StandardListItem 
              description={item.department} 
              data-fullname={item.fullName}>
                {item.fullName}
            </StandardListItem>)}
        </List>
      </>} 

      midColumn={<>
        <Toolbar design={ToolbarDesign.Solid}>
          <Title style={{ marginLeft: '12px' }}>{selectedEmployee.fullName}</Title>
          <ToolbarSpacer />
          <Button
            icon="add"
            design={ButtonDesign.Transparent}
            onClick={handleAddSkillClick}
          />
          <SelectDialog 
            ref={dialogRef}
            headerText="Assign Skill to Employee"
            mode="SingleSelect"
            onConfirm={selectSkillToAssign}
            footer={ 
              <Button onClick={handleClose}>Close</Button>
            }
          >
              {skills.map(skill =>
                <StandardListItem 
                  description={skill.department} 
                  data-skilltitle={skill.title}>
                    {skill.title}
                </StandardListItem>
              )}
          </SelectDialog>
          <Button 
            icon="decline"
            design={ButtonDesign.Transparent} 
            onClick={() => {setLayout(FCLLayout.OneColumn);}} 
          />
        </Toolbar>

        <Toolbar style={{ height: '200px' }}>
          <Avatar 
            icon="video" 
            size={AvatarSize.XL} 
            style={{ marginLeft: '12px' }} 
          />
          <FlexBox 
            direction={FlexBoxDirection.Column} 
            style={{ marginLeft: '6px' }}
          >
            <FlexBox>
              <Label>Department:</Label>
              <Text style={{ marginLeft: '2px'}}>
                {selectedEmployee.department}
              </Text>
            </FlexBox>

            <FlexBox>
              <Label>Title:</Label>
              <Text style={{ marginLeft: '2px'}}>
                {selectedEmployee.title}
              </Text>
            </FlexBox>

            <FlexBox>
              <Label>Role:</Label>
              <Text style={{ marginLeft: '2px'}}>
                {selectedEmployee.role}
              </Text>
            </FlexBox>

            <FlexBox>
              <Label>Industries:</Label>
              <Text style={{ marginLeft: '2px'}}>
                {selectedEmployee.industries}
              </Text>
            </FlexBox>

            <FlexBox>
              <Label>Direct Report:</Label>
              <Text style={{ marginLeft: '2px' }}>
                {selectedEmployee.directReport}
              </Text>
            </FlexBox>

            <FlexBox>
              <Label>Start Date:</Label>
              <Text style={{ marginLeft: '2px' }}>
                {selectedEmployee.startDate}
              </Text>
            </FlexBox>

            <FlexBox>
              <Label>Email:</Label>
              <Text style={{ marginLeft: '2px' }}>
                {selectedEmployee.email}
              </Text>
            </FlexBox>
        </FlexBox>          
      </Toolbar>
      <List 
        headerText="Skills" 
        onItemClick={onMiddleColumnClick}
      >
        {selectedEmployee.assignedSkills.map(item => 
          <StandardListItem data-skilltitle={item.skillTitle}>
            {item.skillTitle}
          </StandardListItem>)}
      </List>
      <Button
        design="Negative"
        style={{ marginTop: '100px'}}
        onClick={handleDeleteEmployeeClick}
      >DELETE EMPLOYEE</Button>
      </>} 
      
      endColumn={<>
        <Toolbar design={ToolbarDesign.Solid}>
          <Title style={{ marginLeft: '12px' }}>{selectedSkill.skillTitle}</Title>
          <ToolbarSpacer />
          <Button 
            icon="decline" 
            design={ButtonDesign.Transparent} 
            onClick={() => { setLayout(FCLLayout.TwoColumnsMidExpanded);}} 
          />
        </Toolbar>
        <Card 
          avatar={<Avatar icon="person-placeholder" />} 
          titleText={selectedSkill.skillTitle}
        >
          <FlexBox
            direction={FlexBoxDirection.Column} 
            style={{ marginLeft: '12px' }}
          >
            <FlexBox style={{ margin: '12px' }}>
              <Label>Type of Certification:</Label>
              <Text style={{ marginLeft: '2px'}}>
                {selectedSkill.skillType}
              </Text>
            </FlexBox>
            <FlexBox style={{ margin: '12px' }}>
              <Label>Accrediting Institution:</Label>
              <Text style={{ marginLeft: '2px'}}>
                {selectedSkill.institution}
              </Text>
            </FlexBox>
            <FlexBox style={{ margin: '12px' }}>
              <Label>Date Acquired:</Label>
              <Text style={{ marginLeft: '2px'}}>
                {selectedSkill.dateAcquired}
              </Text>
            </FlexBox>
            <FlexBox style={{ margin: '12px' }}>
              <Label>Renewal:</Label>
              <Text style={{ marginLeft: '2px'}}>
                {selectedSkill.renewal}
              </Text>
            </FlexBox>
            <FlexBox style={{ margin: '12px' }}>
              <Label>Comfort Level:</Label>
              <Text style={{ marginLeft: '2px'}}>
                {selectedSkill.comfortLevel}
              </Text>
            </FlexBox>
          </FlexBox>
        </Card>
      </>} />;
    </>
  );
}