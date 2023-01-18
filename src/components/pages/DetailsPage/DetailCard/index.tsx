import { FC } from "react";
import { ReactComponent as BackIcon } from "../../../../assets/product/back.svg";
import { IGameDataDetails } from "types/game.interface";

import s from "./detailCard.module.scss";
import { useNavigate } from "react-router";
export const DetailCard: FC<IGameDataDetails> = ({
  allReviews,
  description,
  developer,
  imgUrl,
  price,
  publisher,
  released,
  tags,
  title,
}) => {
  let navigate = useNavigate();

  return (
    <div key={title} className={s.detailCard}>
      <div className={s.detailCardContainer}>
        <img
          className={s.detailCardContainerImg}
          src={imgUrl}
          alt="thumbnail"
        />
        <div className={s.detailCardContainerInfo}>
          <div className={s.header}>
            <div className={s.top}>
              <p className={s.topTitle}>{title}</p>
              <div className={s.topReleased}>
                <p>Released:</p> <span>{released}</span>
              </div>
            </div>
            <div className={s.bottom}>
              <span className={s.bottomPrice}>{price}</span>
              <div className={s.bottomFeedback}>
                <p>feedback : </p>
                <span>{allReviews.summary.toLocaleLowerCase()}</span>
              </div>
            </div>
          </div>
          <div className={s.team}>
            <div className={s.teamPublisher}>
              <span>Publisher:</span>
              <a target="_blank" href={publisher.link} rel="noreferrer">
                {publisher.name}
              </a>
            </div>
            <div className={s.teamDeveloper}>
              <span>Developer:</span>
              <a href={developer.link} target="_blank" rel="noreferrer">
                {developer.name}
              </a>
            </div>
          </div>
          <div className={s.description}>
            <p> Description:</p>
            <div className={s.descriptionScroll}>
              <p className={s.descriptionScrollText}>{description}</p>
            </div>
          </div>
          <div className={s.tags}>
            <div className={s.tagsContainer}>
              {tags.map((item) => (
                <a href={item.url}>{`#${item.name}`}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => navigate(-1)} className={s.back}>
        <BackIcon />
      </button>
    </div>
  );
};
