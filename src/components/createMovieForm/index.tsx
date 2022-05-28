import { newDirectorType, newMovieType, newMusicianType, titlesType , newWriterType } from "@customTypes/createItemTypes";
import React, { FC, useEffect, useState } from "react";
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newMovieSchema } from "@schemas/createNewItemSchema";
import { CreateMovieSubmit } from "@services/CreateFormSubmit";
import { CreateTitleForm } from "@components/CreateTitleForm";
import { getTitles } from "@services/getTitles";
import { getDirectors } from "@services/getDirectors";
import { getWriters } from "@services/getWriters";
import { getMusicians } from "@services/getMusicians";
import Image from "next/image";

export const CreateMovieForm: FC = () => {
  const [formStep, setFormStep] = useState<string>("title")
  const [image, setImage] = useState<any>("https://ih1.redbubble.net/image.3083717230.4980/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg")
  const [titles, setTitles] = useState<titlesType[]>([]);
  const [directors, setDirectors] = useState<newDirectorType[]>([]);
  const [writers, setWriters] = useState<newWriterType[]>([]);
  const [musicians, setMusicians] = useState<newMusicianType[]>([]);
  useEffect(() => {
    getTitles(setTitles);
    getDirectors(setDirectors)
    getWriters(setWriters)
    getMusicians(setMusicians)
    // getWriters()
    // getMusicians()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const onPreviewImage = (e:any) => {
    if(e.target.name === "movieBanner"){
      let file = e.target.files[0]
      const reader = new FileReader();
      reader.onload = () => {
        if(reader.readyState === 2) {
          setImage(reader.result)
        }
      }
      reader.readAsDataURL(file);
    }
  }
  const methods = useForm<newMovieType>({
    resolver: yupResolver(newMovieSchema)
  });;
  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  return(
    <FormProvider {...methods}>
      <CreateTitleForm/>
      <form onSubmit={handleSubmit(CreateMovieSubmit)}>
        <div>
          <div>
            <label htmlFor="titleId">Title</label>
            <select {...register('titleId')}>
              <option key="default" value="choose a title">-Choose a title-</option>
              {titles.map((title, i) => (<option key={i} value={title.id}>{title.title}</option>)
              )}
            </select>
            {errors.titleId && errors.titleId?.message && <span className='text-xs text-red-500'>{errors.titleId.message}</span>}
          </div>
          <div>
            <label htmlFor="releaseDate">Realease date</label>
            <input type="date" min="1950-01-01" max="2030-01-01" id="releaseDate" placeholder="yyyy-mm-dd" {...register('releaseDate')}></input>
            {errors.releaseDate && errors.releaseDate?.message && <span className='text-xs text-red-500'>{errors.releaseDate.message}</span>}
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" placeholder="movie description" {...register('description')}/>
            {errors.description && errors.description?.message && <span className='text-xs text-red-500'>{errors.description.message}</span>}
          </div>
          <div>
            <label htmlFor="duration">Duration</label>
            <input id="duration" type="number" placeholder="movie duration" {...register('duration')}/>
            {errors.duration && errors.duration?.message && <span className='text-xs text-red-500'>{errors.duration.message}</span>}
          </div>
          <div>
            <div className="w-96 h-96 overflow-hidden">
              <Image width="500" height="500" className="object-scale-down" src={image} alt="Movie banner preview" />
            </div>
            <div>
              <label htmlFor="movieBanner">Movie banner</label>
              <input type="file" id="movieBanner" {...register('movieBanner')} onChange={onPreviewImage}/>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="directorsIds">Directors</label>
            <select {...register('directorsIds')} multiple>
              <option key="default" value="choose the directors of the movie">-Choose the directors of the movie-</option>
              {directors.map((director, i) => <option key={i} value={director.name}>{director.name}</option>
              )}
            </select>
          </div>
          <div>
            <label htmlFor="writersIds">Writers</label>
            <select {...register('writersIds')} multiple>
              <option key="default" value="choose the writers of the movie">-Choose the writers of the movie-</option>
              {writers.map((writer, i) => <option key={i} value={writer.name}>{writer.name}</option>
              )}
            </select>
          </div>
          <div>
            <label htmlFor="musiciansIds">Musicians</label>
            <select {...register('musiciansIds')} multiple>
              <option key="default" value="choose the musicians of the movie">-Choose the musicians of the movie-</option>
              {musicians.map((musician, i) => <option key={i} value={musician.name}>{musician.name}</option>
              )}
            </select>
          </div>
          <div>
            <label htmlFor="audienceScore">Audience Score</label>
            <input id="audienceScore" type="number" placeholder="audience score" {...register('audienceScore')}/>
            {errors.audienceScore && errors.audienceScore?.message && <span className='text-xs text-red-500'>{errors.audienceScore.message}</span>}
          </div>
          <div>
            <label htmlFor="linkWiki">link to Wiki</label>
            <input id="linkWiki" type="text" placeholder="link to the wiki" {...register('linkWiki')}/>
            {errors.linkWiki && errors.linkWiki?.message && <span className='text-xs text-red-500'>{errors.linkWiki.message}</span>}
          </div>
        </div>
        <input type="submit" value="Create user"></input>
      </form>
    </FormProvider>
  );
};