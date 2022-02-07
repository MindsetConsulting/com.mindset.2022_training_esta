import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { 
    Form,
    FormGroup,
    FormItem,
    Input,
    FlexBox,
    InputType,
    Button,
    ComboBox,
    ComboBoxItem
} from "@ui5/webcomponents-react";

export function AssignedSkillForm () {
    return (
        <h1>Assign some skills here!</h1>
    )
}