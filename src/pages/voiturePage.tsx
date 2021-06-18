import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Comment } from '../models/comment';
import { Voiture } from '../models/voiture';
import { voitureService } from '../services/voitureService';
import { commentService } from '../services/commentService';
import AuthContext from '../context/AuthContext';
import CommentContent from '../components/CommentContent';
import CommentForm from '../components/CommentForm';

import '../styles/comment.css';

interface Params {
  id: string;
}

const VoiturePage = ({ match }: RouteComponentProps<Params>) => {
  const { isAuthenticated } = useContext(AuthContext); // context
  const { id } = match.params; // id voiture
  const [voiture, setVoiture] = useState<Voiture>({
    _id: "",
    marque: "",
    price: 0,
    description: ""
  });
  // contenu commentaire
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  // commentaires
  const [comments, setComments] = useState<Comment[]>([]);
  const [show, setShow] = useState(false);

  // récuperer le voiture ayant id <id>
  const fetchVoiture = async (id: string) => {
    const data = await voitureService.getVoiture(id);
    setVoiture(data);
  };

  // commenter une voiture
  const handleComment = async () => {
    if (content.length === 0) {
      setError("Ce champ est réquis")
      return;
    }
    try {
      const comment: Comment = await commentService.comment(id, { content })
      setContent("");
      setComments(comments => [comment, ...comments])
    } catch (error) {

    }
  };

  // afficher les commentaires
  const showComment = async () => {
    const data = await commentService.getAll(id);
    setComments(data);
    setShow(true);
  };

  // contenu
  const handleChange = (e: any) => {
    setContent(e.target.value);
    setError("");
  }

  useEffect(() => {
    fetchVoiture(id);
  }, [id])

  return (
    <div>

      <div className="card">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">
            {voiture.marque}
            <p><strong>${voiture.price}</strong></p>
          </h5>
          <p className="card-text">{voiture.description}</p>

          {
            isAuthenticated && !show &&
            (
              <button
                className="btn btn-primary"
                onClick={showComment}
              >Afficher les commentaires</button>
            )
          }
        </div>
      </div>

      {
        isAuthenticated && show &&
        (
          <>
            <h3 className="mt-3">{comments.length} commentaire(s)</h3>

            <CommentForm
              value={content}
              error={error}
              onChange={e => handleChange(e)}
              onComment={handleComment} />

            {
              comments.map((c, i) => (
                <CommentContent key={i} comment={c} />
              ))
            }
          </>
        )
      }


    </div>
  )
};

export default VoiturePage;