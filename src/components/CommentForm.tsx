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
    <>
      <TextArea
        name="comment"
        label="Votre commentaire"
        value={value}
        onChange={onChange}
        error={error}
      />
      <button
        className="btn btn-sm btn-success"
        onClick={onComment}
      >Commenter</button>
    </>
  );
};

export default CommentForm;