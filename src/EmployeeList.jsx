import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
import "@ui5/webcomponents-icons/dist/AllIcons.js"


export function EmployeeList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    const assignedSkill = {
      id: e.detail.selectedItems[0].dataset.skillid,
      skillTitle: e.detail.selectedItems[0].dataset.skilltitle,
      skillType: e.detail.selectedItems[0].dataset.skilltype,
      institution: e.detail.selectedItems[0].dataset.institution,
    }
    selectedEmployee.assignedSkills.push(assignedSkill);
    console.log('Assigned skills are:', selectedEmployee.assignedSkills);
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

  const handleEditEmployeeClick = () => {
    alert('Editing Employee!!!')
  };

  const handleDeleteEmployeeClick = () => {
    dispatch({
      type: 'DELETE_EMPLOYEE',
      payload: selectedEmployee.id
    });
    setLayout(FCLLayout.OneColumn);
  };

  const handleEditSkillClick = () => {
    alert('Editing Skill!!!')
  };

  const handleRemoveSkillClick = () => {
    dispatch({
      type: 'REMOVE_ASSIGNED_SKILL',
      payload: {
        selectedEmployeeId: selectedEmployee.id,
        selectedSkillId: selectedSkill.id
    }});
    console.log('ID is', selectedSkill.id);
  };

  const handleSearchFilter = (e) => {
    setSearchFilter({...searchFilter, searchFilter: e.target.value})
  };

  

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
          <Button
            icon="sap-icon://edit"
            design={ButtonDesign.Transparent}
            onClick={handleEditEmployeeClick}
          />
          <Button
            icon="sap-icon://delete"
            design={ButtonDesign.Transparent}
            onClick={handleDeleteEmployeeClick}
          />
          <SelectDialog 
            ref={dialogRef}
            headerText="Assign Skill to Employee"
            mode="SingleSelect"
            onSearch={handleSearchFilter}
            onConfirm={selectSkillToAssign}
            footer={ 
              <Button onClick={handleClose}>Close</Button>
            }
          >
              {skills.map(skill =>
                <StandardListItem 
                  description={skill.department} 
                  data-skillid={skill.id}
                  data-skilltitle={skill.title}
                  data-skilltype={skill.type}
                  data-institution={skill.institution}
                >
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
      </>} 
      
      endColumn={<>
        <Toolbar design={ToolbarDesign.Solid}>
          <Title style={{ marginLeft: '12px' }}>{selectedSkill.skillTitle}</Title>
          <ToolbarSpacer />
          <Button
            icon="sap-icon://edit"
            design={ButtonDesign.Transparent}
            onClick={handleEditSkillClick}
          />
          <Button
            icon="sap-icon://delete"
            design={ButtonDesign.Transparent}
            onClick={handleRemoveSkillClick}
          />
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