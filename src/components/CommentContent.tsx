import React from 'react';
import { Comment } from '../models/comment';

interface Props {
  comment: Comment
}

const CommentContent = ({ comment }: Props) => {
  return (
    <div className="row mt-3">
      <h4 className="col-sm-3 comment">
        <strong>{comment.owner.pseudo}</strong>
        commenté le
        <strong>
        {new Date(comment.createdAt).toLocaleString(undefined, {
          dateStyle: 'medium',
          timeStyle: 'short',
        })}
        </strong>
      </h4>
      <div className="col-sm-9">
        <p>{comment.content}</p>
      </div>
    </div>
  )
};

export default CommentContent;