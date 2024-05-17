import React from 'react'
import { Heading, Spinner, Text, SimpleGrid } from '@chakra-ui/react';
import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame';
import ExpandableText from '../components/ExpandableText';
import GameTrailer from '../components/GameTrailer';
import CriticScore from '../components/CriticScore';
import DefinitionItem from '../components/DefinitionItem';
import GameAttributes from '../components/GameAttributes';

const GameDetailPage = () => {
  const {slug} = useParams();
  const {data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  return (
    <>
    <Heading>{game.name}</Heading>
    <ExpandableText>{game.description_raw}</ExpandableText>
    <GameAttributes game={game} />
    <GameTrailer gameId={game.id} />
  </>
  )
}

export default GameDetailPage
