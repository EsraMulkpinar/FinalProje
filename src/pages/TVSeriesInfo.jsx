import React, { useEffect } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loading from '../components/shared/Loading/Loading'
import avatarIcon from '../assets/icons/avatar-icon.json'
import TVInfoSlider from '../components/TVSeriesInfo/TVInfoSlider'
import {
  getReviewsTV,
  getSimilarTV,
  getTVCast,
  getTVDetails,
  getTVideo,
} from '../reducers/movieReducer'
import { BiCameraMovie } from 'react-icons/bi'
import { MdLanguage } from 'react-icons/md'

import Lottie from 'lottie-react'

const TVSeriesInfo = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const { tvDetails, tvCast, tvVideo, reviewTV, similarTV } = useSelector(
    (state) => state.movie,
  )
  console.log(tvDetails)
  useEffect(() => {
    dispatch(getTVDetails(params.id))
    dispatch(getTVCast(params.id))
    dispatch(getTVideo(params.id))
    dispatch(getReviewsTV(params.id))
    dispatch(getSimilarTV(params.id))
  }, [params.id])
  if (tvDetails && tvCast && tvVideo && similarTV) {
    return (
      <div className="my-28">
        <div className="container mx-auto bg-[#0F172A] rounded-3xl py-5 px-10 ">
          <div className="text-3xl font-bold">{tvDetails.original_name}</div>
          <div className="lg:flex  gap-4 items-start my-4  ">
            <div className="flex-1">
              {tvVideo ? <LiteYouTubeEmbed id={tvVideo.key} title="" /> : null}
            </div>
            <div className="flex-1">
              <div className="text-md my-2 flex row items-center">
                <div className="">IMDB:{tvDetails.vote_average.toFixed(1)}</div>
              </div>
              <div className="text-md my-2 flex row items-center">
                <div className="mb-1">
                  <BiCameraMovie />
                </div>

                {tvDetails.genres.map((genres, key) => {
                  return (
                    <div key={key} className="text-md mx-1">
                      {genres.name}
                    </div>
                  )
                })}
              </div>
              <div className="text-md my-4 max-w-3xl">{tvDetails.overview}</div>
              <div className="text-md my-2 flex row items-center">
                <div className="mb-1">
                  <MdLanguage />
                </div>
                <div className="mx-2">
                  {' '}
                  {tvDetails.spoken_languages[0].name}
                </div>
              </div>
              <div className="text-md my-1 flex flex-row flex-wrap">
                <div>TV Series Casts:</div>
                {tvCast.cast.map((cast, key) => {
                  if (key < 10) {
                    return (
                      <div key={key} className="text-md mx-1">
                        {cast.name}
                      </div>
                    )
                  }
                })}
              </div>
              {reviewTV[0] && reviewTV[0].author ? (
                <div className="">
                  <div className="flex row justify-start items-center sm:items-start">
                    <Lottie
                      className="w-10 h-10  "
                      animationData={avatarIcon}
                    />
                    <div className=" mx-2">
                      {reviewTV[0].author} : "
                      {reviewTV[0].content.split('.')[0]}"
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <TVInfoSlider similarTV={similarTV} />
        </div>
      </div>
    )
  }
  return <Loading />
}

export default TVSeriesInfo
