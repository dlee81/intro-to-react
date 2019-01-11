import React, { Component } from 'react';

 class ToDo extends Component {
   render() {
     return (
       //<li> A todo will go here </li>
       <li>{ this.props.description }</li>
        <li>
         <input type="checkbox" checked={ this.props.isCompleted } />
         <span>{ this.props.description }</span>
       </li>
     );
   }
 }

 export default ToDo;