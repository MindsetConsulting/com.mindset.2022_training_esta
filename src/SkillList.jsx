import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { 
  Label,
  Table,
  TableCell,
  TableColumn,
  TableRow,
  FilterBar,
  FilterGroupItem,
  Input,
  ComboBox,
  ComboBoxItem, 
  Title,
  Button,
  FlexBox,
  CheckBox
} from "@ui5/webcomponents-react";

export function SkillList() {
  const skills = useSelector(store => store.skillReducer);

  const [departmentFilter, setDepartmentFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const handleDepartmentFilter = (e) => {
    setDepartmentFilter({...departmentFilter, depFilter: e.target.value})
  }

  const handleTypeFilter = (e) => {
    setTypeFilter({...typeFilter, typeFilter: e.target.value})
  }

  return (
    <>
    <FilterBar>
      <FilterGroupItem>
        <Input placeholder="Search" />
      </FilterGroupItem>
      <FilterGroupItem>
        <ComboBox 
          placeholder="Skill Type"
          onChange={handleTypeFilter}
        >
          <ComboBoxItem text="University Degree" />
          <ComboBoxItem text="SAP Certification" />
          <ComboBoxItem text="License" />
        </ComboBox>
      </FilterGroupItem>
      <FilterGroupItem>
        <ComboBox 
          placeholder="Department"
          onChange={handleDepartmentFilter}
        >
          <ComboBoxItem text="DevOps" />
          <ComboBoxItem text="Finance" />
        </ComboBox>
      </FilterGroupItem>
      <FilterGroupItem>
        <Button design="Emphasized" style={{ width: '75px'}}>Search</Button>
      </FilterGroupItem>
    </FilterBar>
    <FlexBox justifyContent="SpaceBetween" style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px'}}>
      <Title>Skills</Title>
      <FlexBox>
        <Button design="Transparent">Create</Button>
        <Button design="Transparent">Edit</Button>
        <Button design="Transparent">Copy</Button>
        <Button design="Transparent">Delete</Button>
      </FlexBox>
    </FlexBox>
    <Table style={{ margin: '20px'}}>
      <TableColumn style={{ width: '3rem'}}>
        <CheckBox />
      </TableColumn>
      <TableColumn style={{ width: '20rem'}}>
        <Label>Skill</Label>
      </TableColumn>
      <TableColumn>
        <Label>Type</Label>
      </TableColumn>
      <TableColumn>
        <Label>Department</Label>
      </TableColumn>
      <TableColumn>
        <Label>Accrediting Institution</Label>
      </TableColumn>
      {skills.filter(item => item.department === departmentFilter.depFilter && item.type === typeFilter.typeFilter).map(skill =>
      <TableRow>
        <TableCell>
          <CheckBox/>
        </TableCell>
        <TableCell>
          <Label>{skill.title}</Label>
        </TableCell>
        <TableCell>
          <Label>{skill.type}</Label>
        </TableCell>
        <TableCell>
          <Label>{skill.department}</Label>
        </TableCell>
        <TableCell>
          <Label>{skill.institution}</Label>
        </TableCell>
      </TableRow>)}
    </Table>
    </>
  );
}