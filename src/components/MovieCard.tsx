import React from "react";
import { Movies } from '../hooks/useMovie'
import { Card, CardBody, HStack, Heading, Image} from "@chakra-ui/react";

interface Props {
  movie: Movies
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card>
      <Image src={movie.image}/>
      <CardBody>
        <Heading>{movie.title}</Heading>
      </CardBody>
    </Card>
  )
}

export default MovieCard
