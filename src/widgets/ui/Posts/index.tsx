'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Post } from '@/models/Post';
import { useStore } from '@/models/Post/api';
import Card from '@/shared/ui/card';
import { InfiniteLoader, List } from 'react-virtualized';

type Props = {};

export default function Posts({}: Props) {
  const { error, getPostsByPageDesc } = useStore();
  const [localData, setLocalData] = useState<Post[]>([]);
  const [pageCounter, setPageCounter] = useState(1);

  const fetchData = useCallback(async () => {
    const fetchedData: Post[] | null = await getPostsByPageDesc(pageCounter);
    console.log('fetchedData', fetchedData);
    if (!fetchedData || !fetchedData.length) return;
    setLocalData((prevData) => ([...prevData, ...fetchedData]));
    setPageCounter((prev) => prev + 1);
  }, [pageCounter]);

  useEffect(() => {
    fetchData();
  }, []);

  const renderFeedPost = useCallback(({ index }: { index: number }) => {
    console.log(localData);
    return <Card post={localData[index]} key={`post-${index}`} />;
  }, [localData]);

  const isRowLoaded = useCallback(({ index }: { index: number }) => !!localData[index], [localData]);

  if (!localData.length) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  return (
    <div className="md:w-4/5 w-full bg-white rounded-t-3xl min-h-screen mt-20 p-10">
      <div className="posts">
        <InfiniteLoader
          isRowLoaded={isRowLoaded}
          loadMoreRows={fetchData}
          rowCount={100}
        >
          {({ onRowsRendered, registerChild }) => (
            <List
              autoContainerWidth
              autoHeight
              autoWidth
              height={1400}
              onRowsRendered={onRowsRendered}
              ref={registerChild}
              rowCount={100}
              rowHeight={140}
              rowRenderer={renderFeedPost}
              width={1200}
            />
          )}
        </InfiniteLoader>
      </div>
    </div>
  );
}
