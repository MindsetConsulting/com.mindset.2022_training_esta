import React from "react";
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
  return (
    <>
    <FilterBar>
      <FilterGroupItem>
        <Input placeholder="Search" />
      </FilterGroupItem>
      <FilterGroupItem>
        <ComboBox placeholder="Skill Type">
          <ComboBoxItem text="ComboBoxItem 1" />
          <ComboBoxItem text="ComboBoxItem 2" />
          <ComboBoxItem text="ComboBoxItem 3" />
        </ComboBox>
      </FilterGroupItem>
      <FilterGroupItem>
        <ComboBox placeholder="Department">
          <ComboBoxItem text="ComboBoxItem 1" />
          <ComboBoxItem text="ComboBoxItem 2" />
          <ComboBoxItem text="ComboBoxItem 3" />
        </ComboBox>
      </FilterGroupItem>
    </FilterBar>
    <FlexBox justifyContent="SpaceBetween" style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px'}}>
      <Title>Skills</Title>
      <FlexBox>
        <Button design="Transparent">Create</Button>
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
      <TableRow>
        <TableCell>
          <CheckBox />
        </TableCell>
        <TableCell>
          <Label>Bachelor of Science</Label>
        </TableCell>
        <TableCell>
          <Label>University Degree</Label>
        </TableCell>
        <TableCell>
          <Label>Finance</Label>
        </TableCell>
        <TableCell>
          <Label>University of Somewhere</Label>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <CheckBox />
        </TableCell>
        <TableCell>
          <Label>SAP Fiori Level 1</Label>
        </TableCell>
        <TableCell>
          <Label>SAP Certification</Label>
        </TableCell>
        <TableCell>
          <Label>DevOps</Label>
        </TableCell>
        <TableCell>
          <Label>SAP</Label>
        </TableCell>
      </TableRow>
    </Table>
    </>
  );
}