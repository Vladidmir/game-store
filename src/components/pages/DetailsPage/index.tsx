import { useEffect, FC, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { IGameDataDetails } from "types/game.interface";
import { ProductCardLoader, ErrorMessage } from "components/index";
import { DetailCard } from "./DetailCard";
import axios from "lib/axios";
import s from "./detailsPage.module.scss";

export const DetailsPage: FC = () => {
  const { cardId } = useParams();
  const [selectedCard, setSelectedCard] = useState<IGameDataDetails>();
  const [loadingError, setLoadingError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getSelectedCard = async () => {
      try {
        const gameInfo = await axios.get<IGameDataDetails>(
          `appDetail/${cardId}`
        );
        setSelectedCard(gameInfo.data);
        setLoadingError(false);
      } catch {
        setLoadingError(true);
        navigate(-1);
      }
    };

    getSelectedCard();
  }, [cardId, navigate]);

  if (loadingError) {
    return <ErrorMessage textError="Failed to load game" />;
  }

  return (
    <div className={s.detailPage}>
      {selectedCard ? (
        <DetailCard key={cardId} {...selectedCard} />
      ) : (
        <ProductCardLoader />
      )}
    </div>
  );
};
