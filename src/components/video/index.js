
import { connect } from 'react-redux'
import React from 'react';

const Video = ({activeModule, activeLesson }) => (
   <div>
      <strong>Módulo {activeModule.title} </strong>
      <span>Lesson {activeLesson.title}</span>
   </div>
);

export default connect( state => ({
   activeModule: state.course.activeModule,
   activeLesson: state.course.activeLesson
}))(Video);
