import './PhotoItem.scss';


import { uploads } from '../utils/config';
import { Link } from 'react-router-dom';

export default function PhotoItem({ photo }) {
  return (
    <div className="photoItem">
      {photo.image && (
        <img src={`${uploads}/photos/${photo.image}`} alt={photo.title} />
      )}
      <h2>{photo.title}</h2>
      <p className="photoItem__author">
        Publicada por: <Link to={`users/${photo.userId}`}>{photo.userName}</Link>
      </p>
    </div>
  )
}
