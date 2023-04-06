import { useContext } from 'react';
import { useParams, Outlet, Navigate } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContext';

import { RecipeContext } from '../../contexts/RecipeContext';

export const GameOwner = ({
    children,
}) => {
    const { detailsId } = useParams();
    const { getRecipe } = useContext(RecipeContext);
    const { userId } = useContext(GlobalContext);

    const currentGame = getRecipe(detailsId);

    if (currentGame && currentGame._ownerId !== userId) {
        return <Navigate to={`/catalog/${detailsId}`} replace />
    }

    return children ? children : <Outlet />
};