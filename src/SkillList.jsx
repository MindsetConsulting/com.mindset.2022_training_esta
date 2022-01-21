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
  ComboBoxItem 
} from "@ui5/webcomponents-react";

export function SkillList() {
  return (
    <>
    <FilterBar>
      <FilterGroupItem>
        <Input placeholder="Search" />
      </FilterGroupItem>
      <FilterGroupItem>
        <ComboBox>
          <ComboBoxItem text="ComboBoxItem 1" />
          <ComboBoxItem text="ComboBoxItem 2" />
          <ComboBoxItem text="ComboBoxItem 3" />
        </ComboBox>
      </FilterGroupItem>
    </FilterBar>
    <Table style={{ margin: '20px'}}>
      <TableColumn style={{ width: '20rem'}}>
        <Label>Skill</Label>
      </TableColumn>
      <TableColumn>
        <Label>Type</Label>
      </TableColumn>
      <TableColumn>
        <Label>Department</Label>
      </TableColumn>
      <TableRow>

      </TableRow>
    </Table>
    </>
  );
}