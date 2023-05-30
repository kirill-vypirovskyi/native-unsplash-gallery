import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { loadInitialPhotos } from "../app/slice";

export const useInitialLoad = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadInitialPhotos());
  }, []);
};