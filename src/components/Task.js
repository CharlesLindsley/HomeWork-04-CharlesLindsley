import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import trash from '../trash_icon.png';

//CL: Task component
class Task extends React.PureComponent {
    static propTypes = {
      task: PropTypes.shape({
        isComplete: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
      onComplete: PropTypes.func.isRequired,
      onRemove: PropTypes.func.isRequired
    };

    handleChange =  (e) => {
      const { task, onComplete } = this.props;
      if (e.target.checked){
        onComplete(task.id);
      }
    }

    handleRemove = () => {
      const { task, onRemove } = this.props;

      onRemove(task.id);
    }

    render() {
      //CL: Hand the task so we can access its properties
      const { task } = this.props;
      var taskClass = classNames('task', {'isComplete': task.isComplete})
      return (
        <div className = {taskClass}>
          <input type="checkbox" 
                 className='checkBox'
                 checked={task.isComplete}
                 onChange={this.handleChange}>
          </input>
          <li className = 'taskItem'>
            {task.text}
          </li>
          <input type='image' src={trash} className='trashBtn' onClick={this.handleRemove}></input>
        </div>
      );
    }
}

export {Task};