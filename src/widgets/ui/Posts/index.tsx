'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Post } from '@/models/Post'
import { useStore } from '@/models/Post/api'
import Card from '@/shared/ui/card'
import InfiniteScroll from 'react-infinite-scroll-component'
type Props = {}

export default function Posts({}: Props) {
  // fetch and cache posts here
  const { data, error, getData } = useStore()
  const [localData, setLocalData] = useState<Post[] | null>([])
  let pageCounter = 1

  const fetchData = async () => {
    const fetchedData:Post[] | null = await getData(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageCounter}&_limit=10&_sort=id&_order=desc`
    )
    console.log(fetchedData)
    setLocalData((prevData) => prevData? prevData.concat(fetchedData || []) : [])
    // setLocalData(data)
    pageCounter++
    console.log(localData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const fetchMore = useCallback(() => {
    fetchData()
  }, [])

  if (!localData) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <div className="md:w-4/5 w-full bg-white rounded-t-3xl min-h-screen mt-20 p-10">
      {(localData?.length !=0) && (
        <div className="posts">
          <InfiniteScroll
            dataLength={localData ? localData.length : 0}
            next={fetchMore}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {localData?.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </InfiniteScroll>
        </div>
      )}
    </div>
  )
}
