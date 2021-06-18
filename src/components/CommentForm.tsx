import React from 'react';

interface Props {
  value: string;
  error: string;
  onChange: (e: any) => void;
  onComment: () => void;
}

const CommentForm = ({ value, error, onChange, onComment }: Props) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="comment">Votre commentaire</label>
        <textarea
          id="content"
          className={"form-control" + (error && " is-invalid")}
          rows={3}
          value={value}
          onChange={onChange}
        ></textarea>
        {error && <p className="invalid-feedback">{error}</p>}
      </div>
      <button
        className="btn btn-primary"
        onClick={onComment}
      >Envoyer</button>
    </>
  );
};

export default CommentForm;