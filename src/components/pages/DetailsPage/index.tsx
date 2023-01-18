import { useEffect, FC, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { IGameDataDetails } from "types/game.interface";
import { ProductCardLoader, ErrorMessage } from "components/index";
import { DetailCard } from "./DetailCard";

import axios from "lib/axios";

import s from "./detailsPage.module.scss";

//не хотів для локального функціоналу робити окремий слайс

export const DetailsPage: FC = () => {
  const { cardId } = useParams();
  const [selectedCard, setSelectedCard] = useState<IGameDataDetails>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getSelectedCard = async () => {
      setIsLoading(true);
      await axios
        .get<IGameDataDetails>(`appDetail/${cardId}`)
        .then((gameInfo) => {
          setSelectedCard(gameInfo.data);
          setError(false);
        })
        .catch(() => {
          setError(true);
          navigate(-1);
        });
      setIsLoading(false);
    };

    getSelectedCard();
  }, [cardId]);

  if (error) {
    return <ErrorMessage textError="Failed to load game" />;
  }

  return (
    <div className={s.detailPage}>
      {isLoading === false && selectedCard ? (
        <DetailCard key={cardId} {...selectedCard} />
      ) : (
        <ProductCardLoader />
      )}
    </div>
  );
};
