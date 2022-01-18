import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { EmployeeList } from "./EmployeeList";
import { SkillList } from "./SkillList";
import { EmployeeForm } from "./EmployeeForm";
import { Avatar, ShellBar, ShellBarItem, StandardListItem } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/add.js";

export function ESTA() {
  const navigate = useNavigate();

  //Function for bringing user to dashboard when logo is clicked
  const handleLogoClick = () => {
    navigate("/dashboard");
  }; //End handleLogoClick

    return (
        <>
          <ShellBar
            logo={<img src="mindset_logo.png" />}
            profile={
              <Avatar>
                <img src="profilePictureExample.png" />
              </Avatar>
            }
            primaryTitle="Employee Skill Tracker App (ESTA)"
            onLogoClick={handleLogoClick}
            menuItems={<>
                <StandardListItem data-key="1">Employees</StandardListItem>
                <StandardListItem data-key="2">Skills</StandardListItem>
              </>}
          >
            <ShellBarItem icon="add" text="Add" />
          </ShellBar>

          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employeelist" element={<EmployeeList />} />
            <Route path="/employeeform" element={<EmployeeForm />} />
            <Route path="/skilllist" element={<SkillList />} />
            <Route path="/" element={<Navigate replace to="/dashboard" />} />
          </Routes>
        </>
      );
}