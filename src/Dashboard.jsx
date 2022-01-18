import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Text } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";

export function Dashboard() {
    const navigate = useNavigate();
    
    //Function for handling EMPLOYEE card being clicked
    const handleEmployeeCardClick = () => {
        navigate("/employeelist");
    }; //End handleEmployeeCardClick

    //Function for handling SKILLS card being clicked
    const handleSkillCardClick = () => {
        navigate("/skilllist");
    }; //End handleSkillCardClick


  return (
    <div>
        <Card
            interactive
            onClick={handleEmployeeCardClick}
            style={{ width: "300px" }}
        >
            <Text style={spacing.sapUiContentPadding}>
                EMPLOYEES
            </Text>
        </Card>
        <Card 
            interactive
            onClick={handleSkillCardClick}
            style={{ width: "300px" }}
        >
            <Text style={spacing.sapUiContentPadding}>
                SKILLS
            </Text>
        </Card>
    </div>
  );
}