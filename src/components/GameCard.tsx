import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import getCroppedImageUrl from '../services/image-url'


interface Props {
  game: Game
}


const GameCard = ({ game }: Props) => {
  return (

    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
      <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top}/></Heading>
        <HStack justifyContent='space-between' marginTop={3}>
          <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>

      </CardBody>
    </Card>
  )
}

export default GameCard
