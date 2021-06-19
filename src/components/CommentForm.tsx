import React from 'react';
import { TextArea } from './TextArea';

interface Props {
  value: string;
  error: string;
  onChange: (e: any) => void;
  onComment: () => void;
}

const CommentForm = ({ value, error, onChange, onComment }: Props) => {
  return (
    <div className="row">
      <div className="col-md-9">
        <TextArea
          name="comment"
          value={value}
          placeholder="Votre commentaire"
          onChange={onChange}
          error={error}
        />
      </div>
      <div className="col-md-3">
        <button
          className="btn btn-sm btn-success"
          onClick={onComment}
        >Commenter</button>
      </div>
    </div>
  );
};

export default CommentForm;