import React, { useCallback, useEffect, useState } from "react";
import { Photo } from "../../types/Photo";
import { FlatList } from "react-native";
import { GalleryItem } from "./GalleryItem";
import { useScreenValues } from "../../hooks/useScreenValues";
import { styles } from "./GalleryStyles";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadMorePhotos } from "../../app/slice";
import { ListType } from "../../types/ListType";

type Props = {
  photos: Photo[];
};

export const Gallery = ({ photos }: Props) => {
  const [numColumns, setNumColumns] = useState(2);
  const [key, setKey] = useState(1);
  const dispatch = useAppDispatch();
  const { listType } = useAppSelector(state => state.photos);

  const loadMore = () => {
    if (photos.length === 0) {
      return;
    }

    dispatch(loadMorePhotos());
  };

  useEffect(() => {
    setNumColumns(listType === ListType.TILES ? 2 : 1);
    setKey(prevKey => prevKey + 1);
  }, [listType])

  const keyExtractor = (photo: Photo) => photo.id;

  const renderItem = ({ item }: { item: Photo }) => <GalleryItem item={item} />;

  return (
    <FlatList
      data={photos}
      numColumns={numColumns}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      onEndReached={loadMore}
      onEndReachedThreshold={0.9}
      key={key}
    />
  );
};
