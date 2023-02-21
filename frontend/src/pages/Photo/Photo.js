import './Photo.scss'

import { uploads } from '../../utils/config'


//components
import Message from '../../components/Message'
import { Link } from 'react-router-dom'
import PhotoItem from '../../components/PhotoItem'

//hooks
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

//redux
import { getPhoto, like } from '../../slices/photoSlice'
import LikeContainer from '../../components/LikeContainer'

export default function Photo() {
  const {id} = useParams();
  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.auth);
  const {photo, loading, error, message} = useSelector((state) => state.photo);
  //comentários

  //Load photo data
  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  const handleLike = () => {
    dispatch(like(photo._id));
  };
  

  if(loading) {
    return <p>Carregando...</p>
  }
  return (
    <div className='photo'>
      <PhotoItem photo={photo} />
      <LikeContainer 
        photo={photo} 
        user={user}
        handleLike={handleLike}
      />
      <div className="message__container">
        {error && <Message msg={error} type="error" />}
        {message && <Message msg={message} type="success" />}
      </div>
    </div>
  )
}