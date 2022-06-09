import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import trash from '../trash_icon.png';

//CL: Task component
function Task(props) {
  const {task} = props;
  var taskClass = classNames('task', {'isComplete': task.isComplete})

    const handleChange =  (e) => {
      const { task, onComplete } = this.props;
      if (e.target.checked){
        onComplete(task.id);
      }
    }

    const handleRemove = () => {
      const { task, onRemove } = this.props;

      onRemove(task.id);
    }

    return (
      <div className = {taskClass}>
        <input type="checkbox" 
                className='checkBox'
                checked={task.isComplete}
                onChange={handleChange}>
        </input>
        <li className = 'taskItem'>
          {task.text}
        </li>
        <input type='image' src={trash} className='trashBtn' onClick={handleRemove}></input>
      </div>
    );
}

Task.propTypes = {
  task: PropTypes.shape({
    isComplete: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onComplete: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export {Task};