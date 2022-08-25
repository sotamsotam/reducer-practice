import React from "react";

const Student = (props) => {
    let id = props.id
    return (
      <div>
        <span
            style={{
                textDecoration: props.isHere ? 'line-through' : 'none',
                color: props.isHere ? 'gray' : 'black'
            }}
            onClick={() => {
                props.dispatch({type: 'mark-student', payload: {id}})
            }}
        >{props.name}</span>
        <button onClick={() => {
            props.dispatch({type: 'delete-student', payload: {id}})
        }}>삭제</button>
      </div>
    );
}

export default Student;