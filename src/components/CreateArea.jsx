import AddIcon from '@mui/icons-material/Add';
import { Zoom } from '@mui/material';
import { useState } from 'react';

function CreateArea(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    function expand() {
        setIsExpanded(true);
    }

  return (
    <div>
      <form>
          {isExpanded && (
              <input
                  name="title"
                  placeholder="Title"
                  value={props.note.title}
                  onChange={props.handleInput}
              />
          )}

          <textarea
              name="content"
              onClick={expand}
              placeholder="Take a note..."
              value={props.note.content}
              onChange={props.handleInput}
              rows={isExpanded ? 3 : 1}
          />
          <Zoom in={isExpanded}>
            <button onClick={props.addNote}><AddIcon /></button>
          </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
