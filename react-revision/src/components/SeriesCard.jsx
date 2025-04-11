import '../components/Netflix.css'
import style from './SeriesCard.module.css'
import styled from 'styled-components';

 export const SeriesCard = ({curElem})=>{
  const {id,img_url,name,rating,cast,description,genre,watch_url} = curElem;

  const Button = styled.button({
      marginBottom: "10px",
      padding: "10px 14px",
      border: "none",
      backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
      color: "black",
      cursor: "pointer",
  });
  return( 
    <>
    <div className={style['card-div']}>
     <div>
      <img className={style['card-img']} src={img_url} alt={name}/>
      </div>
      <div className={style['content-div']}>
      <h2>Name: {name}</h2>
      <h4>Rating: <span className={rating >= 8.5 ? style.green : style.yellow }>{rating}</span></h4>
      <p>Summary: {description}</p>
      <p>Cast: {cast}</p>
      <p>Genre: {genre}</p>
      <a href={watch_url} target='_blank'>
      <Button>Watch Now</Button>
      </a>
      </div>
      </div>
      </>)
}