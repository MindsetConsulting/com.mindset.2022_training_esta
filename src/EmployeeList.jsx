import React from "react";
import { useState } from "react";
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
  RatingIndicator
} from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const skillData = [{
  title: 'BS Finance',
  type: 'University Degree',
  institution: 'University of Somewhere',
  dateAcquired: 'May 2004',
  renewal: 'none',
  rating: 5
}, {
  title: 'SAP Fiori 1',
  type: 'Certification',
  institution: 'SAP',
  dateAcquired: 'January 2020',
  renewal: 'January 2022',
  rating: 2
}];

export function EmployeeList() {
  const navigate = useNavigate();

  const employees = useSelector(store => store.employeeReducer);

  const [layout, setLayout] = useState(FCLLayout.OneColumn);
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
  const [selectedSkill, setSelectedSkill] = useState(skillData[0]);

  const onStartColumnClick = e => {
    setSelectedEmployee(employees.find(item => item.fullName === e.detail.item.dataset.fullname));
    setLayout(FCLLayout.TwoColumnsMidExpanded);
  };

  const onMiddleColumnClick = e => {
    setSelectedSkill(skillData.find(item => item.title === e.detail.item.dataset.title));
    setLayout(FCLLayout.ThreeColumnsEndExpanded);
  };

  const handleAddButtonClick = () => {
    navigate('/employeeform');
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
            onClick={handleAddButtonClick}
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
          />
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
        {skillData.map(item => 
          <StandardListItem data-title={item.title}>
            {item.title}
          </StandardListItem>)}
      </List>
      </>} 
      
      endColumn={<>
        <Toolbar design={ToolbarDesign.Solid}>
          <Title style={{ marginLeft: '12px' }}>{selectedSkill.title}</Title>
          <ToolbarSpacer />
          <Button 
            icon="decline" 
            design={ButtonDesign.Transparent} 
            onClick={() => { setLayout(FCLLayout.TwoColumnsMidExpanded);}} 
          />
        </Toolbar>
        <Card 
          avatar={<Avatar icon="person-placeholder" />} 
          titleText={selectedSkill.title}
        >
          <FlexBox
            direction={FlexBoxDirection.Column} 
            style={{ marginLeft: '12px' }}
          >
            <FlexBox style={{ margin: '12px' }}>
              <Label>Type of Certification:</Label>
              <Text style={{ marginLeft: '2px'}}>
                {selectedSkill.type}
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
              <Label>Expertise Level:</Label>
              <RatingIndicator
                readonly
                value={selectedSkill.rating}
              />
            </FlexBox>
          </FlexBox>

        </Card>
      </>} />;
    </>
  );
}