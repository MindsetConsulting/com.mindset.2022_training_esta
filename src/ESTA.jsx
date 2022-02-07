import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { EmployeeList } from "./EmployeeList";
import { SkillList } from "./SkillList";
import { EmployeeForm } from "./EmployeeForm";
import { SkillForm } from "./SkillForm";
import { AssignedSkillForm } from "./AssignedSkillForm";
import { Avatar, ShellBar, StandardListItem } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/add.js";

export function ESTA() {
  const navigate = useNavigate();

  //Function for bringing user to dashboard when logo is clicked
  const handleLogoClick = () => {
    navigate("/dashboard");
  }; //End handleLogoClick

  const handleEmployeesClick = (e) => {
    navigate(e.detail.item.dataset.key);
  };

    return (
        <>
          <ShellBar
            logo={<img src="mindset_logo.png" alt="Mindset Logo"/>}
            profile={
              <Avatar>
                <img src="profilePictureExample.png" alt="Profile Avatar"/>
              </Avatar>
            }
            primaryTitle="Employee Skill Tracker App (ESTA)"
            onLogoClick={handleLogoClick}
            onMenuItemClick={handleEmployeesClick}
            menuItems={<>
                <StandardListItem data-key="/employeelist">Employees</StandardListItem>
                <StandardListItem data-key="/skilllist">Skills</StandardListItem>
              </>}
          >
          </ShellBar>

          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employeelist" element={<EmployeeList />} />
            <Route path="/employeeform" element={<EmployeeForm />} />
            <Route path="/skilllist" element={<SkillList />} />
            <Route path="/skillform" element={<SkillForm />} />
            <Route path="/assignskill" element={<AssignedSkillForm />} />
            <Route path="/" element={<Navigate replace to="/dashboard" />} />
          </Routes>
        </>
      );
}