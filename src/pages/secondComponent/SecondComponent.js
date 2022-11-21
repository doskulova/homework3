import React from "react";
import classes from "./secondComponent.module.css"

class SecondComponent extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
                <ul className={classes.title}>
                    <li>name: {this.props.userInfo.name}</li>
                    <li>age: {this.props.userInfo.age}</li>

                </ul>
            </>
        )
    }
}
export default SecondComponent;