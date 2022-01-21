import React from "react";
import { useSelector } from "react-redux";
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
      {skills.map(skill =>
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