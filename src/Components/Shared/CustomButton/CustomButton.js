import { Button, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles(() => ({
    buttonClass: {
        color: props => props.color,
        fontFamily: props =>props.fontFamily,
        fontSize: props => props.fontSize,
        fontWeight: props => props.fontWeight,
        letterSpacing: props => props.letterSpacing,
        lineHeight: props => props.lineHeight,
        textAlign: props => props.textAlign,
        boxSizing: props => props.boxSizing,
        height: props =>props.height,
        width: props => props.width,
        border: props => props.border,
        borderRadius: props => props.borderRadius,
        backgroundColor: props => props.backgroundColor,
        textTransform: props => props.textTransform,
        '&:hover': {
            backgroundColor: props => props.bgHover,
            color: props => props.colorHover
        }
    },
}))
function CustomButton({children, ...props}) {
    const { buttonClass } = useStyles(props);
  return (
    <Button className={`${buttonClass}`} onClick={props.click}>{children}</Button>

  );
}
export default CustomButton;